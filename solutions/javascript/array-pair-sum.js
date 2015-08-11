module.exports = function (sum, array) {
  var results = [];

  for (var i = 0, len = array.length; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (array[i] + array[j] === sum) {
        results.push([array[i], array[j]]);
      }
    }
  }

  return results;
};
