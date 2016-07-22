for i in $(find . -name .git); do
    url=$(cat $i"/config" | grep -oP "url = \K.+");
    if [ -n "$url" ]; then
        echo git submodule add "$(echo -n $i | head -c-5)" "$url"
    fi
done
