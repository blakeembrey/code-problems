/*
	Observation: 

		C Language doesn't have native support to Big Integer numbers,
		so on a x86 processor the maximum factorial number that can be reached is 12
		and on a x86_64 is 20.

		If you need to use big integer numbers, I recommend you search about the OpenSSL Big Numbers library.
		http://www.openssl.org/docs/crypto/bn.html

		To print a `unsigned long int` number use `%lu` on prinf() function.

*/

#include "stdio.h"

// Interative Loop
unsigned long int factorial (unsigned short int number){
	unsigned long int factorial = 1;
	unsigned short int i=2;

	do {
		factorial *= i++;
	} while (i<=number);
	return factorial;
}

// Interative Reverse Loop
unsigned long int factorialReverse (unsigned short int number){
	unsigned long int factorial = 1;
	unsigned short int i;

	for (i = number; i > 0; i--){
		factorial *= i;
	}
	return factorial;
}

// Recursive
unsigned long int factorialRecursive(unsigned short int number){
	if (number==1) {
		return 1;
	} else {
		return number * factorialRecursive(number-1);
	}
}