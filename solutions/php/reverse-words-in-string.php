<?php
    $input = preg_replace('/\s+/', ' ', trim($argv[1]));
    $explodedString = explode(' ',$input);
    $explodedString = array_reverse($explodedString);
    $output = implode($explodedString,' ');
    echo $output;
?>