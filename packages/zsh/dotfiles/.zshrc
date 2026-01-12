export TERM="xterm-256color"
export EDITOR=vim
export TERMINAL=xfce4-terminal
export PAGER=less

# Powerlevel 10k
source ~/.p10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
[[ ! -f ~/.p10k.local.zsh ]] || source ~/.p10k.local.zsh

# History
HISTSIZE=10000
SAVEHIST=$HISTSIZE
HISTFILE=~/.zsh_history

# Completion
autoload -Uz compinit
compinit

# Set terminal title
function set-title() {
    if [[ -z "$ORIG" ]]; then
        ORIG=$PS1
    fi
    TITLE="\[\e]2;$*\a\]"
    PS1=${ORIG}${TITLE}
}

# Search history with substring and up/down arrows
autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "^[[A" up-line-or-beginning-search
bindkey "^[[B" down-line-or-beginning-search

# Path
export PATH="$PATH:$HOME/bin/:$HOME/.local/bin:$HOME/.vimpkg/bin:$HOME/.cargo/bin"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

# Sway config
export XKB_DEFAULT_LAYOUT=no
export XKB_DEFAULT_OPTIONS=ctrl:nocaps

# GPG TTY
export GPG_TTY=$(tty)
gpg-connect-agent updatestartuptty /bye >/dev/null

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

# Ruby
if $(command -v gem 1>/dev/null); then
    export GEM_HOME="$(gem env user_gemhome)"
    export PATH="$PATH:$GEM_HOME/bin"
fi

# CD to real location of a symlink
function cdf() {
    cd $(dirname $(readlink -f $1))
}

# CD to the root of a git repo
function cdr() {
    cd $(git rev-parse --show-toplevel)
}

# Set up completion
if type k3d > /dev/null 2>&1; then
    eval "$(k3d completion zsh)"
fi

if type helm > /dev/null 2>&1; then
    eval "$(helm completion zsh)"
fi

# Set up fzf key bindings and fuzzy completion
source <(fzf --zsh)

# Import local config
if [ -f ~/.zshrc.local ]; then
    source ~/.zshrc.local
fi

unset SSH_AGENT_PID
export SSH_AUTH_SOCK="$(gpgconf --list-dirs agent-ssh-socket)"

# Add Doom Emacs to path
export PATH="$PATH:$HOME/.emacs.d/bin"
