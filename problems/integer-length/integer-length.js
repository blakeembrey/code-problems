module.exports = function (num) {
  // There is an extra check here to ensure the number is an integer
  return ('' + (num|0)).length;
};
