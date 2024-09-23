
local function isEmpty(o)
  return o == nil or o == ''
end

local function split(inputstr, sep)
  sep = sep or "%s"
  local t={}
  for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
    table.insert(t, str)
  end
  return t
end

local function generateI18nSelect(choices, selected)
  local selectTag = '<select id="data-i18n-switcher" class="reaveljs-select">\n'

  for _, choice in ipairs(choices) do
    local value, label = table.unpack(split(choice, ":"))
    label = label or value
    local isSelected = (value == selected) and ' selected' or ''
    selectTag = selectTag .. string.format('<option class="drop-item" value="%s"%s>%s</option>\n', value, isSelected, label)
  end

  selectTag = selectTag .. '</select>\n'
  return selectTag
end

return {
  ['i18n-select'] = function(args, kwargs)
    if not quarto.doc.isFormat("html:js") then
      return pandoc.Null() 
    end

    local choices = split(kwargs["choices"] or "", ",%s*")
    local selected = kwargs["selected"] or choices[1] or ""
    local text = generateI18nSelect(choices, selected)

    return pandoc.RawBlock('html', text)
  end
}
