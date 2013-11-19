module.exports = function (number) {
  var numberString = ('' + number);
  var length       = numberString.length - 1;
  var string       = '';
  var sorter;

  // Loop in reverse comparing all the digits to the one beside it.
  while (length--) {
    // Compare the numbers beside each other.
    if (numberString.charAt(length) < numberString.charAt(length + 1)) {
      // Start the string using the numbers up until the pivot point.
      string = numberString.substr(0, length);
      // Sort all the numbers after the pivot.
      sorter = numberString.substr(length).split('').sort();

      // Loop through all the numbers and if the next largest number than the
      // pivot.
      for (var i = 0; i < sorter.length; i++) {
        if (sorter[i] > numberString.charAt(length)) {
          // Splice the number from it's position and append it to the current
          // string.
          string += sorter.splice(i, 1)[0];
          break;
        }
      }

      // Append the rest of the numbers already in ascending order.
      string += sorter.join('');
      // Return the string typecast back to a number.
      return +string;
    }
  }

  return number;
};
