common_deps = {'i3blocks', 'upower'}

dependencies = {
    'arch': common_deps.union(['sysstat', 'acpi', 'alsa-utils']),
    'fedora': common_deps,
    'ubuntu': common_deps,
}

make = True
