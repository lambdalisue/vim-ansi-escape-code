if exists('g:loaded_ansi_escape_code')
  finish
endif
let g:loaded_ansi_escape_code = 1

command! TrimAnsiEscapeCode call denops#request('ansi_escape_code', 'trimBufferContent', [bufnr('%')])
