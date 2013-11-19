# Simple solution using a hash to look up numbers from the second array in the
# first array. When the number doesn't exist in the hash - you know we have
# found the missing number
findMissingElement = (a, b) ->
  hash = {}
  i = undefined
  i = 0
  while i < b.length
    hash[b[i]] = hash[b[i]] + 1 or 1
    i++
  i = 0
  while i < a.length
    return a[i]  unless hash[a[i]]
    hash[a[i]] -= 1
    i++

# Bitwise solution using XOR to cancel each of the corresponding numbers out
# with eachother until we end up with a number that isn't cancelled out
findMissingElement = (a, b) ->
  result = 0
  a.concat(b).forEach (num) ->
    result ^= num
  result

# Maybe the simplest solution, but you can very easily add the two arrays and
# take the result of `b` away from `a` to get the missing number
findMissingElement = (a, b) ->
  add = (a, b) ->
    a + b
  a.reduce(add) - b.reduce(add)
