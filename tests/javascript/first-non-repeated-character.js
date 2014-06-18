var assert        = require('assert');
var nonRepeating = require('../../solutions/javascript/first-non-repeated-character');

describe('first-non-repeated-character', function () {
  it('should return "A" when given "A"', function () {
    assert.equal(nonRepeating('A'), 'A');
  });

  it('should return "B" when given "AAAB"', function () {
    assert.equal(nonRepeating('AAAB'), 'B');
  });

  it('should return undefined when given ""', function () {
    assert.equal(nonRepeating(''), undefined);
  });

  it('should return undefined when given "AABBCC"', function () {
    assert.equal(nonRepeating('AABBCC'), undefined);
  });

  it('should return "A" when given "ABC"', function () {
    assert.equal(nonRepeating('ABC'), 'A');
  });
});
