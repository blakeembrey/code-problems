# Use an object to map sets of brackets to their opposites
brackets =
  "(": ")"
  "{": "}"
  "[": "]"

# On each input string, process it using the balance checker
balancedBrackets = (string) ->
  stack = []
  
  # Process every character on input
  i = 0

  while i < string.length
    if brackets[stack[stack.length - 1]] is string[i]
      stack.pop()
    else
      stack.push string[i]
    i++
  not stack.length
