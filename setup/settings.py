# Files/dirs to ignore when searching for packages
ignore = ['__init__.py', '__pycache__']

# The commands to install packages
install_commands = {
    'arch': ['sudo', 'pacman', '--needed', '-S'],
    'fedora': ['sudo', 'dnf', 'install'],
    'ubuntu': ['sudo', 'apt', 'install'],
    'osx': ['brew', 'install'],
}

# The commands to check if a package is installed
check_installed_commands = {
    'arch': ['pacman', '-Qi'],
}

# A list of supported distros
distros = ['arch', 'fedora', 'ubuntu', 'osx']

# The base dependencies necesarry for installation
common_dependencies = {'stow'}
main_dependencies = {
    'arch': common_dependencies,
    'fedora': common_dependencies,
    'ubuntu': common_dependencies,
    'osx': common_dependencies,
}
