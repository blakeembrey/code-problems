# Elegant solution using built-in JavaScript functions
parseCSV = (csv) ->
  JSON.parse "[" + csv + "]"

# Crazy parser which was the original solution
parseCSV = (csv) ->
  isNumber = false
  isInput = false
  curr = ""
  stack = []
  i = 0
  char = undefined
  pushStack = undefined
  csv = csv.trim()
  pushStack = (input) ->
    isNumber and (input = +input)
    
    # Resets
    curr = ""
    isInput = false
    isNumber = false
    stack.push input

  while char = csv.charAt(i++)
    if char is "\""
      isInput = not curr
    else if char is ","
      if isInput and not isNumber
        curr += char
      else
        pushStack curr
    else if (isNumber or not curr) and not Number.isNaN(+char)
      curr += char
      isInput = true
      isNumber = true
    else
      throw new Error("Unexpected character")  if isNumber or not isInput
      curr += char
  
  # Push the trailing entry
  pushStack curr
  stack
