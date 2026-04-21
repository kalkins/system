import logging
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Self, Set

import yaml
from config import Distro, DistroSpecific, PackageSource, SystemTag

logger = logging.getLogger(__file__)

_settings_file_names = [
    "settings.yml",
    "settings.yaml",
]


PackageDependencies = Dict[PackageSource, Set[str]]


@dataclass
class PackageDependencyVariants(DistroSpecific[PackageDependencies]):
    @classmethod
    def parse(cls, data: Any) -> Self:
        if not isinstance(data, dict):
            raise ValueError(
                f"Cannot parse '{data}' to PackageDependencies. Only dictionaries are supported"
            )

        default: Set[str] = data.get("default", set())
        overrides: Dict[Distro, PackageDependencies] = {}

        # The keys for the distros are at the same level as 'common',
        # so we have to search for them
        for key in data.keys() - {"default"}:
            if distro := Distro.parse(key):
                overrides[distro] = {
                    k: set([str(x) for x in v]) for k, v in data[key].items()
                }
            else:
                logger.warning("Unknown distro '%s'", key)

        return cls(default, overrides)


@dataclass
class PackageDeploymentDetails:
    dependencies: PackageDependencyVariants | None
    dotfiles_dir: str
    target_dir: Path

    @classmethod
    def parse(cls, data: Any) -> Self:
        if not isinstance(data, dict):
            raise ValueError(
                f"Cannot parse '{data}' to Package. Only dictionaries are supported"
            )

        dependencies = (
            PackageDependencyVariants.parse(data["dependencies"])
            if "dependencies" in data
            else None
        )

        return cls(
            dependencies=dependencies,
            dotfiles_dir=data.get("dotfiles_dir") or "dotfiles",
            target_dir=Path(data.get("target_dir", Path.home())).expanduser(),
        )


@dataclass
class Package:
    name: str
    path: Path
    enabled_default: bool
    distros: Set[Distro]
    has_makefile: bool
    has_submodules: bool
    common_deployment: PackageDeploymentDetails
    tagged_deployment: Dict[SystemTag, PackageDeploymentDetails]

    def __str__(self):
        return self.name

    def __hash__(self):
        return hash(self.path)

    @classmethod
    def parse(cls, path: Path, data: Any) -> Self:
        if not isinstance(data, dict):
            raise ValueError(
                f"Cannot parse '{data}' to Package. Only dictionaries are supported"
            )

        distros: Set[Distro]

        if distro_names := data.get("distros"):
            distros = set()

            for name in distro_names:
                if distro := Distro.parse(name):
                    distros.add(distro)
                else:
                    logger.warning("Unknown distro '%s'", name)
        else:
            distros = set(Distro)

        return cls(
            name=data.get("name", path.name),
            path=path,
            enabled_default=data.get("enabled_default", False),
            distros=distros,
            has_makefile=data.get("make", False),
            has_submodules=data.get("submodules", False),
            common_deployment=PackageDeploymentDetails.parse(data),
            tagged_deployment={
                SystemTag.parse_require(tag): PackageDeploymentDetails.parse(
                    data["tags"][tag]
                )
                for tag in data.get("tags", [])
            },
        )

    @classmethod
    def load(cls, dir: Path) -> Self:
        for alt_settings_path in _settings_file_names:
            settings_path = dir / alt_settings_path

            if settings_path.exists():
                with settings_path.open("r") as f:
                    settings = yaml.safe_load(f) or {}
                    break
        else:
            logger.debug("Could not find settings file for %s", dir.name)
            settings = {}

        return cls.parse(dir, settings)
