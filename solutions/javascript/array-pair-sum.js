module.exports = function (k, array) {
  var hash = {};
  var pairs = [];

  // Loop through the array once, storing the results in an object for a
  // time complexity of O(n) - the naive solution consists of two for loops
  // which results in a complexity of O(n^2)
  array.forEach(function (number) {
    var target = k - number;

    // Make sure the value in unused and it's a unique pair
    if (hash[target] === 1 && number + target === k) {
      pairs.push([target, number]);
    } else {
      hash[number] = 0;
    }

    hash[number]++;
  });

  return pairs;
};
