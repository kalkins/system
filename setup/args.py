from typing import Tuple
import os
from typing import Self, Literal, get_args
from dataclasses import dataclass
import argparse
from pathlib import Path


Action = Literal["deploy", "setup"]
ValidActions: Tuple[Action] = get_args(Action)


def _get_config_dir() -> Path:
    config_home_env = os.getenv("XDG_CONFIG_HOME")
    config_home = Path(config_home_env) if config_home_env else Path.home() / ".config"
    return config_home / "system-setup"


@dataclass
class AppArguments:
    config_path: Path
    action: Action
    verbosity: int

    @classmethod
    def default_args(cls) -> Self:
        return cls(
            config_path=_get_config_dir() / "config.yaml",
            action="deploy",
            verbosity=0,
        )


def parse_arguments() -> AppArguments:
    args = AppArguments.default_args()

    parser = argparse.ArgumentParser(
        description="Install and set up packages and dotfiles",
    )
    parser.add_argument(
        "action",
        choices=ValidActions,
        nargs="?",
        default=args.action,
        help="The action to perform. 'setup' interactively alters the config file. 'deploy' ",
    )
    parser.add_argument(
        "-c",
        "--config",
        type=Path,
        default=args.config_path,
        help="Path to the system setup config file",
    )
    parser.add_argument(
        "-v",
        "--verbose",
        action="count",
        default=args.verbosity,
        help="Increase log verbosity",
    )

    parse_args = parser.parse_args()

    if parse_args.config:
        args.config_path = parse_args.config

    if parse_args.action in ValidActions:
        args.action = parse_args.action

    if parse_args.verbose:
        args.verbosity = parse_args.verbose

    return args
