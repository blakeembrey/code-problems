<?php

function SumOfIntegers ($integerArray) {
  $sum = 0;
  foreach ($integerArray as $valor) {
    $sum += $valor;
  }
  return $sum + count($integerArray);
}

?>
