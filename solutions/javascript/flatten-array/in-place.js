module.exports = function (array) {
  var i = 0;

  while (i < array.length) {
    if (Array.isArray(array[i])) {
      array.splice.apply(array, [i, 1].concat(array[i]));
    } else {
      i += 1;
    }
  }

  return array;
};
