<?php

$getDivisors = function ($number) {
	$divisors = [];
	for ($i = $number; --$i > 0;) {
		$remainder = $number % $i;
		if (!$remainder) {
			$divisors[] = $i;
		}
	}
	return $divisors;
};

$getSubsets = function ($divisors) {
	$subsets = [[]];
	foreach ($divisors as $division) {
		foreach ($subsets as $subset) {
			$subsets[] = array_merge([$division], $subset);
		}
	}
	return $subsets;
};

$isRoom = function($subsets, $room) {
	foreach ($subsets as $subset) {
		if (array_sum($subset) == $room) {
			return false;
		}
	}
	return true;
};

for ($i = 0; ++$i < 101;) {
	$divisors = $getDivisors($i);

	$sum = array_sum($divisors);

	if ($sum <= $i) {
		continue;
	}

	if ($isRoom($getSubsets($divisors), $i)) {
		echo $i . "\n";
		exit;
	}
}

echo "?\n";


