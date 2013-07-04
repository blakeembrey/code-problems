module.exports = function (array, compare) {
  // Not an array, empty or array of 1 is already sorted
  if (!Array.isArray(array) || array.length < 2) {
    return array;
  }

  var swap = function (array, first, second) {
    var temp      = array[first];
    array[first]  = array[second];
    array[second] = temp;
    return array;
  };

  // Create a compare func if not passed in
  if (typeof compare !== 'function') {
    compare = function (a, b) {
      return a > b ? 1 : -1;
    };
  }

  var min, i, j;

  for (i = 0; i < array.length; i++) {
    min = i;
    for (j = i + 1; j < array.length; j++) {
      if (compare(array[j], array[min]) < 0) {
        min = j;
      }
    }

    swap(array, i, min);
  }

  return array;
};
