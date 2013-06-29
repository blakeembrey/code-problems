module.exports = function (n) {
  // Two is a prime number
  if (n === 2) { return true; }

  // Every other even number is not
  if (n < 2 || !(n&1)) { return false; }

  // Create a loop that will check every odd number up until n^1/2
  for (var i = 3, l = Math.floor(Math.pow(n, 0.5)); i <= l; i += 2) {
    // Evenly divisible
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
