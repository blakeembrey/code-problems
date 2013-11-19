module.exports = function (n, array) {
  var hash  = {},
      total = 0;

  // Loop through the array once, storing the results in an object for a
  // time complexity of O(n) - the naive solution consists of two for loops
  // which results in a complexity of O(n^2)
  array.forEach(function (number) {
    hash[number] = (hash[number] || 0) + 1;
    total += (hash[number - n] || 0) + (hash[number + n] || 0);
  });

  return total;
};
