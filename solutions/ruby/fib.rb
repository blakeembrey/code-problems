# this version has exponential runtime, O(2^n)
def fib(n)
  return 0 if n == 0
  return 1 if n == 1 || n == 2
  fib(n - 2) + fib(n - 1)
end

# this version is more efficient, with linear runtime, O(n)
def fib(n)
  return 0 if n == 0
  return 1 if n == 1
  prev, curr, i = 0, 1, 1
  while i < n
    tmp = curr
    curr += prev
    prev = tmp
    i += 1
  end
end
  
