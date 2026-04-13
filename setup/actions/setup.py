from config import Config, Distro


def _select_distro(selected_distro: Distro | None) -> Distro:
    print("Select distro:")

    distros = {i: d.value for i, d in enumerate(Distro)}

    for i, distro in distros.items():
        selected = distro == selected_distro
        print(f"{i:<2}: [{'*' if selected else ' '}] {distro}")

    while True:
        distro_input = input(
            f"Select distro{' (or press ENTER to confirm existing)' if selected_distro else ''}:"
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


def _select_packages(packages: List[Package]) -> List[Package]:
    pass


def setup(config: Config | None) -> Config:
    distro = _select_distro(config.distro if config else None)

    return Config(
        distro=distro,
        selected_packages=[],
        extra_command_flags=config.extra_command_flags if config else {},
    )
