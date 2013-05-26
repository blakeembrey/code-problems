var primeTester = function (n) {
  if (n < 1) { return false; }

  for (var i = 2; i <= Math.floor(Math.pow(n, 0.5)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var primeNumberGenerator = function (n) {
  var array = [];

  for (var i = 0; i <= n; i++) {
    array.push(i > 1);
  }

  for (var i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (array[i] === true) {
      for (var j = Math.pow(i, 2); j < n; j += i) {
        array[j] = false;
      }
    }
  }

  return array.map(function (_, index) {
    return _ && index;
  }).filter(function (value) {
    return value;
  });
};
