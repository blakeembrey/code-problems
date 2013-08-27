module.exports = function (value) {
  var remaining = value - ~~value,
      string    = '' + ~~value,
      length    = string.length,
      places    = 0;

  while (--length) {
    places += 1;
    // At every third position we want to insert a comma
    if (places % 3 === 0) {
      string = string.substr(0, length) + ',' + string.substr(length);
    }
  }

  return '$' + string + remaining.toFixed(2).slice(1);
};
