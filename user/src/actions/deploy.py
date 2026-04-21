import logging

from config import AppConfig, CommandsConfig
from package import Package, PackageDependencies
from props import AppProperties
from utils import get_packages, run_command
from package import PackageDeploymentDetails

logger = logging.getLogger(__file__)


def _install_dependencies(
    props: AppProperties,
    config: AppConfig,
    package: Package,
    details: PackageDeploymentDetails,
) -> None:
    if not props.steps.install:
        logger.debug("Skipping installation of dependencies")
        return

    dependency_sources: PackageDependencies | None = (
        details.dependencies.get(config.distro) if details.dependencies else None
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
    if not props.steps.extra_setup:
        logger.debug("Skipping extra setup")
        return

    if package.has_makefile:
        logger.debug("Running make")
        run_command("make", ["-C", package.path], dry_run=props.dry_run)

    if package.has_submodules:
        logger.debug("Initializing submodules")
        run_command(
            "git", ["submodule", "update", "--init", "--recursive", package.path]
        )


def _deploy_dotfiles(
    props: AppProperties, package: Package, details: PackageDeploymentDetails
) -> None:
    if not props.steps.deploy:
        logger.debug("Skipping dotfiles deployment")
        return

    dotfiles_path = package.path / details.dotfiles_dir

    if dotfiles_path.exists():
        logger.debug("Deploying dotfiles")
        run_command(
            "stow",
            [
                "-R",
                "-d",
                package.path,
                "-t",
                details.target_dir,
                details.dotfiles_dir,
            ],
            dry_run=props.dry_run,
        )


def _undeploy_dotfiles(
    props: AppProperties,
    package: Package,
    details: PackageDeploymentDetails,
) -> None:
    if not props.steps.undeploy:
        logger.debug("Skipping unlinking dotfiles")
        return

    dotfiles_path = package.path / details.dotfiles_dir

    if dotfiles_path.exists():
        logger.debug("Unlinking dotfiles")
        run_command(
            "stow",
            [
                "-D",
                "-d",
                package.path,
                "-t",
                details.target_dir,
                details.dotfiles_dir,
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
        _undeploy_dotfiles(props, package, package.common_deployment)

        for tag, details in package.tagged_deployment.items():
            print(f"Removing {package.name} - {tag}")
            _undeploy_dotfiles(props, package, details)

    for package in selected_packages:
        print()
        print(f"Deploying {package.name}")
        _install_dependencies(props, config, package, package.common_deployment)
        _run_extra_setup(props, package)
        _deploy_dotfiles(props, package, package.common_deployment)

        for tag, details in package.tagged_deployment.items():
            print()
            if tag in config.tags:
                print(f"Deploying {package.name} - {tag}")
                _install_dependencies(props, config, package, details)
                _deploy_dotfiles(props, package, details)
            else:
                print(f"Removing {package.name} - {tag}")
                _undeploy_dotfiles(props, package, details)
