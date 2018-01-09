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

export TERMINAL=xfce4-terminal

export PAGER=vimpager

# Virtualenvwrapper
export WORKON_HOME=~/env
source "/usr/bin/virtualenvwrapper.sh"

# Path
export PATH="$PATH:/home/sindre/bin/:/home/sindre/.vimpkg/bin:/home/sindre/.cargo/bin"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

# Sway config
export XKB_DEFAULT_LAYOUT=no
export XKB_DEFAULT_OPTIONS=ctrl:nocaps

# Eclipse
export PATH="$PATH:/home/sindre/workspace/eclipse/tdt4100-2017-master/eclipse"

# added by travis gem
[ -f /home/sindre/.travis/travis.sh ] && source /home/sindre/.travis/travis.sh

# Android emulator
export ANDROID_SDK_ROOT="/home/sindre/Android/Sdk"

# Android sdk
export PATH="$PATH:/opt/android-sdk/build-tools/18.1.1/aapt"
alias aadb=~/Android/Sdk/platform-tools/adb
