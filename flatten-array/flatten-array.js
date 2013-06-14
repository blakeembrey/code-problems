// Create a new flattened array
var flatten = function (input) {
  var output = [];

  for (var i = 0; i < input.length; i++) {
    // Using Array.isArray for new browsers, in older browsers this can be
    // polyfilled using `Object.prototype.toString.call(input[i]) === '[object Array]'`
    if (Array.isArray(input[i])) {
      output.push.apply(output, flatten(input[i]));
    } else {
      output.push(input[i]);
    }
  }

  return output;
};

// In place array flatten
var flatten = function (array) {
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

// Flatten array using ES5 reduce method
var flatten = function (array) {
  return array.reduce(function (arr, val) {
    return arr.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};
