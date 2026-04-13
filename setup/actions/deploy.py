from config import Config, Distro


def deploy(config: Config) -> None:
    if self.custom_setup:
        setup = self.import_file("setup")
        setup.setup(distro)
    else:
        if self.make:
            run_command(["make", "-C", self.path])

        if self.dotfiles_dir:
            run_command(
                [
                    "stow",
                    "-R",
                    "-d",
                    self.path,
                    "-t",
                    self.target_dir,
                    self.dotfiles_dir,
                ]
            )
