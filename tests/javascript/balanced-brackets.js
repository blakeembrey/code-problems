var expect = require('chai').expect;
var balancedBrackets = require('../../solutions/javascript/balanced-brackets');


describe('Balanced brackets', function () {

  it('should detect pairing brackets', function () {
    expect(balancedBrackets('()[]{}')).to.be.true;
  });
 it('should detect nested brackets', function () {
    expect(balancedBrackets('(([])){[()][]}')).to.be.true;
  });

  it('should detect non pairing brackets ', function () {
    expect(balancedBrackets('())[]{}')).to.be.false;
  });

  it('should detect wrong nesting ', function () {
    expect(balancedBrackets('[(])')).to.be.false;
  });

});
