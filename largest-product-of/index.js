// Creating a closure that returns a new function that takes an array
var largestProductOf = function (count) {
  count = count || 3;

  var sortLargestAscending = function (a, b) {
    return a > b ? 1 : -1;
  };

  var multiply = function (a, b) {
    if (!a || !b) { return 0; }
    return a * b;
  };

  // Returns a new function that accepts an array of numbers
  return function (array) {
    // The resulting value
    var result    = 1,
        // Keep track of the total numbers combined
        num       = 0,
        // Keep track of the negative and positive numbers
        negatives = [],
        positives = [],
        posMultiply,
        negMultiply;

    // Loop through the array and push the numbers into either the negative or positive arrays
    array.forEach(function (value) {
      if (value < 0) {
        negatives.push(value * -1);
      } else {
        positives.push(value);
      }
    });

    // Sort the negative and positive numbers by largest first
    negatives.sort(sortLargestAscending);
    positives.sort(sortLargestAscending);

    while (num < count) {
      if (num + 2 < count) {
        // Increment the number by two and check if negative or positives is better
        num         += 2;
        posMultiply = multiply.apply(null, positives.slice(0, 2));
        negMultiply = multiply.apply(null, negatives.slice(0, 2));
        // Check the multiplied result of the positive numbers versus two negative numbers
        if (posMultiply > negMultiply) {
          result *= posMultiply;
          positives.splice(0, 2);
        } else {
          result *= negMultiply;
          negatives.splice(0, 2);
        }
      } else {
        num    += 1;
        result *= positives.pop();
      }
    }

    return result;
  };
};
