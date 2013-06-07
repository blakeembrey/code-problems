// ES5 method is nice and clean
var plusOneSum = function (array) {
  return array.reduce(function (memo, num) {
    return memo + num;
  }, 0) + array.length;
};

// Without array.reduce method isn't much different
var plusOneSum = function (array) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result + array.length;
};
