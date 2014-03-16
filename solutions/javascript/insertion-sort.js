// insertion-sort
'use strict';

module.exports = function (array, compare) {
  // Not an array, empty or array of 1 is already sorted
  if (!Array.isArray(array) || array.length < 2) {
    return array;
  }

  // Swap elements of the array
  var swap = function (array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
  };

  // Create a compare function if one is not passed in
  if (typeof compare !== 'function') {
    compare = function (a, b) {
      return a > b ? 1 : -1;
    };
  }

  var i, j;

  /*
   * Assume first element is sorted
   * Add first unsorted element to sorted array
   * Compare new element in sorted array with previous elements
   *   to determine correct destination index in sorted array
   */

  for (i = 1; i < array.length; i++) {
    j = i;
    // Make sure we don't walk off the array and compare until sorted
    while ((j - 1) >= 0 && compare(array[j], array[j - 1]) < 0) {
      swap(array, j, j-1);
      j--;
    }
  }

  return array;
};
