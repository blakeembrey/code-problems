module.exports = function arraypairsum (k, array) {
  var hash = {};
  var pairs = [];

  // Iterate over the array, tracking the times each number appears. For each
  // new number, we calculate the difference to `k` and look up the number of
  // times that number has been seen and push those occurances in pairs output.
  array.forEach(function (number) {
    var diff = k - number;
    var len = hash[diff];

    while (len--) {
      pairs.push([diff, number]);
    }

    hash[number] = (hash[number] + 1) || 1;
  });

  return pairs;
};
