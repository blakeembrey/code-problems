# Implementing recursive solution
fibonacci = (n) ->
  return fibonacci[n]  if n of fibonacci
  
  # Store the fibonacci values on the function itself
  fibonacci[n] = (if (n < 2) then n else fibonacci(n - 1) + fibonacci(n - 2))

# Implementing iterative solution
fibonacci = (n) ->
  results = [0, 1]
  if n > 2
    i = 2

    while i < n
      results[i] = results[i - 2] + results[i - 1]
      i++
  results[n - 1]

# Implementing O(logn) matrix solution
fibonacci = (n) ->
  memo = [0, [[0, 1], [1, 1]]]
  matrixMultiply = (A, B) ->
    C = undefined
    if Array.isArray(B[0])
      C = [[], []]
      C[0][0] = A[0][0] * B[0][0] + A[1][0] * B[0][1]
      C[0][1] = A[0][1] * B[0][0] + A[1][1] * B[0][1]
      C[1][0] = A[0][0] * B[1][0] + A[1][0] * B[1][1]
      C[1][1] = A[0][1] * B[1][0] + A[1][1] * B[1][1]
    else
      C = []
      C[0] = A[0][0] * B[0] + A[1][0] * B[1]
      C[1] = A[0][1] * B[0] + A[1][1] * B[1]
    C
  
  # Calculates fibonacci spiral transformation matrix
  calcFibSpiral = (n) ->
    count = 1
    T = undefined
    if n & 1
      T = [[0, 1], [1, 1]]
      n -= 1
    else
      T = [[1, 0], [0, 1]]
    while n > 0
      count++
      memo[count] = matrixMultiply(memo[count - 1], memo[count - 1])  unless memo[count]
      T = matrixMultiply(T, memo[count])  if (n >>= 1) & 1
    T

  matrixMultiply(calcFibSpiral(n - 2), [1, 1])[1]
