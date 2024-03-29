import os
import subprocess
from functools import reduce
from importlib import util

from settings import distros, ignore, main_dependencies, check_installed_commands

MISSING = object()


class Package:
    def __init__(self, path):
        self.path = path

        self.settings = self.import_file('settings')
        self.load_setting('name', path.split('/')[-1])
        self.load_setting('has_submodules', False)
        self.load_setting('custom_setup', False)
        self.load_setting('dotfiles_dir', 'dotfiles')
        self.load_setting('target_dir', os.path.expanduser('~'))
        self.load_setting('make', False)

        try:
            self.load_setting('dependencies')
            self.distros = self.dependencies.keys()
        except AttributeError:
            self.load_setting('distros', distros)
            self.dependencies = dict()
            common_deps = self.get_setting('common_deps', set())
            for distro in self.distros:
                self.dependencies[distro] = common_deps

        for distro in self.distros:
            self.dependencies[distro] = self.dependencies[distro].union(main_dependencies[distro])

    def __str__(self):
        return self.name

    def import_file(self, f):
        spec = util.spec_from_file_location(f, os.path.join(self.path, f + '.py'))
        module = util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

    def load_setting(self, attr, default=MISSING):
        setattr(self, attr, self.get_setting(attr, default))

    def get_setting(self, attr, default=MISSING):
        try:
            return getattr(self.settings, attr)
        except AttributeError as e:
            if default is MISSING:
                raise e
            return default

    def setup(self, distro):
        if self.custom_setup:
            setup = self.import_file('setup')
            setup.setup(distro)
        else:
            if self.make:
                run_command(['make', '-C', self.path])

            if self.dotfiles_dir:
                run_command(['stow', '-R', '-d', self.path, '-t', self.target_dir, self.dotfiles_dir])


def get_distro(selected=None):
    if selected is None:
        q = 'Select distro: {} or {}? '.format(', '.join(distros[0:-1]), distros[-1])

        while True:
            reply = input(q)
            if reply in distros:
                return reply
    else:
        if selected in distros:
            return selected
        else:
            raise RuntimeError(f'Not compatible with distro {selected}')


def get_packages(distro, selected=None):
    packages = []
    package_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                               'packages')

    for dir_name in os.listdir(package_dir):
        if dir_name in ignore:
            continue

        try:
            package = Package(os.path.join(package_dir, dir_name))
        except Exception as e:
            print('Encountered exception "{}" in package {}. Skipping'.format(e, dir_name))
            continue

        if distro in package.distros:
            if selected is None:
                while True:
                    reply = input('Setup {}? Y/n: '.format(dir_name))
                    if reply in ['', 'y', 'Y']:
                        packages.append(package)
                        break
                    elif reply in ['n', 'N']:
                        break
            elif selected == '*' or dir_name in selected:
                packages.append(package)

    return packages


def run_command(command):
    subprocess.run(command).check_returncode()


def get_dependencies(distro, packages):
    dependencies = reduce(
        lambda x, y: x.union(y),
        map(lambda x: x.dependencies[distro], packages),
        set()
    )

    if distro in check_installed_commands:
        command = check_installed_commands[distro]
        dependencies = [
            dependency
            for dependency in dependencies
            if subprocess.run(command+[dependency], capture_output=True).returncode != 0
        ]

    return dependencies
