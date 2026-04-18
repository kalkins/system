from props import AppSteps
from props import AppProperties
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


def _get_packages_dir() -> Path:
    return Path(__file__).parent.parent / "packages"


@dataclass
class AppArguments:
    config_path: Path
    packages_dir: Path
    action: Action
    step_install: bool
    step_extra_setup: bool
    step_deploy: bool
    step_undeploy: bool
    dry_run: bool
    verbosity: int

    def __str__(self) -> str:
        steps = [
            name
            for name, cond in [
                ("install", self.step_install),
                ("extra setup", self.step_extra_setup),
                ("deploy", self.step_deploy),
                ("undeploy", self.step_undeploy),
            ]
            if cond
        ]

        return (
            f"action: {self.action}, "
            f"dry run: {self.dry_run}, "
            f"verbosity: {self.verbosity}, "
            f"config path: {self.config_path}, "
            f"packages path: {self.packages_dir}, "
            f"steps: [{', '.join(steps)}]"
        )

    def to_props(self) -> AppProperties:
        return AppProperties(
            steps=AppSteps(
                install=self.step_install,
                deploy=self.step_deploy,
                extra_setup=self.step_extra_setup,
                undeploy=self.step_undeploy,
            ),
            packages_dir=self.packages_dir,
            dry_run=self.dry_run,
        )

    @classmethod
    def default_args(cls) -> Self:
        return cls(
            config_path=_get_config_dir() / "config.yaml",
            packages_dir=_get_packages_dir(),
            action="deploy",
            step_install=True,
            step_extra_setup=True,
            step_deploy=True,
            step_undeploy=True,
            dry_run=False,
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
        "-p",
        "--packages",
        type=Path,
        default=args.packages_dir,
        help="Path to the directory with the package configs to install",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        default=args.dry_run,
        help="Simulate a run and print the commands that would have been executed",
    )
    parser.add_argument(
        "--no-install",
        action="store_true",
        default=not args.step_install,
        help="Do not install system program dependencies",
    )
    parser.add_argument(
        "--no-extra-setup",
        action="store_true",
        default=not args.step_extra_setup,
        help="Do not perform extra setup",
    )
    parser.add_argument(
        "--no-deploy",
        action="store_true",
        default=not args.step_deploy,
        help="Do not deploy dotfiles",
    )
    parser.add_argument(
        "--no-undeploy",
        action="store_true",
        default=not args.step_undeploy,
        help="Do not unlink dotfiles for packages that are not selected",
    )
    parser.add_argument(
        "-v",
        "--verbose",
        action="count",
        default=args.verbosity,
        help="Increase log verbosity",
    )

    parse_args = parser.parse_args()

    args.config_path = parse_args.config
    args.packages_dir = parse_args.packages
    args.action = parse_args.action
    args.step_install = not parse_args.no_install
    args.step_extra_setup = not parse_args.no_extra_setup
    args.step_deploy = not parse_args.no_deploy
    args.step_undeploy = not parse_args.no_undeploy
    args.dry_run = parse_args.dry_run
    args.verbosity = parse_args.verbose

    return args
