def fib(n)
  return 0 if n == 0
  return 1 if n == 1 || n == 2
  fib(n - 2) + fib(n - 1)
end
