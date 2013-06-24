module.exports = function (number) {
  var parts  = ('' + number).split('.'),
      length = parts[0].length,
      places = 0;

  while (--length) {
    places += 1;
    // At every third position we want to insert a comma
    if (places % 3 === 0) {
      parts[0] = parts[0].substr(0, length) + ',' + parts[0].substr(length);
    }
  }

  return parts.join('.');
};

// Example using regular expression - let me know if I can skip the split step
// some how
module.exports = function (number) {
  var parts = ('' + number).split('.');

  parts[0] = parts[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

  return parts.join('.');
};
