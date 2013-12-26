var expect       = require('chai').expect;
var sortedSearch = require('../../solutions/javascript/sorted-array-search');

describe('Sorted Array Search', function () {
  it('should be able to find the number', function () {
    expect(sortedSearch([2, 5, 6, 9, 23, 45, 85, 102], 9)).to.equal(3);
    expect(sortedSearch([2, 8, 9, 10, 53, 63, 73, 83], 83)).to.equal(7);
    expect(sortedSearch([1, 4, 6, 7, 9, 11, 45, 98, 99], 1)).to.equal(0);
  });

  it('should find negative numbers', function () {
    expect(sortedSearch([-11, -10, -7, -5, -3, -2, 5, 8], -10)).to.equal(1);
    expect(sortedSearch([-99, -67, -45, -33, -10, -9, -8], -8)).to.equal(6);
  });

  it('should fail to find the number', function () {
    expect(sortedSearch([3, 4, 7, 9, 44], 23)).to.equal(-1);
  });
});
