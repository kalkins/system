# Start Mozilla application with native wayland
if [[ "$XDG_SESSION_TYPE" == "wayland" ]]; then
    export MOZ_ENABLE_WAYLAND=1
fi

# Use gpg-agent as the SSH agent. On macOS gpgconf isn't in PATH until
# .zprofile has run, so .zshrc.d/60-gpg.zsh sets this again
if command -v gpgconf >/dev/null; then
    unset SSH_AGENT_PID
    export SSH_AUTH_SOCK="$(gpgconf --list-dirs agent-ssh-socket)"
fi
