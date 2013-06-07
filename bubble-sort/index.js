var bubbleSort = function (array) {
  var switchArray = function (array, first, second) {
    var temp      = array[first];
    array[first]  = array[second];
    array[second] = temp;
    return array;
  };

  // Throw errors if the input was not an array
  if (!Array.isArray(array)) {
    throw new Error('Give me an array');
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      switchArray(array, i, i + 1);
      var length = i;
      while (length--) {
        if (array[length] > array[length + 1]) {
          switchArray(array, length, length + 1);
        }
      }
    }
  }

  return array;
};
