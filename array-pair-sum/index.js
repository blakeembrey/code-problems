// This is just a modification of the integer difference problem presented elsewhere
var arrayPairSum = function (k, array) {
  var hash  = {},
      pairs = [];

  // Loop through the array once, storing the results in an object for a
  // time complexity of O(n) - the naive solution consists of two for loops
  // which results in a complexity of O(n^2)
  array.forEach(function (number) {
    hash[number] = hash[number] + 1 || 1;

    for (var i = 0; i < (hash[k - number] || 0); i++) {
      pairs.push([number, k - number]);
    }
  });

  return pairs;
};
