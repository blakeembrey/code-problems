var nextHighestNumber = function (number) {
  var numberString = ('' + number),
      length       = numberString.length,
      currNumber, prevNumber;

  while (length--) {
    currNumber = +numberString[length];
    // If the current number is smaller than the previous number, switch the
    // two positions and return the number
    if (prevNumber > currNumber) {
      return +(numberString.substr(0, length) + prevNumber + currNumber + numberString.substr(length + 2));
    }
    prevNumber = currNumber;
  }

  return number;
};
