all: tests

tests: matrix_test.c ../regex.c ../commons.c ../regex.h ../matrix.h ../stackcalc.h 
	clang -o matrixTest -ggdb3 -Wall -Werror -O0 -std=c99 -I/usr/local/include matrix_test.c ../matrix.c ../regex.c ../commons.c ../stackcalc.c -L/usr/local/lib/ -lpcre2-8 -lcmocka


