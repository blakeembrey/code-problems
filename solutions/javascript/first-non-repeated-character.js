module.exports = function (string) {
  var i,
      matchLeft,
      matchRight;

  for (i = 0; i < string.length; i++) {
    matchLeft = (i - 1 >= 0 && string[i] === string[i - 1]);
    matchRight = (i + 1 < string.length && string[i] === string[i + 1]);

    if (!matchLeft && !matchRight) {
      return string[i];
    }
  }
};
