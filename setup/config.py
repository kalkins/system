from dataclasses import dataclass
from enum import StrEnum
import json
from pathlib import Path
from typing import List, Self


class Distro(StrEnum):
    Arch = "arch"


@dataclass
class Config:
    distro: Distro
    selected_packages: List[str]
    extra_command_flags: dict[str, List[str]]

    @classmethod
    def parse(cls, path: Path) -> Self:
        with path.open("r") as f:
            config = json.load(f)

            return cls(
                distro=Distro(config["distro"]),
                selected_packages=config["selected_packages"],
                extra_command_flags=config["extra_command_flags"],
            )

    @classmethod
    def save(cls, path: Path) -> None:
        with path.open("w") as f:
            raise NotImplementedError()
