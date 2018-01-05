" Somewhat follows the Linux Kernel Coding style
"
" 80 characters line
setlocal colorcolumn=81
execute "set colorcolumn=" . join(range(81,335), ',')
highlight ColorColumn ctermbg=Black ctermfg=DarkRed

" Highlight trailing spaces
" http://vim.wikia.com/wiki/Highlight_unwanted_spaces
highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/
autocmd BufWinEnter * match ExtraWhitespace /\s\+$/
autocmd InsertEnter * match ExtraWhitespace /\s\+\%#\@<!$/
autocmd InsertLeave * match ExtraWhitespace /\s\+$/
autocmd BufWinLeave * call clearmatches()

" Tab settings
setlocal tabstop=8
setlocal shiftwidth=8
setlocal softtabstop=8
setlocal noexpandtab

setlocal cindent
setlocal cinoptions=:0,1l,t0,g0,(0

" Set .h files as C, not C++
augroup project
    autocmd!
    autocmd BufRead,BufNewFile *.h,*.c set filetype=c.doxygen
augroup END

" Add include files to path
let &path.="src/include,/usr/include/AL,"

" Configure build system
set makeprg=make\ %

let g:ycm_global_ycm_extra_conf = "~/.vim/ycm_extra_config_c.py"
