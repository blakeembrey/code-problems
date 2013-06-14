var memoise = function (fn) {
  var cache = {};
  // Simple one parameter memoise since it's enough for the fibonacci function
  return function (arg) {
    if (arg in cache) { return cache[arg]; }

    return cache[arg] = fn(arg);
  };
};

var fibonacci = memoise(function (n) {
  return (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
