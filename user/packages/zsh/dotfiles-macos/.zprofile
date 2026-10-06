# Homebrew. Set up here rather than in .zshenv so that macOS path_helper
# (run from /etc/zprofile) doesn't reorder PATH afterwards
eval "$(/opt/homebrew/bin/brew shellenv)"
