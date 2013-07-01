var findNumberInArray = function (number, array) {
  return (function searchNumber (left, right) {
    var center = left + Math.floor((right - left) / 2);

    // Once the numbers match, return the center index
    if (array[center] === number) { return center; }
    // If the left is the same as the center position, return -1
    if (left === center) { return -1; }
    // When the current number is larger than the search input, recurse
    // moving the left and right indexes to the search area
    if (array[center] > number) {
      return searchNumber(left, center);
    }
    // When the current number is smaller move the search parameters to the right
    if (array[center] < number) {
      return searchNumber(center, right);
    }

    return -1;
  })(0, array.length);
};
