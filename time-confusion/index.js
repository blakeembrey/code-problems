process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';

var test = function(data) {
	var input = data.split(' ');

	// change times in to numbers
	var times = input.map(function(time) {
		var hm = time.split(':');
		var time = (parseInt(hm[0], 10) * 60) + parseInt(hm[1], 10);
		return time % 720;
	}).sort();

	// get the difference between the times
	diffs = [
		times[1] - times[0],
		times[2] - times[1],
		times[0] + 720 - times[2]
	];

	// if all differences are equal, look at the sun
	if (diffs[0] == diffs[1] && diffs[1] == diffs[2]) {
		console.log('Look at the sun');
		return;
	}

	// get answer depending on diff
	var answer = null;
	if (diffs[0] == diffs[1])
		answer = times[1];
	if (diffs[1] == diffs[2])
		answer = times[2];
	if (diffs[2] == diffs[0])
		answer = times[0];

	// convert answer back to a string
	console.log('The correct time is ' +
		(Math.floor(answer / 60) || 12) +
		':' + (answer % 60) +
		(answer % 60 < 10 ? '0' : '') + '.');

};

process.stdin.on('data', function (chunk) {
  data += chunk;
});

process.stdin.on('end', function () {
	var input = data.split('\n');
	// run for each input
	for (var i = 1; i <= +input[0]; i++) {
		test(input[i]);
	}
});
