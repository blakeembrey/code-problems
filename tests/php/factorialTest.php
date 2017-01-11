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

    public function test_factorialReverse()
    {
        $this->assertEquals(1, factorialReverse(1));
        $this->assertEquals(2, factorialReverse(2));
        $this->assertEquals(6, factorialReverse(3));
        $this->assertEquals(120, factorialReverse(5));
        $this->assertEquals(2432902008176640000, factorialReverse(20));
    }

    public function test_factorialRecursive()
    {
        $this->assertEquals(1, factorialRecursive(1));
        $this->assertEquals(2, factorialRecursive(2));
        $this->assertEquals(6, factorialRecursive(3));
        $this->assertEquals(120, factorialRecursive(5));
        $this->assertEquals(2432902008176640000, factorialRecursive(20));
    }

   
}
