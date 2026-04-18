from dataclasses import dataclass
from pathlib import Path


@dataclass
class AppSteps:
    install: bool
    deploy: bool
    extra_setup: bool
    undeploy: bool


@dataclass
class AppProperties:
    steps: AppSteps
    packages_dir: Path
    dry_run: bool
