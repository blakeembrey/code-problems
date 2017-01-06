var assert    = require('assert');
var convert = require('../../solutions/javascript/convert-array');

describe('Convert Array', function() {
  it('should convert an array', function() {
    var arr = [
      'a1', 'a2', 'a3', 'a4', 'a5',
      'b1', 'b2', 'b3', 'b4', 'b5',
      'c1', 'c2', 'c3', 'c4', 'c5'
    ];

    var expectedArr = [
      'a1', 'b1', 'c1',
      'a2', 'b2', 'c2',
      'a3', 'b3', 'c3',
      'a4', 'b4', 'c4',
      'a5', 'b5', 'c5'
    ];

    convert(arr);

    for(var i = 0; i < arr.length; i++) {
        assert.equal(arr[i], expectedArr[i]);
    }
  })
})
