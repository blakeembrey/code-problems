var reverseArray = function (array) {
  var length = Math.floor(array.length / 2),
      temp;

  while (length--) {
    temp          = array[length];
    array[length] = array[array.length - length - 1];
    array[array.length - length -1] = temp;
  }

  return array;
};
