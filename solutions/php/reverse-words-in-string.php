<?php

function reverseWordsInStrings($string)
{
    return trim(implode(array_reverse(preg_split('/\s+/', $string)), ' '));
}
