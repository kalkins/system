export TERM="xterm-256color"

# Powerlevel 10k
source ~/.p10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
[[ ! -f ~/.p10k.local.zsh ]] || source ~/.p10k.local.zsh

# History
HISTSIZE=10000
SAVEHIST=$HISTSIZE
HISTFILE=~/.zsh_history

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

# Set terminal title
function set-title() {
    if [[ -z "$ORIG" ]]; then
        ORIG=$PS1
    fi
    TITLE="\[\e]2;$*\a\]"
    PS1=${ORIG}${TITLE}
}


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

# Path
export PATH="$PATH:/home/sindre/bin/:/home/sindre/.vimpkg/bin:/home/sindre/.cargo/bin"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

# Sway config
export XKB_DEFAULT_LAYOUT=no
export XKB_DEFAULT_OPTIONS=ctrl:nocaps

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

# Zoxide
if $(command -v zoxide 1>/dev/null); then
    eval "$(zoxide init zsh --cmd cd)"
fi

# Import local config
if [ -f ~/.zshrc.local ]; then
    source ~/.zshrc.local
fi
