module.exports = function searchArray (array, num) {
  var index = 0;

  // Increment the index by doubling until we pass the search number.
  while (index in array && array[index] <= num) {
    if (array[index] === num) {
      return index;
    }

    // Double the index at which we are seaching.
    index = (index * 2) || 1;
  }

  // If the index hasn't been incremented beyond the first index, it won't be
  // found.
  if (index < 2) { return -1; }

  // Track the found index so we can continue to return `-1` down the stack.
  var foundIndex = searchArray(array.slice(index / 2, index), num);

  // Return `-1` or old index plus new found index.
  return foundIndex > -1 ? (index / 2) + foundIndex : -1;
};
