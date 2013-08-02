largestContinuousSum = (array) ->
  return if !array or !array.length

  currentSum = maximumSum = array.shift()

  # Checks the array of sums and compares them
  array.forEach (num) ->
    currentSum = Math.max(currentSum + num, num)
    maximumSum = Math.max(currentSum, maximumSum)
  maximumSum
