script_abs_path=$(readlink -f "$0")
script_dir=$(dirname "$script_abs_path")

python3 "$script_dir/src/main.py" "$@"
