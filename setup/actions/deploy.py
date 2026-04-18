from config import CommandsConfig
from package import PackageDependencies
import logging
from package import Package
from utils import run_command
from utils import get_packages
from props import AppProperties
from config import AppConfig

logger = logging.getLogger(__file__)


def _install_dependencies(
    props: AppProperties, config: AppConfig, package: Package
) -> None:
    dependency_sources: PackageDependencies | None = (
        package.dependencies.get(config.distro) if package.dependencies else None
    )

    if not dependency_sources:
        return

    commands_config = config.commands or CommandsConfig.default()
    command_variants = commands_config.install.get(config.distro)

    if not command_variants:
        logger.warning(
            "Package %s has dependencies, but no install command is configured for distro %s",
            package.name,
            config.distro,
        )
        return

    for source, dependencies in dependency_sources.items():
        command = command_variants.sources.get(source)

        if not command:
            logger.warning(
                "Package %s has dependencies in source '%s', but no install command is configured for that source",
                package.name,
                source,
            )
            return

        logger.debug("Installing packages for %s", package.name)
        run_command(
            command=command.command,
            args=[*command.args, *dependencies],
            sudo=command.sudo,
            dry_run=props.dry_run,
        )


def _run_extra_setup(props: AppProperties, package: Package) -> None:
    if package.has_makefile:
        logger.debug("Running make")
        run_command("make", ["-C", package.path], dry_run=props.dry_run)

    if package.has_submodules:
        logger.debug("Initializing submodules")
        run_command(
            "git", ["submodule", "update", "--init", "--recursive", package.path]
        )


def _deploy_dotfiles(props: AppProperties, package: Package) -> None:
    dotfiles_path = package.path / package.dotfiles_dir

    if dotfiles_path.exists():
        logger.debug("Deploying dotfiles")
        run_command(
            "stow",
            [
                "-R",
                "-d",
                package.path,
                "-t",
                package.target_dir,
                package.dotfiles_dir,
            ],
            dry_run=props.dry_run,
        )


def _undeploy_dotfiles(props: AppProperties, package: Package) -> None:
    dotfiles_path = package.path / package.dotfiles_dir

    if dotfiles_path.exists():
        logger.debug("Unlinking dotfiles")
        run_command(
            "stow",
            [
                "-D",
                "-d",
                package.path,
                "-t",
                package.target_dir,
                package.dotfiles_dir,
            ],
            dry_run=props.dry_run,
        )


def deploy(props: AppProperties, config: AppConfig) -> None:
    all_packages = get_packages(props.packages_dir)

    selected_packages = [p for p in all_packages if p.name in config.selected_packages]

    deselected_packages = [
        p for p in all_packages if p.name not in config.selected_packages
    ]

    for package in deselected_packages:
        print()
        print(f"Removing {package.name}")
        _undeploy_dotfiles(props, package)

    for package in selected_packages:
        print()
        print(f"Deploying {package.name}")
        _install_dependencies(props, config, package)
        _run_extra_setup(props, package)
        _deploy_dotfiles(props, package)
