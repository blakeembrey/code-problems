module.exports = function (number) {
  var numberString = ('' + number),
      length       = numberString.length;

  while (length--) {
    if (numberString[length] > numberString[length - 1]) {
      return +(numberString.substr(0, length - 1) + numberString[length] + numberString[length - 1] + numberString.substr(length + 1));
    }
  }
  return number;
};
