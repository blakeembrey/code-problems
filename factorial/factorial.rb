def factorial(n)
  return 1 if n < 2
  n * factorial(n - 1)
end
