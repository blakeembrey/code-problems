<?php

  // Iterative solution.
  function factorial ($number) {
    $result = 1;

    for ($i = 1; $i <= $number; $i++) {
      $result *= $i;
    }

    return $result;
  }

  // Iterative using a reverse loop.
  function factorialReverse ($number) {
    $result = 1;

    while ($number != 1) {
      $result *= $number;
      $number--;
    }

    return $result;
  }

  // Recursive solution.
  function factorialRecursive ($number) {
    if ($number == 1) {
      return 1;
    }

    return $number * factorialRecursive($number - 1);
  }

?>
