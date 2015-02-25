var expect = require('chai').expect;
var threatens = require('../../solutions/javascript/queen-threatens-king');

describe('queen-threatens-king', function () {

  it('should throw if called with invalid parameters', function () {
    var coordinates = [ 0, 0, null, 0 ];
    var threatensWithInvalidParams = Function.prototype.bind.apply(threatens, coordinates);
    expect(threatensWithInvalidParams).to.throw(Error);
  });

  it('the queen should threaten the king (in the same row)', function () {
    expect(threatens(0, 0, 0, 1)).to.be.true;
  });

  it('the queen should threaten the king (in the same column)', function () {
    expect(threatens(0, 0, 1, 0)).to.be.true;
  });

  it('the queen should threaten the king (in the same diagonal)', function () {
    expect(threatens(0, 0, 1, 1)).to.be.true;
  });

  it('the queen should not threaten the king', function () {
    expect(threatens(0, 0, 1, 2)).to.be.false;
  });

});
