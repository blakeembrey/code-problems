module.exports = function (k, array) {
  var hash  = {},
      pairs = [];

  // Loop through the array once, storing the results in an object for a
  // time complexity of O(n) - the naive solution consists of two for loops
  // which results in a complexity of O(n^2)
  array.forEach(function (number) {
    // Make sure the value in unused and it's a unique pair
    if (hash[k - number] === false && k - number !== number) {
      pairs.push([number, k - number]);
      hash[k - number] = true; // Set it to "used"
    }

    // If the hash value is not true, set the hash to "unused"
    !hash[k - number] && (hash[number] = false);
  });

  return pairs;
};
