#!/usr/bin/python3

from args import Action
from config import AppConfig
import actions
import logging
from args import parse_arguments

logger = logging.getLogger(__file__)


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
        force=True,
    )


def main():
    setup_logging(0)
    args = parse_arguments()
    setup_logging(args.verbosity)

    logger.debug("Parsed command line arguments: %s", args)

    props = args.to_props()
    config = AppConfig.parse(args.config_path)

    if config is None or Action.Setup in args.actions:
        if config is None:
            print("Running first-time setup")

        config = actions.setup(props, config)

        while not props.dry_run:
            save_input = input(f"Save config to {args.config_path}? [Y/n] ")

            if save_input in ["", "Y", "y"]:
                config.save(args.config_path)
                break
            elif save_input in ["N", "n"]:
                break
            else:
                print(f"Invalid answer '{save_input}'")

    if Action.Deploy in args.actions:
        actions.deploy(props, config)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print()
        pass
