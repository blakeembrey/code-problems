<?php
$brackets = array(
  '(' => ')',
  '{' => '}',
  '[' => ']'
);

#Write a function that accepts a string consisting entiring of brackets (`[](){}`) and returns whether it is balanced. Every "opening" bracket must be followed by a closing bracket of the same type. There can also be nested brackets, which adhere to the same rule.

function isBalancedBrackets($str){
	//Get the global bracket array
	global $brackets;
	//Declare the stack array
	$stackArray = array();
	//Total length of the passed string
	$strLength = strlen($str);
	//if string is null or string is not greater then 2 then skip the logic and return false
	if($str != '' && $strLength >= 2){
		//Loop every character of passed string
		for ($i=0; $i < $strLength; $i++) { 
			//Current single character
			$currentStr = $str[$i];
			if(in_array($currentStr, $brackets) || in_array($currentStr, array_keys($brackets))){
				if($brackets[end($stackArray)] == $currentStr){
					array_pop($stackArray);
				}else{
					array_push($stackArray, $currentStr);
				}
			}
		}
	}
	return !count($stackArray);
}

var_dump(isBalancedBrackets('(){}[]'));
var_dump(isBalancedBrackets('(ABC)sd{bcs}[]'));
var_dump(isBalancedBrackets('()[]{}(([])){[()][]}'));
var_dump(isBalancedBrackets('(bx))[]{}'));
var_dump(isBalancedBrackets('[(])'));
var_dump(isBalancedBrackets('([[abc(45)cd]])'));