#!/usr/bin/python3

from config import Config
import actions
import logging
from args import parse_arguments
from settings import install_commands
from utils import get_distro, get_packages, run_command, get_dependencies


def setup_logging(verbosity: int) -> None:
    if verbosity == 0:
        log_level = logging.WARNING
    elif verbosity == 1:
        log_level = logging.INFO
    elif verbosity >= 2:
        log_level = logging.DEBUG
    else:
        print(f"Invalid verbosity {verbosity}")
        exit(-1)

    logging.basicConfig(
        level=log_level,
        format="%(levelname)-8s [%(filename)s:%(lineno)d] %(message)s",
        datefmt="%Y-%m-%dT%H:%M:%S",
    )


def main():
    setup_logging(0)
    args = parse_arguments()
    setup_logging(args.verbosity)

    config = Config.parse(args.config_path) if args.config_path.exists() else None

    if config is None or args.action == "setup":
        config = actions.setup(config)

        while True:
            save_input = input(f"Save config to {args.config_path}? [Y/n] ")

            if save_input in ["", "Y", "y"]:
                Config.save(args.config_path)
                break
            elif save_input in ["N", "n"]:
                break
            else:
                print(f"Invalid answer '{save_input}'")

    if args.action == "deploy":
        actions.deploy(config)

    distro = get_distro(args.distro)
    print()
    packages = get_packages(
        distro, args.packages if args.packages else "*" if args.all else None
    )
    dependencies = get_dependencies(distro, packages)

    if dependencies:
        install_command = install_commands[distro]

        if args.yay_flags:
            install_command += args.yay_flags.split(",")

        install_command += list(dependencies)

        print()
        print("Installing packages...")
        print(" ".join(install_command))
        run_command(install_command)
    else:
        print()
        print("No packages to install")

    print()
    print("Fetching submodules")
    for package in packages:
        if package.has_submodules:
            run_command(
                ["git", "submodule", "update", "--init", "--recursive", package.path]
            )

    print()
    for package in packages:
        print("Setting up {}".format(package))
        package.setup(distro)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
