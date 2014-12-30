'use strict';

module.exports = function quickSort(input, compare) {
  var lesser  = [],
      greater = [],
      pivot;

  // Not an array, empty or array of 1 is already sorted
  if (!Array.isArray(input) || input.length < 2) {
    return input;
  }

  // Create a compare func if not passed in
  if (typeof compare !== 'function') {
    compare = function (a, b) {
      return a > b ? 1 : -1;
    };
  }

  var array = input.slice(0); // make a copy of the array

  // Get our pivot, this can be random
  pivot = array.splice(~~(Math.random() * array.length), 1);

  // Iterate and put vals into either lesser or greater lists compared
  // to the pivot
  for (var i = 0; i < array.length; i++) {
    if (compare(array[i], pivot) < 1) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  // Sort lesser and greater lists, concat results
  return Array.prototype.concat(
    quickSort(lesser, compare),
    pivot,
    quickSort(greater, compare)
  );
};
