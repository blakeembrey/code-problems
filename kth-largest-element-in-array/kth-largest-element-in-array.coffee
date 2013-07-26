kthLargestElementInArray = (k, array) ->
  # I believe we can store it in a hash to achieve an O(n) complexity
  hash = {}
  count = 0
  
  # Loop through each of the array items putting the values as keys in the hash
  array.forEach (num) ->
    hash[num] = hash[num] + 1 or 1
  
  # Loop through each of the keys in the hash and keep track of the total count
  for i of hash
    # Check if `k` is smaller or equal to the current count plus the current
    # hash index, but also greater than the previous count (this will mean it
    # is stored in this integer key)
    
    # Coerce the output back to a number, since that is expected
    return +i  if k <= count + hash[i] and k > count
    
    # Increment the total count
    count += hash[i]
  -1
