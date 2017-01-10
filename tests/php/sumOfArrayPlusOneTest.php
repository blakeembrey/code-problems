<?php
use PHPUnit\Framework\TestCase;

require_once 'solutions/php/sum-of-array-plus-one.php';

class sumOfArrayPlusOneTest extends TestCase
{
    public function test_SumOfArrayPlusOne()
    {
        $this->assertEquals(14, SumOfArrayPlusOne([1, 2, 3, 4]));

    }
}
