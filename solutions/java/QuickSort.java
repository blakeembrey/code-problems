/*
 * #### Quick Sort ####
 * Time Complexity : O(n log(n)) average case
 * O(n^2) worst case. Shuffle the list to guard against it
 *
 * Space Complexity: O(n)
 *
 * */
public class QuickSort {

	public static void quickSort(int[] arr){
		shuffle(arr); // guard against worst case scenario
		quickSort(arr, 0, arr.length - 1);
	}

	private static void quickSort(int arr[], int left, int right) {
		int index = partition(arr, left, right);
		if (left < index - 1) { // Sort left half
			quickSort(arr, left, index - 1);
		}
		if (index < right) { // Sort right half
			quickSort(arr, index, right);
		}
	}

	public static int partition(int arr[], int left, int right) {
		int pivot = arr[(left + right) / 2]; // Pick a pivot point. Can be an element.

		while (left <= right) { // Until we've gone through the whole array
			// Find element on left that should be on right
			while (arr[left] < pivot) {
				left++;
			}

			// Find element on right that should be on left
			while (arr[right] > pivot) {
				right--;
			}

			// Swap elements, and move left and right indices
			if (left <= right) {
				swap(arr, left, right);
				left++;
				right--;
			}
		}
		return left;
	}

	private static void swap(int[] arr, int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	private static void shuffle(int[] arr){
		int N = arr.length;
		for (int i = 0; i < N; i++) {
			int j = i + (int) (Math.random() * (N-i));
			swap(arr, i, j);
		}
	}

	public static void main(String[] args) {
		int[] arr = {5, 5, 4, 3, 2, 1};
		quickSort(arr);
		for (int i = 0; i < arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
	}

}
