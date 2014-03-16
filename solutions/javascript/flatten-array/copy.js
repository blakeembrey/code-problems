module.exports = function flatten (array) {
  var copy = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      copy.push.apply(copy, flatten(array[i]));
    } else {
      copy.push(array[i]);
    }
  }

  return copy;
};
