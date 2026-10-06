# Set terminal title
function set-title() {
    if [[ -z "$ORIG" ]]; then
        ORIG=$PS1
    fi
    TITLE="\[\e]2;$*\a\]"
    PS1=${ORIG}${TITLE}
}

# CD to real location of a symlink
function cdf() {
    cd $(dirname $(readlink -f $1))
}

# CD to the root of a git repo
function cdr() {
    cd $(git rev-parse --show-toplevel)
}

alias aadb="$ANDROID_SDK_ROOT/platform-tools/adb"

# Backblaze
alias b2=backblaze-b2
