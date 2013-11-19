module.exports = function (totalRooms) {
  var findDivisors = function (number) {
    var divisors = [],
        iterator = number;

    while (iterator--) {
      if (number % iterator === 0) {
        divisors.push(iterator);
      }
    }

    return divisors;
  };

  // Returns true or false based on whether the number is found in the sum of
  // array subsets.
  var isSubsetSum = function (number, array) {
    var hasSubset = false;

    (function findSubset (total, numbers) {
      !hasSubset && (hasSubset = total === number);

      if (hasSubset || total > number) { return; }

      numbers.forEach(function (num, index) {
        return findSubset(
          total + num,
          numbers.slice(0, index).concat(numbers.slice(index + 1))
        );
      });
    })(0, array);

    return hasSubset;
  };

  // Need a simple helper method that returns the sum of an array.
  var sumArray = function (array) {
    return array.reduce(function (memo, num) {
      return memo + num;
    }, 0);
  };

  // Find the room using the provided functions.
  var divisors;

  for (var room = 0; room <= totalRooms; room++) {
    divisors = findDivisors(room);

    // The sum of all the divisors must be greater than the number.
    if (sumArray(divisors) > room && !isSubsetSum(room, divisors)) {
      return room;
    }
  }

  return 0; // No room number found.
};
