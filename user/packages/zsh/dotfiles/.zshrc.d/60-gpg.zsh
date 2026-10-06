export GPG_TTY=$(tty)
gpgconf --launch gpg-agent
gpg-connect-agent updatestartuptty /bye >/dev/null

# Use gpg-agent as the SSH agent
unset SSH_AGENT_PID
export SSH_AUTH_SOCK="$(gpgconf --list-dirs agent-ssh-socket)"
