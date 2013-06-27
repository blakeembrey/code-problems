module.exports = function (array) {
  var currentSum = 0,
      maximumSum = 0;

  array.forEach(function (num) {
    currentSum = Math.max(currentSum + num, num);
    maximumSum = Math.max(currentSum, maximumSum);
  });

  return maximumSum;
};
