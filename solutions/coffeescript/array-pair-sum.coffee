# This is just a modification of the integer difference problem presented elsewhere
arrayPairSum = (k, array) ->
  hash = {}
  pairs = []
  
  # Loop through the array once, storing the results in an object for a
  # time complexity of O(n) - the naive solution consists of two for loops
  # which results in a complexity of O(n^2)
  array.forEach (number) ->
    # Make sure the value in unused and it's a unique pair
    if hash[k - number] is false and k - number isnt number
      pairs.push [number, k - number]
      hash[k - number] = true # Set it to "used"
    # If the hash value is not true, set the hash to "unused"
    not hash[k - number] and (hash[number] = false)
  pairs
