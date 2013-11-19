// Accepts a number and an array of multiples
module.exports = function sumOfMultiples (number, multiples) {
  return Array.apply(null, new Array(number)).map(function (_, index) {
    return index;
  }).filter(function (number) {
    return multiples.some(function (multiple) {
      return number % multiple === 0;
    });
  }).reduce(function (memo, number) {
    return memo + number;
  });
};
