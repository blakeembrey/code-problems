<?php
use PHPUnit\Framework\TestCase;

require_once 'solutions/php/integer-length.php';

class IntegerLengthTest extends TestCase
{
    public function test_IntegerLength()
    {
        $this->assertEquals(1, IntegerLength(1));
        $this->assertEquals(2, IntegerLength(22));
        $this->assertEquals(3, IntegerLength(333));
        $this->assertEquals(10, IntegerLength(1234567890));

    }
}
