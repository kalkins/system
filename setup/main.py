#!/usr/bin/python3

import argparse
from settings import install_commands
from utils import get_distro, get_packages, run_command, get_dependencies


def main():
    parser = argparse.ArgumentParser(
        description='Install and set up packages and dotfiles',
    )
    parser.add_argument('-a', '--all', action='store_true', help='Use all packages')
    parser.add_argument('-d', '--distro', help='The current distro')
    parser.add_argument('--yay-flags', default='', help='Flags to pass to yay')
    parser.add_argument('packages', nargs='*', help='Packages to use')

    args = parser.parse_args()

    distro = get_distro(args.distro)
    print()
    packages = get_packages(distro, args.packages if args.packages else '*' if args.all else None)
    dependencies = get_dependencies(distro, packages)

    if dependencies:
        install_command = install_commands[distro] + args.yay_flags.split(',') + list(dependencies)

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
