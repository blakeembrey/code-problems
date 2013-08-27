# Recursive function example
exports.recursive = factorial = (number) ->
  return 1  if number < 2
  number * factorial(number - 1)

# Iterative solution
exports.iterative = (number) ->
  result = 1
  i = 1

  while i <= number
    result *= i
    i++
  result

# Iterative using a reverse loop
exports.iterativeReverse = (number) ->
  result = 1
  while number
    result *= number
    number -= 1
  result
