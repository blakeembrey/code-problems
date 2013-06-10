var oddOccuringElement = function (array) {
  return array.reduce(function (memo, number) {
    return memo ^ number;
  }, 0);
};
