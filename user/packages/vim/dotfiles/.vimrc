set nocompatible
set showcmd

""" Source .vimrc in working dir
" This is a possible security vulnerablilily
" Use with caution
"set exrc
"set secure

"" Persistent undo
let vimDir = '$HOME/.vim'
let &runtimepath.=','.vimDir

if has('persistent_undo')
    let myUndoDir = expand(vimDir . '/undodir')
    call system('mkdir ' . vimDir)
    call system('mkdir ' . myUndoDir)
    let &undodir = myUndoDir
    set undofile
endif

""" Keymaps
" Remap movement to IJKL
map j <LEFT>
map k <DOWN>
map l <UP>
map ø <RIGHT>

" Home row numbers
noremap ª 7
noremap ß 5
noremap ð 3
noremap đ 1
noremap ŋ 9
noremap ħ 0
noremap ̉  2
noremap ĸ 4
noremap ł 6
noremap ´ 8
inoremap ª 7
inoremap ß 5
inoremap ð 3
inoremap đ 1
inoremap ŋ 9
inoremap ħ 0
inoremap ̉  2
inoremap ĸ 4
inoremap ł 6
inoremap ´ 8

" Redo
noremap <C-u> <C-r>

" Make
"map <C-m> :make split(%, ".")[0]<CR>
autocmd QuickfixCmdPost make call AfterMakeC()
function! AfterMakeC()
    " No any error after make
    if len(getqflist()) == 0
        !./a.out
    endif
    " :~)
endfunction

" Switch pane
"nnoremap <C-J> <C-W><C-H>
"nnoremap <C-K> <C-W><C-J>
"nnoremap <C-L> <C-W><C-L>
"nnoremap <C-I> <C-W><C-K>
nnoremap <C-J> :wincmd h<CR>
nnoremap <C-k> :wincmd j<CR>
nnoremap <C-l> :wincmd k<CR>
nnoremap <C-ø> :wincmd l<CR>

nnoremap <C-O> :only<CR>

" Hotkeys
nmap h :set relativenumber!<CR>
nmap æ :set number!<CR>
nmap <S-Enter> O<Esc>
nmap <CR> o<Esc>

" Backspace
set backspace=indent,eol,start

" Colorscheme
colorscheme vividchalk

" Tab settings
set tabstop=4
set softtabstop=0
set expandtab
set shiftwidth=4
set smarttab

let mapleader = '\'

" Syntax and filetype settings
syntax on
filetype plugin indent on
filetype indent on

