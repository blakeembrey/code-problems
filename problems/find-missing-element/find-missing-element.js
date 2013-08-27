// Simple solution using a hash to look up numbers from the second array in the
// first array. When the number doesn't exist in the hash - you know we have
// found the missing number
exports.iterative = function (a, b) {
  var hash = {}, i;

  for (i = 0; i < b.length; i++) {
    hash[b[i]] = hash[b[i]] + 1 || 1;
  }

  for (i = 0; i < a.length; i++) {
    if (!hash[a[i]]) {
      return a[i];
    }
    hash[a[i]] -= 1;
  }
};

// Bitwise solution using XOR to cancel each of the corresponding numbers out
// with eachother until we end up with a number that isn't cancelled out
exports.bitwise = function (a, b) {
  var result = 0;
  a.concat(b).forEach(function (num) {
    result ^= num;
  });
  return result;
};

// Maybe the simplest solution, but you can very easily add the two arrays and
// take the result of `b` away from `a` to get the missing number
exports.sum = function (a, b) {
  var add = function (a, b) {
    return a + b;
  };

  return a.reduce(add) - b.reduce(add);
};
