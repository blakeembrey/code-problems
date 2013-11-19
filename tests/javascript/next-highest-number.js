var assert            = require('assert');
var nextHighest = require('../../solutions/javascript/next-highest-number');

describe('next highest number', function () {
  it('should return the next highest number', function () {
    assert.equal(nextHighest(1524), 1542);
    assert.equal(nextHighest(1542), 2145);
    assert.equal(nextHighest(1543), 3145);
    assert.equal(nextHighest(1544), 4145);
    assert.equal(nextHighest(63254), 63425);
    assert.equal(nextHighest(63542), 64235);
    assert.equal(nextHighest(1112), 1121);
    assert.equal(nextHighest(1243), 1324);
    assert.equal(nextHighest(348932), 349238);
    assert.equal(nextHighest(15895), 15958);
  });

  it('should work when there isn\'t a higher number', function () {
    assert.equal(nextHighest(98765), 98765);
    assert.equal(nextHighest(11111), 11111);
  });
});
