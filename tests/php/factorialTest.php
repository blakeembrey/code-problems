<?php
use PHPUnit\Framework\TestCase;

require_once 'solutions/php/factorial.php';

class FactorialTest extends TestCase
{
    public function test_factorial()
    {
        $this->verifyFactorial("factorial");
    }

    public function test_factorialReverse()
    {
        $this->verifyFactorial("factorialReverse");
    }

    public function test_factorialRecursive()
    {
        $this->verifyFactorial("factorialRecursive");
    }

    private function verifyFactorial($fn)
    {
        $testDataMap = [
            ["input" => 1, "expect" => 1],
            ["input" => 2, "expect" => 2],
            ["input" => 3, "expect" => 6],
            ["input" => 5, "expect" => 120],
            ["input" => 20, "expect" => 2432902008176640000],
        ];

        foreach ($testDataMap as $data) {
            $this->assertEquals($data["expect"], call_user_func($fn, $data["input"]));
        }
    }
}
