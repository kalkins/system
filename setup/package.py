from typing import Set, List, Self
from pathlib import Path
from dataclasses import dataclass


@dataclass
class Package:
    name: str
    has_submodules: bool
    custom_setup: bool
    dotfiles_dir: Path
    target_dir: Path
    make: bool
    dependencies: Set[str]
    common_deps: Set[str]

    def __init__(self, path):
        self.path = path

        self.settings = self.import_file("settings")

        try:
            self.load_setting("dependencies")
            self.distros = self.dependencies.keys()
        except AttributeError:
            self.load_setting("distros", distros)
            self.dependencies = dict()
            common_deps = self.get_setting("common_deps", set())
            for distro in self.distros:
                self.dependencies[distro] = common_deps

        for distro in self.distros:
            self.dependencies[distro] = self.dependencies[distro].union(
                main_dependencies[distro]
            )

    def load_setting(self, attr, default=MISSING):
        setattr(self, attr, self.get_setting(attr, default))

    def get_setting(self, attr, default=MISSING):
        try:
            return getattr(self.settings, attr)
        except AttributeError as e:
            if default is MISSING:
                raise e
            return default

    @classmethod
    def parse(cls, path: Path) -> Self:
        spec = util.spec_from_file_location(f, os.path.join(self.path, f + ".py"))
        module = util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

    @classmethod
    def parse_all(cls, dir: Path) -> List[Self]:
        return [cls.parse(p) for p in dir.iterdir()]
