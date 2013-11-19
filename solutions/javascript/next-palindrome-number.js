module.exports = function nextPalindrome (number) {
  var numberString = ('' + number),
      numberLength = numberString.length,
      oddDigits    = numberLength & 1,
      leftHalf     = numberString.substr(0, ~~(numberLength / 2)),
      middleNumber = numberString.charAt(Math.ceil(numberLength / 2)),
      increment, newNumber, reverseString;

  reverseString = function (string) {
    return string.length > 1 ? string.split('').reverse().join('') : string;
  };

  if (oddDigits) {
    increment = Math.pow(10, numberLength / 2);
    newNumber = +(leftHalf + middleNumber + reverseString(leftHalf));
  } else {
    increment = 1.1 * Math.pow(10, numberLength / 2);
    newNumber = +(leftHalf + reverseString(leftHalf));
  }

  if (newNumber > number) {
    return newNumber;
  }

  if (middleNumber === '9') {
    return nextPalindrome(+numberString[0] * Math.pow(10, numberLength));
  } else {
    return newNumber + increment;
  }
};
