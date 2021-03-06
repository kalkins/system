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

function! s:ExecuteInShell(command)
  let command = join(map(split(a:command), 'expand(v:val)'))
  let winnr = bufwinnr('^' . command . '$')
  silent! execute  winnr < 0 ? 'botright new ' . fnameescape(command) : winnr . 'wincmd w'
  setlocal buftype=nowrite bufhidden=wipe nobuflisted noswapfile nowrap number
  echo 'Execute ' . command . '...'
  silent! execute 'silent %!'. command
  silent! execute 'resize ' . line('$')
  silent! redraw
  silent! execute 'au BufUnload <buffer> execute bufwinnr(' . bufnr('#') . ') . ''wincmd w'''
  silent! execute 'nnoremap <silent> <buffer> <LocalLeader>r :call <SID>ExecuteInShell(''' . command . ''')<CR>'
  echo 'Shell command ' . command . ' executed.'
endfunction
command! -complete=shellcmd -nargs=+ Shell call s:ExecuteInShell(<q-args>)


"""" Plugins

" Pathogen
execute pathogen#infect()

" Syntastic
"set statusline+=%#warningmsg#
"set statusline+=%{fugitive#statusline()}
"set statusline+=%{SyntasticStatuslineFlag()}
"set statusline+=%*
"
"let g:syntastic_always_populate_loc_list = 1
"let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
"let g_syntastic_python_python_exec = 'usr/bin/python'

" NERDTree
" Open when no file is specified
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
" Custom keymap
map <C-n> :NERDTreeToggle<CR>
let NERDTreeMapOpenSplit='h'
" Close NERDTree if it's the only window left
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" Airline
" Keep the status line visible
set laststatus=2

" Tagbar
nmap <F10> :TagbarToggle<CR>

" Tagbar support for rust
let g:tagbar_type_rust = {
    \ 'ctagstype' : 'rust',
    \ 'kinds' : [
        \'T:type definitions',
        \'f:function definitions',
        \'g:enumeration names',
        \'s:structure names',
        \'m:module names',
        \'c:static constants',
        \'t:traits',
        \'i:trait implementations',
    \]
    \}

" You Complete Me
let g:ycm_global_ycm_extra_conf = "~/.vim/ycm_extra_config_global.py"
let g:ycm_collect_identifiers_from_tags_files = 1 " Let YCM read tags from Ctags file
let g:ycm_use_ultisnips_completer = 1 " Default 1, just ensure
let g:ycm_seed_identifiers_with_syntax = 1 " Completion for programming language's keyword
let g:ycm_complete_in_comments = 1 " Completion in comments
let g:ycm_complete_in_strings = 1 " Completion in string

" Ctrl-p
set hidden
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'
let g:ctrlp_prompt_mappings = {
            \ 'PrtSelectMove("k")': ['<c-i>', '<up>'],
            \ 'PrtSelectMove("j")': ['<c-k>', '<down>'],
            \ 'PrtExit()'         : ['<c-p>', '<esc>'],
            \}

" Buffergator
let g:buffergator_suppress_keymaps = 1
nmap <F12> :BuffergatorToggle<CR>
nmap gk :BuffergatorMruCycleNext<CR>
nmap gl :BuffergatorMruCyclePrev<CR>
