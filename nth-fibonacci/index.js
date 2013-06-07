var fib = function(n) {
  return (n === 0 || n === 1) ? n : fib(n - 1) + fib(n - 2);
};
