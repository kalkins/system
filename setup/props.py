from dataclasses import dataclass
from pathlib import Path


@dataclass
class AppProperties:
    packages_dir: Path
    dry_run: bool
