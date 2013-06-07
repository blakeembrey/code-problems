// ES5 method is nice and clean
var plusOneSum = function (array) {
  return array.reduce(function (memo, num) {
    return memo + num + 1;
  }, 0);
};

// Without array.reduce method isn't much different
var plusOneSum = function (array) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }

  // if you add one to each then you can just add the array length
  return result + array.length;
};
