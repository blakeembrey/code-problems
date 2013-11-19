module.exports = function (n) {
  if (n === 2) { return true; }
  if (n < 2 || !(n&1)) { return false; }

  for (var i = 3, l = Math.floor(Math.pow(n, 0.5)); i <= l; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
