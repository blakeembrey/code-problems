evenOccuringElement = (array) ->
  hash = {}
  
  # Loop though the array adding all the elements together in a hash
  array.forEach (num) ->
    hash[num] = hash[num] + 1 or 1
  
  # Loop through all the keys in the hash, returning the number if we have an
  # even number of occurances
  for i of hash
    return Number(i)  unless hash[i] & 1
  false
