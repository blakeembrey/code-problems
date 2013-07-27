# Create a new flattened array
flatten = (input) ->
  output = []
  i = 0

  while i < input.length
    # Using Array.isArray for new browsers, in older browsers this can be
    # polyfilled using `Object.prototype.toString.call(input[i]) === '[object Array]'`
    if Array.isArray(input[i])
      output.push.apply output, flatten(input[i])
    else
      output.push input[i]
    i++
  output

# In place array flatten
flatten = (array) ->
  i = 0
  while i < array.length
    if Array.isArray(array[i])
      array.splice.apply array, [i, 1].concat(array[i])
    else
      i += 1
  array

# Flatten array using ES5 reduce method
flatten = (array) -> array.reduce ((arr, val) -> arr.concat (if Array.isArray(val) then flatten(val) else val)), []
