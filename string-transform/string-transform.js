function solution (S) {
  var i = 0,
      replacements;

  replacements = {
    'AB': 'AA',
    'BA': 'AA',
    'CB': 'CC',
    'BC': 'CC',
    'AA': 'A',
    'CC': 'C'
  };

  while (i < S.length) {
    if (replacements[S.substr(i, 2)]) {
      S = S.substr(0, i) + replacements[S.substr(i, 2)] + S.substr(i + 2);
    } else {
      i++;
    }
  }

  return S;
}
