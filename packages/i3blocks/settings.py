common_deps = {'i3blocks'}

dependencies = {
    'arch': common_deps.union(['sysstat']),
    'fedora': common_deps,
    'ubuntu': common_deps,
}

make = True
