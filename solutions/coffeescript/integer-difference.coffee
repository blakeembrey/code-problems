integerDifference = (n, array) ->
  hash = {}
  total = 0
  
  # Loop through the array once, storing the results in an object for a
  # time complexity of O(n) - the naive solution consists of two for loops
  # which results in a complexity of O(n^2)
  array.forEach (number) ->
    hash[number] = (hash[number] or 0) + 1
    total += (hash[number - n] or 0) + (hash[number + n] or 0)
  total
