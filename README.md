# System settings and configs
A repo containing my personal configs for various programs,
used for easily synchronizing configs between computers and
quickly setting up new computers.

## Usage
Packages live in `user/packages/<name>`. Each has a `settings.yml` with
its dependencies and a `dotfiles` dir that is stowed into `$HOME`.
OS-specific files go in `dotfiles-linux` / `dotfiles-macos`.

Run `user/setup.sh` to select the distro, tags and packages (first run,
or `user/setup.sh setup` later) and deploy them. The config is saved to
`~/.config/system-setup/config.yaml`. Requires [uv](https://docs.astral.sh/uv/)
and `stow`.

## Setting up a new Mac
1. Install the Xcode command line tools (`xcode-select --install`) and
   [Homebrew](https://brew.sh).
2. Clone this repo to `~/workspace/system`.
3. Move existing files that stow would conflict with out of the way, e.g.
   ```sh
   for f in ~/.zshrc ~/.zprofile ~/.gnupg/gpg-agent.conf ~/.gnupg/scdaemon.conf; do
       [ -f "$f" ] && [ ! -L "$f" ] && mv "$f" "$f.bak"
   done
   ```
4. Run `user/bootstrap-macos.sh`. It installs `stow` and `uv` from
   `user/Brewfile`, then runs `user/setup.sh`.
5. Load the gpg-agent SSH LaunchAgent without logging out:
   ```sh
   launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.sindrestephansen.gpg-ssh-auth-sock.plist
   ```
