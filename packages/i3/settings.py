common_deps = {'i3status', 'slock', 'dmenu', 'feh'}

dependencies = {
    'arch': common_deps.union(['i3-wm']),
    'fedora': common_deps.union(['i3']),
    'ubuntu': common_deps.union(['i3']),
}

make = True
