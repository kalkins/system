import subprocess


def setup(distro):
    subprocess.call('stow', 'dotfiles')
