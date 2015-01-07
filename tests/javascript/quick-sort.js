'use strict';

var assert = require('assert');
var quickSort = require('../../solutions/javascript/quick-sort');

describe('Quick Sort', function(){

  it('throws error if input not an array', function() {

    try {
      quickSort(null);
    } catch (err) {
      return;
    }

    assert(false, 'Expected exception to be thrown.');
  });

  it('handles empty list', function() {
    var results = quickSort([]);
    assert(Array.isArray(results), 'Expected result to be array');
    assert(results.length === 0, 'Expected array to be empty');
  });

  it('handles list of one', function() {
    var results = quickSort([1]);
    assert.deepEqual(results, [1], 'Expected arrays to match');
  });

  it('sorts an array of numbers', function() {
    var unsorted = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    var sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var results = quickSort(unsorted);
    assert.deepEqual(results, sorted, 'Expected arrays to match');
  });

  it('sorts an array of words', function() {
    var words = ['carrot','beta','apple'];
    var sorted = ['apple','beta','carrot'];
    var results = quickSort(words);

    assert.deepEqual(results, sorted, 'Expected arrays to match');
  });

  it('leaves input array intact', function() {
    var words = ['apple','beta','carrot'];
    quickSort(words);
    assert(words.length === 3);
  });


});
