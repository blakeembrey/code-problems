var expect      = require('chai').expect;
var searchArray = require(
  '../../solutions/javascript/search-unknown-length-array'
);

describe('Search Unknown Length Array', function () {
  it('should find the number', function () {
    expect(searchArray([3, 5, 6, 7, 8], 3)).to.equal(0);
    expect(searchArray([-8, -6, -5, -1, 5, 12, 99], 99)).to.equal(6);
    expect(searchArray([1, 4, 6, 7, 9, 12, 34, 47, 53, 65], 12)).to.equal(5);
  });

  it('should fail to find the number', function () {
    expect(searchArray([1, 2, 3], 4)).to.equal(-1);
  });
});
