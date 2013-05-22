process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';

process.stdin.on('data', function (chunk) {
  data += chunk;
});

process.stdin.on('end', function () {
});
