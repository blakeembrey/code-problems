<?php

function reverseWordsInStrings($string)
{
    return implode(array_reverse(preg_split('/\s+/', $string)), ' ');
}

?>