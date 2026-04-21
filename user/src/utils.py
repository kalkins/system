import logging
from pathlib import Path
from typing import List
import subprocess

from package import Package
from settings import ignore

logger = logging.getLogger(__file__)


def get_packages(packages_dir: Path) -> List[Package]:
    packages: List[Package] = []

    for dir in packages_dir.iterdir():
        if dir.name in ignore:
            continue

        try:
            packages.append(Package.load(dir))
        except Exception as e:
            print(f'Encountered exception in package {dir.name}: "{e}"')
            logger.error(e, "Could not load package settings")
            continue

    return packages


def run_command(
    command: str, args: List[str | Path], sudo: bool = False, dry_run: bool = False
) -> None:
    args: List[str] = [
        arg if isinstance(arg, str) else str(arg.absolute()) for arg in args
    ]

    sudo_command: List[str] = ["sudo"] if sudo else []

    command_list: List[str] = [
        *sudo_command,
        command,
        *args,
    ]

    command_str = " ".join(command_list)

    if dry_run:
        print(command_str)
    else:
        logger.debug("Running command: %s", command_str)
        subprocess.run(command_list).check_returncode()
