module.exports = function (number) {
  var numberString = ('' + number),
      length       = numberString.length,
      movePosition;

  movePosition = function (string, to, from) {
    return string.substr(0, to) + string.charAt(from) + string.slice(to, from) + string.substr(from + 1);
  };

  // Move from the right index to the left index
  while (--length) {
    var l = length;
    // Loop from the current right index to the left index, using the right
    // index as the swap variable
    while (l--) {
      // Once the character on the left is smaller than the current right
      // position this will be our swap index
      if (numberString.charAt(l) < numberString.charAt(length)) {
        // Move the position of the character in the string
        numberString = movePosition(numberString, l, length);
        // Return the string up until the move position, and sort what is left
        return +(numberString.substr(0, l + 1) + numberString.substr(l + 1).split('').sort().join(''));
      }
    }
  }

  return number;
};
