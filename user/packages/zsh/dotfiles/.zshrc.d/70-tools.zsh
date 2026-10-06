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

# Set up fzf key bindings and fuzzy completion
if $(command -v fzf 1>/dev/null); then
    source <(fzf --zsh)
fi
