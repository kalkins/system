autoload -Uz compinit
compinit

if type k3d > /dev/null 2>&1; then
    eval "$(k3d completion zsh)"
fi

if type helm > /dev/null 2>&1; then
    eval "$(helm completion zsh)"
fi
