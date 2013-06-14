// This is just a modification of the integer difference problem presented elsewhere
var arrayPairSum = function (k, array) {
  var hash  = {},
      pairs = [];

  // Loop through the array once, storing the results in an object for a
  // time complexity of O(n) 
  array.forEach(function (number) {
    if (!(k - number in hash)) {
      hash[ number ] = k - number;
    } else {
      pairs.push([number, k - number]);
    }
  });

  return pairs;
};
