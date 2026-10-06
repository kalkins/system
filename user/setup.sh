script_abs_path=$(readlink -f "$0")
script_dir=$(dirname "$script_abs_path")

exec uv run --project "$script_dir" python "$script_dir/src/main.py" "$@"
