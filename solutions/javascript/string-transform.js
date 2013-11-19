module.exports = function (string) {
  var i = 0;

  var replacements = {
    'AB': 'AA',
    'BA': 'AA',
    'CB': 'CC',
    'BC': 'CC',
    'AA': 'A',
    'CC': 'C'
  };

  while (i < string.length) {
    var replacement = replacements[string.substr(i, 2)];

    if (replacement) {
      string = string.substr(0, i) + replacement + string.substr(i + 2);
    } else {
      i++;
    }
  }

  return string;
};
