process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '',
    findAnagrams;

findAnagrams = function (string) {
  var anagrams = {};

  (function findAnagrams (str, remaining) {
    if (!remaining) {
      return anagrams[str] = true;
    }

    for (var i = 0; i < remaining.length; i++) {
      findAnagrams(str + remaining[i], remaining.substr(0, i) + remaining.substr(i + 1));
    }
  })('', string);

  return anagrams;
};

process.stdin.on('data', function (chunk) {
  data += chunk;
});

process.stdin.on('end', function () {
  var input    = data.split('\n'),
      string   = input[0],
      length   = input[1].length,
      anagrams = findAnagrams(input[1]),
      total    = 0;

  for (var i = 0; i < (string.length - length); i++) {
    if (anagrams[string.substr(i, length)]) {
      total += 1;
    }
  }

  console.log(total);
});
