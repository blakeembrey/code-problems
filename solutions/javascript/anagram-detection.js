/**
 * An key, value map of characters to unique prime numbers.
 *
 * @type {Object}
 */
var primeMap = (function () {
  var map = {};

  var primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
    151, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241
  ];

  var alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  // Merge the primes and alphabet together, using the letters as keys.
  alphabet.forEach(function (letter, index) {
    map[letter] = primes[index];
  });

  return map;
})();

/**
 * Hash a string using the prime number map.
 *
 * @param  {String} str
 * @return {Number}
 */
var hash = function (str) {
  return str.split('').reduce(function (memo, char) {
    return memo * primeMap[char];
  }, 1);
};

/**
 * Count the number of times a child or anagram of the child appears in the
 * parent string.
 *
 * @param  {String} parent
 * @param  {String} child
 * @return {Number}
 */
module.exports = function (parent, child) {
  var found   = 0;

  // Safety first, confirm that the child is actually smaller than the parent.
  if (parent.length < child.length) {
    return found;
  }

  var value   = hash(parent.substr(0, child.length));
  var anagram = hash(child);

  // Iterate over all substring possibilities and check the hash values.
  for (var i = child.length; i <= parent.length; i++) {
    if (value === anagram) {
      found += 1;
    }

    // Instead of naively hashing every substring, we can just recompute the
    // changed characters.
    value *= primeMap[parent[i]];
    value /= primeMap[parent[i - child.length]];
  }

  return found;
};
