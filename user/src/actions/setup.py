import re
from pathlib import Path
from typing import Set

from config import AppConfig, Distro, SystemTag
from package import Package
from props import AppProperties
from utils import get_packages

_select_expr = re.compile(r"^(?P<negate>-)?(?P<start>\d+)(-(?P<end>\d+))?$")


def _select_distro(selected_distro: Distro | None) -> Distro:
    distros = {i: d for i, d in enumerate(Distro)}

    for i, distro in distros.items():
        selected = distro == selected_distro
        print(f"{i:<2}: [{'*' if selected else ' '}] {distro}")

    while True:
        distro_input = input(
            f"Select distro{' (or press ENTER to confirm existing)' if selected_distro else ''}: "
        )

        if distro_input == "":
            if selected_distro:
                return selected_distro
            else:
                print("Please enter a number")
                continue

        try:
            distro_num = int(distro_input)

            if distro_num >= 0 and distro_num < len(distros):
                return distros[distro_num]
            else:
                print("Invalid distro number")
                continue
        except ValueError:
            print("Not a valid number")
            continue


def _select_tags(selected_tags: Set[SystemTag]) -> Set[SystemTag]:
    tags = list(SystemTag)

    while True:
        print()
        for i, tag in enumerate(tags):
            selected = tag in selected_tags
            print(f"{i:<2}: [{'*' if selected else ' '}] {tag.name}")

        tag_input = input("Select tags or leave blank to confirm: ")

        if tag_input == "":
            return selected_tags

        for part in tag_input.split(" "):
            if part == "*":
                selected_tags = set(tags)
            elif part == "-*":
                selected_tags = set()
            elif match := _select_expr.search(part):
                negated = match.group("negate") is not None
                start_str = match.group("start")
                start = int(start_str)
                end_str = match.group("end")
                end = int(end_str) if end_str else start

                if start >= 0 and end >= start and end < len(tags):
                    selected = set(tags[start : end + 1])

                    if negated:
                        selected_tags -= selected
                    else:
                        selected_tags = selected_tags.union(selected)
                else:
                    print("Index out of bounds")
                    continue
            else:
                print(f"Invalid expression '{part}'")


def _select_packages(
    packages_dir: Path, distro: Distro, selected_names: Set[str]
) -> Set[Package]:
    packages = [p for p in get_packages(packages_dir) if distro in p.distros]

    selected_packages = set(
        [
            p
            for p in packages
            if (selected_names and p.name in selected_names) or p.enabled_default
        ]
    )

    while True:
        print()
        for i, package in enumerate(packages):
            selected = package in selected_packages
            print(f"{i:<2}: [{'*' if selected else ' '}] {package.name}")

        package_input = input("Select packages or leave blank to confirm: ")

        if package_input == "":
            if not selected_packages:
                confirm_input = input(
                    "Are you sure that you want to disable all packages? [y/N] "
                )

                if confirm_input not in ["Y", "y"]:
                    continue

            return selected_packages

        for part in package_input.split(" "):
            if part == "*":
                selected_packages = set(packages)
            elif part == "-*":
                selected_packages = set()
            elif match := _select_expr.search(part):
                negated = match.group("negate") is not None
                start_str = match.group("start")
                start = int(start_str)
                end_str = match.group("end")
                end = int(end_str) if end_str else start

                if start >= 0 and end >= start and end < len(packages):
                    selected = set(packages[start : end + 1])

                    if negated:
                        selected_packages -= selected
                    else:
                        selected_packages = selected_packages.union(selected)
                else:
                    print("Index out of bounds")
                    continue
            else:
                print(f"Invalid expression '{part}'")


def setup(props: AppProperties, config: AppConfig | None) -> AppConfig:
    distro = _select_distro(config.distro if config else None)
    tags = _select_tags(config.tags if config else set())
    packages = _select_packages(
        props.packages_dir,
        distro,
        config.selected_packages if config else set(),
    )

    return AppConfig(
        distro=distro,
        tags=tags,
        commands=None,
        selected_packages=set([p.name for p in packages]),
    )
