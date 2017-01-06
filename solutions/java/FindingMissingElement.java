import java.util.*;
public class FindingMissingElement {

	/**
	 *The difference in the sum of the two arrays will give us the desired value
	 */
	static int find_missing(int a[],int b[])
	{
		int sum=0;
		for(int i:a)
			sum+=i;
		for(int i:b)
			sum-=i;
	return sum;
	}
	public static void main(String[] args) {
		int[] arr={1,3,5,6,2,5,6,8,9,23,45,67,87};
		int[] shuffled_ar={1,2,5,6,8,9,3,45,87,6,67,5};
		System.out.println("The missing value is:"+find_missing(arr,shuffled_ar));
		
		
	}

}
