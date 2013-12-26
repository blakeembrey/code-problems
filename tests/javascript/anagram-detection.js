var expect           = require('chai').expect;
var anagramDetection = require('../../solutions/javascript/anagram-detection');

describe('Anagram Detection', function () {
  it('should detect no change in the characters', function () {
    expect(anagramDetection('abc', 'abc')).to.equal(1);
  });

  it('should detect anagrams of itself', function () {
    expect(anagramDetection('aab', 'baa')).to.equal(1);
  });

  it('should detect child anagrams', function () {
    expect(anagramDetection('AbrAcadAbRa', 'cAda')).to.equal(2);
    expect(anagramDetection('AdnBndAndBdaBn', 'dAn')).to.equal(4);
  });

  it('should not fail with a larger child than parent string', function () {
    expect(anagramDetection('test', 'testing')).to.equal(0);
  });
});
