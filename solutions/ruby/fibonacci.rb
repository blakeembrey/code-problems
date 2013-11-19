def fib(n)
  (0..n).inject([1, 0]) { |(a, b), _| [b, a + b] }[0]
end
