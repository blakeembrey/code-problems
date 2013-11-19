var assert      = require('assert');
var primeNumber = require('../../solutions/javascript/prime-number');

describe('prime number', function () {
  it('should return true if the number is a prime number', function () {
    assert.equal(primeNumber(2), true);
    assert.equal(primeNumber(859), true);
    assert.equal(primeNumber(983), true);
    assert.equal(primeNumber(283), true);
  });

  it('should return false if the number is not prime', function () {
    assert.equal(primeNumber(324), false);
    assert.equal(primeNumber(-124), false);
    assert.equal(primeNumber(89325), false);
  });
});
