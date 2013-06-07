var primeNumber = function (n) {
  if (n < 1) { return false; }

  for (var i = 2, l = Math.floor(Math.pow(n, 0.5)); i <= l; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
