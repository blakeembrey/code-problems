#include <stdio.h>

int sum_of_multiples(int n)
{	int sum=0;  
	n=n-1;
    sum=((n/3)*((n/3)*3 +3))/2 + ((n/5)*((n/5)*5 +5))/2 - ((n/15)*((n/15)*15 + 15))/2; // sum of airthmetic progressions & De-Morgan's Law
    return sum;
}
int main()
{
	printf("%d\n",sum_of_multiples(1000));
 	return 0;
}