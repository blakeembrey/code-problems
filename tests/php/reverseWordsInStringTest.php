<?php
use PHPUnit\Framework\TestCase;

require_once 'solutions/php/reverse-words-in-string.php';

class reverseWordsInStringsTest extends TestCase
{
    public function test_reverseWordsInStrings()
    {
        $this->assertEquals("awesome! are Interviews", reverseWordsInStrings("Interviews are awesome!"));
        $this->assertEquals("degree CS", reverseWordsInStrings(" CS degree"));
        $this->assertEquals("degree CS", reverseWordsInStrings("CS degree"));
        $this->assertEquals("degree CS", reverseWordsInStrings("CS degree "));
        $this->assertEquals("degree CS", reverseWordsInStrings(" CS degree "));
    }
}
