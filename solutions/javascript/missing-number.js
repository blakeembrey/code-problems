var add = function (a, b) {
  return a + b;
};

module.exports = function (array) {
  // http://en.wikipedia.org/wiki/Arithmetic_progression#Sum
  // Add one to the array length since we are missing a single number, use 1
  // as the starting value and the length of the array + 1 as the ending value.
  // Then just minus the result of adding all the values together to get our
  // missing number.
  return ((array.length + 1) * (2 + array.length) / 2) - array.reduce(add, 0);
};
