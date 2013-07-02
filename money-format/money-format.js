'use strict';

function formatMoney(value) {
  var rem = value - ~~value;
  var arr = String(~~value).split('');
  var result = [];

  while (arr.length) {
    var from = Math.max(0, arr.length - 3);
    result.unshift(arr.splice(from, 3));
  }

  return result.reduce(function (a, b) {
    return a + ' ' + b.join('');
  }) + rem.toFixed(2).slice(1);
}
