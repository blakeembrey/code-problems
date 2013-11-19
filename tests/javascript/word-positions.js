var assert        = require('assert');
var wordPositions = require('../../solutions/javascript/word-positions');

describe('word positions', function () {
  it('should return an array of word positions', function () {
    assert.deepEqual(wordPositions('test')('test'), [0]);
    assert.deepEqual(wordPositions('test test test')('test'), [0, 4, 9]);
    assert.deepEqual(wordPositions('find a word in some sentence')('in'), [11]);
  });

  it('should return an empty array when not found', function () {
    assert.deepEqual(wordPositions('it does not exist')('test'), []);
  });
});
