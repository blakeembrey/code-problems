/*
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, 
 * compares each pair of adjacent items and swaps them if they are in the wrong order. 
 * The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
 * Author : Viveka Aggarwal
 * Author : Jayesh Chandrapal
 */

public class BubbleSort {
	public static void sort(int[] arr) {
		int len = arr.length;
    boolean unsorted = true;
        
		while(unsorted) {
      unsorted = false;
            
			for(int j = 0 ; j < len - 1; j++) {
        if(arr[j] > arr[j + 1]) {
				  swap(j, j + 1, arr);
          unsorted = true;
        }
			}
		}
	}
	
	public static void swap(int a, int b, int[] arr) {
		int temp = arr[a]; 
		arr[a] = arr[b]; 
		arr[b] = temp;
	}
	
	public static void main(String[] a) {
		int[] arr = {23, 3, 12, 54, 34, 77, 78, 87, 92, 12};  // unsorted input
		//int[] arr = {3,12, 12, 23, 34, 54, 77, 78, 87, 92};   // sorted input
		
		sort(arr);
		
		for(int i : arr) {
			System.out.print(i + " ");
		}
	}
}
