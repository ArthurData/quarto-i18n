
local function isEmpty(o)
  return o == nil or o == ''
end

return {
  ['i18n-key'] = function(args, kwargs)

    local i18n_key = args[1] or ""
    local tag = pandoc.utils.stringify(kwargs["tag"])
    if isEmpty(tag) then
      tag = "span"
    end
    local element_html = string.format('<%s data-i18n-key="%s"></%s>', tag, i18n_key, tag)
    
    return pandoc.RawInline('html', element_html)
  end
}
