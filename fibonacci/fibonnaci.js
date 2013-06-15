// Implementing recursive solution
var fibonacci = function (n) {
  if (n in fibonacci) { return fibonacci[n]; }
  // Store the fibonacci values on the function itself
  return fibonacci[n] = (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Implementing iterative solution
var fibonnaci = function (n) {
  var results = [0, 1];

  if (n > 2) {
    for (var i = 2; i < n; i++) {
      results[i] = results[i - 2] + results[i - 1];
    }
  }

  return results[n - 1];
};
