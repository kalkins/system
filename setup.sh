DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

(
    # Vim
    ln -sT --backup=t "${DIR}/vim/vimrc" ~/.vimrc
    ln -sT --backup=t "${DIR}/vim/vimfolder" ~/.vim

    # zsh
    ln -sT --backup=t "${DIR}/zsh/zshrc" ~/.zshrc
    ln -sT --backup=t "${DIR}/zsh/zshfolder" ~/.zsh

    # config
    ln -sT --backup=t "${DIR}/config" ~/.config

    # vimperator
    ln -sT --backup=t "${DIR}/vimperator/vimperatorfolder" ~/.vimperator
    ln -sT --backup=t "${DIR}/vimperator/vimperatorrc" ~/.vimperatorrc
) &> /dev/null
