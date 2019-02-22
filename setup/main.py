from settings import install_commands
from utils import get_distro, get_packages, run_command, get_dependencies


def main():
    distro = get_distro()
    print()
    packages = get_packages(distro)
    dependencies = get_dependencies(distro, packages)

    if dependencies:
        install_command = install_commands[distro] + list(dependencies)

        print()
        print('Installing packages...')
        print(' '.join(install_command))
        run_command(install_command)
    else:
        print()
        print('No packages to install')

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
