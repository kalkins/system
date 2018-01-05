from functools import reduce

from settings import install_commands
from utils import get_distro, get_packages, run_command


def main():
    distro = get_distro()
    print()
    packages = get_packages(distro)
    dependencies = reduce(lambda x, y: x.union(y),
                          map(lambda x: x.dependencies[distro], packages),
                          set())

    if dependencies:
        install_command = install_commands[distro] + list(dependencies)

        print()
        print('Installing packages...')
        print(' '.join(install_command))
        run_command(install_command)

    print()
    print('Fetching submodules')
    for package in packages:
        if package.has_submodules:
            run_command(['git', 'submodule', 'update', '--init', '--recursive', package.path])

    print()
    for package in packages:
        print('Setting up {}'.format(package))
        package.setup(distro)


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        pass
