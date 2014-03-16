var flatten = function (array, result) {
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i], result);
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

module.exports = function (array) {
  return flatten(array, []);
};
