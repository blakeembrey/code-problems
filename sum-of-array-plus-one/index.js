// ES5 method is nice and clean
var plus_one_sum = function (array) {
  return array.reduce(function (memo, num) {
    return memo + num + 1;
  }, 0);
};

// Without array.reduce method isn't much different
var plus_one_sum = function (array) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i++) {
    result += array[i] + 1;
  }

  return result;
};
