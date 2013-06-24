var nextHighestNumber = require('../next-highest-number/next-highest-number'),
    assert            = require('assert');

describe('next highest number', function () {
  it('should return the next highest number', function () {
    assert.equal(nextHighestNumber(1524), 1542);
    assert.equal(nextHighestNumber(1542), 2145);
    assert.equal(nextHighestNumber(1543), 3145);
    assert.equal(nextHighestNumber(1544), 4145);
    assert.equal(nextHighestNumber(63254), 63425);
    assert.equal(nextHighestNumber(63542), 64235);
    assert.equal(nextHighestNumber(1112), 1121);
    assert.equal(nextHighestNumber(1243), 1324);
    assert.equal(nextHighestNumber(348932), 349238);
  });

  it('should work when there isn\'t a higher number', function () {
    assert.equal(nextHighestNumber(98765), 98765);
    assert.equal(nextHighestNumber(11111), 11111);
  });
});
