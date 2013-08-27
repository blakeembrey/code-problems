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
    if (replacements[string.substr(i, 2)]) {
      string = string.substr(0, i) + replacements[string.substr(i, 2)] + string.substr(i + 2);
    } else {
      i++;
    }
  }

  return string;
};
