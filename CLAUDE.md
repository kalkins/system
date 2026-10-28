# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal dotfiles/system configuration repo for synchronizing configs across machines and setting up new computers. It uses GNU Stow to symlink dotfiles from `packages/<name>/dotfiles/` into the home directory.

## Running the Setup Script

```bash
# Interactive setup (select distro and packages, then deploy)
./setup.sh setup

# Deploy using an existing config
./setup.sh deploy

# Deploy only specific packages
./setup.sh deploy --packages zsh,vim,git

# Deploy all packages
./setup.sh deploy --all

# Increase verbosity
./setup.sh deploy -v        # INFO
./setup.sh deploy -vv       # DEBUG
```

The config file is saved to `$XDG_CONFIG_HOME/system-setup/config.yaml` (defaults to `~/.config/system-setup/config.yaml`).

## Architecture

### Package System

Each directory under `packages/` is a package. A package's behavior is defined by `settings.py` in that directory. The `setup/utils.py:Package` class dynamically imports these settings files.

Key `settings.py` fields:
- `common_deps` / `dependencies` — system packages to install (via `yay`/`apt`/etc.). `dependencies` is a dict keyed by distro name; `common_deps` is a set applied to all distros.
- `has_submodules` — whether to run `git submodule update --init --recursive` for this package
- `make` — whether to run `make` in the package directory before stowing
- `custom_setup` — if `True`, the package must have a `setup.py` with a `setup(distro)` function; stow is not used
- `dotfiles_dir` — subdirectory to stow (default: `"dotfiles"`); set to `None` to skip stowing
- `target_dir` — stow target (default: `~`)

### Dotfiles Deployment

For standard packages, `stow -R -d <package_path> -t <target_dir> <dotfiles_dir>` is run. Files in `packages/<name>/dotfiles/` are symlinked to their relative path under `~`.

### Config File Format

The config JSON (at `~/.config/system-setup/config.yaml`) contains:
```json
{
  "distro": "arch",
  "selected_packages": ["zsh", "vim", "git"],
  "extra_command_flags": {}
}
```

### Two-Version Problem

`setup/utils.py` contains the original `Package` class (the live code). `setup/package.py` appears to be a WIP refactor with an incomplete/broken `Package` class — it is not imported anywhere. `setup/main.py` imports from `utils.py`. The `setup/actions/deploy.py` is also incomplete (references `self` outside a class).

### Supported Distros

Arch Linux is the primary target. `settings.py` defines `distros = ['arch', 'fedora', 'ubuntu', 'osx']` as supported values, but only Arch (`yay`) is actively tested.
