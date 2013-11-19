module.exports = function (array) {
  if (!array || !array.length) { return; }

  var currentSum, maximumSum;

  // Set the starting sum as the first number
  currentSum = maximumSum = array.shift();

  array.forEach(function (num) {
    currentSum = Math.max(currentSum + num, num);
    maximumSum = Math.max(currentSum, maximumSum);
  });

  return maximumSum;
};
