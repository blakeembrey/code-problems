#include <stdio.h>
#include <stdlib.h>
// The differnce in sum of two arrays will give us the  desired value.
// The other approach could be to look up for element each time but that will increase the time complexity of the program.
 int find_missing(int orig[],int On,int shuffled[])
{
	int i,sum=0;
	for(i=0;i<On-1;i++)
		sum+=orig[i]-shuffled[i];
	return sum+orig[On-1];
}

int main()
{
	int arr[]={1,3,5,6,2,5,6,8,9,23,45,67,87};
	int shuffled_arr[]={1,2,5,6,8,9,3,45,87,6,67,5};
	int On=sizeof(arr) / sizeof(arr[1]);
	printf("The missing value is:%d\n",find_missing(arr,On,shuffled_arr));
	return 0;
}