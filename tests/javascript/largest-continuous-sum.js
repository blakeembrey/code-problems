var assert   = require('assert');
var solution = require('../../solutions/javascript/largest-continuous-sum');

describe('largest continuous sum', function () {
  it('should be able to get the largest sum', function () {
    assert.equal(solution([1, 2, 3]), 6);
    assert.equal(solution([2, 4, -1, 4, 5]), 14);
    assert.equal(solution([10, -5, 15, -20, 5]), 20);
  });

  it('should work with negative numbers', function () {
    assert.equal(solution([-1, -2, -3]), -1);
  });

  it('should return nothing when given nothing', function () {
    assert.equal(solution(), undefined);
  });
});
