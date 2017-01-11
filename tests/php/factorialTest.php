<?php
use PHPUnit\Framework\TestCase;

require_once 'solutions/php/factorial.php';

class FactorialTest extends TestCase
{
    public function test_factorial()
    {
        $this->assertEquals(1, factorial(1));
        $this->assertEquals(2, factorial(2));
        $this->assertEquals(6, factorial(3));
        $this->assertEquals(120, factorial(5));
        $this->assertEquals(2432902008176640000, factorial(20));
    }
}
