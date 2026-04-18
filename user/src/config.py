import logging
import yaml
from dataclasses import dataclass
from enum import StrEnum
from pathlib import Path
from typing import List, Self, Set, Dict, Any

logger = logging.getLogger(__file__)


PackageSource = str
DefaultPackageSource = "main"


class Distro(StrEnum):
    Arch = "Arch"
    Ubuntu = "Ubuntu"
    Fedora = "Fedora"

    @classmethod
    def parse(cls, input: str) -> Self | None:
        for distro in cls:
            if input.lower() == distro.value.lower():
                return distro
        else:
            return None


@dataclass
class DistroSpecific[T]:
    default: T | None
    overrides: Dict[Distro, T]

    def get(self, distro: Distro) -> T | None:
        if distro in self.overrides:
            return self.overrides[distro]
        else:
            return self.default


@dataclass
class ShellCommand:
    command: str
    args: List[str]
    sudo: bool = False

    def to_dict(self) -> Dict:
        return {
            "command": self.command,
            "args": self.args,
            "sudo": self.sudo,
        }

    @classmethod
    def parse(cls, data: Any) -> Self:
        if not isinstance(data, dict):
            raise ValueError(
                f"Cannot parse '{data}' to {cls.__name__}. Only dictionaries are supported"
            )

        return cls(
            command=data["command"],
            args=[str(a) for a in data["args"]],
            sudo=data["sudo"],
        )


@dataclass
class PackageManagerCommand:
    sources: Dict[PackageSource, ShellCommand]

    def to_dict(self) -> Dict:
        return {k: v.to_dict() for k, v in self.sources.items()}

    @classmethod
    def parse(cls, data: Any) -> Self:
        if not isinstance(data, dict):
            raise ValueError(
                f"Cannot parse '{data}' to {cls.__name__}. Only dictionaries are supported"
            )

        return cls({k: ShellCommand.parse(v) for k, v in data.items()})


@dataclass
class CommandsConfig:
    install: Dict[Distro, PackageManagerCommand]

    @classmethod
    def default(cls) -> Self:
        return cls(
            install={
                Distro.Arch: PackageManagerCommand(
                    sources={
                        DefaultPackageSource: ShellCommand(
                            command="pacman",
                            args=["-S", "--needed"],
                            sudo=True,
                        ),
                        "aur": ShellCommand(
                            command="yay",
                            args=["-S", "--needed"],
                            sudo=False,
                        ),
                    }
                ),
                Distro.Ubuntu: PackageManagerCommand(
                    sources={
                        DefaultPackageSource: ShellCommand(
                            command="apt-get",
                            args=["install"],
                            sudo=True,
                        ),
                    }
                ),
                Distro.Fedora: PackageManagerCommand(
                    sources={
                        DefaultPackageSource: ShellCommand(
                            command="dnf",
                            args=["install"],
                            sudo=True,
                        ),
                    }
                ),
            },
        )

    def to_dict(self) -> Dict:
        return {
            "install": {
                str(distro): cmd.to_dict() for distro, cmd in self.install.items()
            }
        }

    @classmethod
    def parse(cls, data: Any) -> Self:
        if not isinstance(data, dict):
            raise ValueError(
                f"Cannot parse '{data}' to {cls.__name__}. Only dictionaries are supported"
            )

        if "install" not in data:
            raise ValueError(
                f"Cannot parse '{data}' to {cls.__name__}. The field 'install' must be present"
            )

        install_commands: Dict[Distro, PackageManagerCommand] = {}

        for distro_name, command in data["install"].items():
            distro = Distro.parse(distro_name)

            if not distro:
                raise ValueError(
                    f"Cannot parse '{data}' to {cls.__name__}. Invalid distro '{distro_name}'"
                )

            install_commands[distro] = PackageManagerCommand.parse(command)

        return cls(install_commands)


@dataclass
class AppConfig:
    distro: Distro
    selected_packages: Set[str]
    commands: CommandsConfig | None

    def to_dict(self) -> Dict:
        return {
            "distro": str(self.distro),
            "selected_packages": sorted(self.selected_packages),
            "commands": self.commands.to_dict() if self.commands else None,
        }

    def save(self, path: Path) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)

        with path.open("w") as f:
            yaml.safe_dump(self.to_dict(), f)

    @classmethod
    def parse(cls, path: Path) -> Self | None:
        if not path.exists():
            logger.debug("Config file does not exist at %s", path)
            return None

        with path.open("r") as f:
            config = yaml.safe_load(f)
            distro = Distro.parse(config.get("distro"))
            commands = config.get("commands")

            if not distro:
                raise ValueError(f"Invalid distro '{distro}' in config file")

            return cls(
                distro=distro,
                commands=CommandsConfig.parse(commands) if commands else None,
                selected_packages=set(config["selected_packages"]),
            )
