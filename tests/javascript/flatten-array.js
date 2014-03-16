/* global describe, it */

var fs      = require('fs');
var expect  = require('chai').expect;
var dirname = __dirname + '/../../solutions/javascript/flatten-array';

// Load all the solutions from the test directory.
var solutions = fs.readdirSync(dirname).filter(function (file) {
  return /\.js$/.test(file);
}).map(function (file) {
  return [file.replace(/\.js$/, ''), require(dirname + '/' + file)];
});

describe('flatten-array', function () {
  solutions.forEach(function (solution) {
    var flatten = solution[1];

    describe(solution[0], function () {
      it('should flatten an array', function () {
        expect(flatten([1, [2, [3], 2], 1])).to.deep.equal([1, 2, 3, 2, 1]);
      });
    });
  });
});
