#!/bin/sh
set -e

script_abs_path=$(readlink -f "$0")
script_dir=$(dirname "$script_abs_path")

if ! command -v brew >/dev/null; then
    echo "Homebrew is not installed, see https://brew.sh" >&2
    exit 1
fi

brew bundle --file "$script_dir/Brewfile"

# Create directories that must not be folded into a single stow symlink,
# so files written by other programs don't end up in this repo
mkdir -p \
    "$HOME/Library/LaunchAgents" \
    "$HOME/Library/Application Support/lazygit" \
    "$HOME/.ssh/sockets"

exec sh "$script_dir/setup.sh" "$@"
