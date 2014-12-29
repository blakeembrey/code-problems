'use strict';

var assert = require('assert');
var quickSort = require('../../solutions/javascript/quick-sort');

describe('Quick Sort', function(){
  var unsorted = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  var sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('sorts an array of numbers', function() {
    var results = quickSort(unsorted);
    assert.deepEqual(results, sorted, 'Expected arrays to match');
  });

  it('sorts an array of words', function() {
    var words = ['carrot','beta','apple'];
    var sorted = ['apple','beta','carrot'];
    var results = quickSort(words);

    assert.deepEqual(results, sorted, 'Expected arrays to match');
  });

});
