# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

export TERM="xterm-256color"

# Path to your oh-my-zsh installation.
  export ZSH=/home/sindre/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_CUSTOM=$HOME/.oh-my-zsh-custom
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(dir rbenv pyenv virtualenv vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(background_jobs root_indicator time)
POWERLEVEL9K_DIR_DEFAULT_BACKGROUND="027"
POWERLEVEL9K_DIR_HOME_BACKGROUND="027"
POWERLEVEL9K_DIR_HOME_SUBFOLDER_BACKGROUND="027"
POWERLEVEL9K_MODE="nerdfont-complete"
ZSH_THEME="powerlevel9k/powerlevel9k"

# Set list of themes to load
# Setting this variable when ZSH_THEME=random
# cause zsh load theme from this variable instead of
# looking in ~/.oh-my-zsh/themes/
# An empty array have no effect
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# Set editor
#export EDITOR=vim
# Requires systemctl --user start emacs
export EDITOR=emacsclient

export TERMINAL=xfce4-terminal

export PAGER=less

# Emacs
alias e="emacsclient"

# Pacman
pacinstall() {
    pacaur -S --needed $@
}

pacsearch() {
    pacman -Ss $@
}

pacupdate() {
    pacaur -Syu
}

# Pipenv
alias pipinstall="pipenv install"
alias pipshell="pipenv shell"
alias piprun="pipenv run"
alias pippy="pipenv run python"

# Virtualenvwrapper
export WORKON_HOME=~/env/
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

# Backblaze
alias b2=backblaze-b2

# Direnv
if $(command -v direnv 1>/dev/null); then
    eval "$(direnv hook zsh)"
fi

# Import local config
if [ -f ~/.zshrc.local ]; then
    source ~/.zshrc.local
fi
