# Load config parts in order. OS-specific parts come from separate stow dirs
for config_file in ~/.zshrc.d/*.zsh(N); do
    source "$config_file"
done
unset config_file

# Import local config
if [ -f ~/.zshrc.local ]; then
    source ~/.zshrc.local
fi
