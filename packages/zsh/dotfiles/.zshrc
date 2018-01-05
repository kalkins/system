# The following lines were added by compinstall
zstyle :compinstall filename '/home/sindre/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt autocd
# End of lines configured by zsh-newuser-install

# Load custom prompts
source ~/.zsh/prompts/zsh-git-prompt/zshrc.sh
PROMPT='%B%~%b$(git_super_status) %# '

# Set editor
export EDITOR=vim

# Path
export PATH="$PATH:/home/sindre/bin/"

# Sway config
export XKB_DEFAULT_LAYOUT=no
export XKB_DEFAULT_OPTIONS=ctrl:nocaps
