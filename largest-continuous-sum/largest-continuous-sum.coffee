largestContinuousSum = (array) ->
  currentSum = 0
  maximumSum = 0
  
  # Checks the array of sums and compares them
  array.forEach (num) ->
    currentSum = Math.max(currentSum + num, num)
    maximumSum = Math.max(currentSum, maximumSum)
  maximumSum
