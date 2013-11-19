var assert    = require('assert');
var factorial = require('../../solutions/javascript/factorial');

describe('factorial', function () {
  // We have multiple factorial solutions to test, so loop through them
  Object.keys(factorial).forEach(function (name) {
    // Set the value in the object as the current solution to work against
    var solution = factorial[name];
    // Use the name as part of the assertion name
    it(name + ' solution returns factorials', function () {
      // Bunch of simple assertions we know to be true
      assert.equal(solution(1), 1);
      assert.equal(solution(2), 2);
      assert.equal(solution(3), 6);
      assert.equal(solution(4), 24);
      assert.equal(solution(5), 120);
      assert.equal(solution(6), 720);
      assert.equal(solution(7), 5040);
      assert.equal(solution(8), 40320);
      assert.equal(solution(9), 362880);
      assert.equal(solution(10), 3628800);
      assert.equal(solution(11), 39916800);
      assert.equal(solution(12), 479001600);
      assert.equal(solution(13), 6227020800);
      assert.equal(solution(14), 87178291200);
      assert.equal(solution(15), 1307674368000);
      assert.equal(solution(16), 20922789888000);
      assert.equal(solution(17), 355687428096000);
      assert.equal(solution(18), 6402373705728000);
      assert.equal(solution(19), 121645100408832000);
      assert.equal(solution(20), 2432902008176640000);
    });
  });
});
