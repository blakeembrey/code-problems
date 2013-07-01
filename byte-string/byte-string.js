module.exports = function (bytes, precision) {
  var suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      factor   = Math.pow(10, precision > 0 ? precision : 2);
  // Using a for loop since it's perfect for this kind of problem
  for (var i = bytes, k = 0; i >= 1024 && k < suffixes.length; i /= 1024, k++) {}
  // Return the number rounded to precision
  return (Math.round(i * factor) / factor) + ' ' + suffixes[k];
};
