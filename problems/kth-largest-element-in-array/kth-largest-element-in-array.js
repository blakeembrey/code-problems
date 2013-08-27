module.exports = function (k, array) {
  // I believe we can store it in a hash to achieve an O(n) complexity
  var hash  = {},
      count = 0;

  // Loop through each of the array items putting the values as keys in the hash
  array.forEach(function (num) {
    hash[num] = hash[num] + 1 || 1;
  });

  // Loop through each of the keys in the hash and keep track of the total count
  for (var i in hash) {
    if (hash.hasOwnProperty(i)) {
      // Check if `k` is smaller or equal to the current count plus the current
      // hash index, but also greater than the previous count (this will mean it
      // is stored in this integer key)
      if (k <= count + hash[i] && k > count) {
        // Coerce the output back to a number, since that is expected
        return +i;
      }
      // Increment the total count
      count += hash[i];
    }
  }

  return -1;
};
