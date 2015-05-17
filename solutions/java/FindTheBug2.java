/**
 * A non-empty zero-indexed array A consisting of N integers and sorted in a non-decreasing order is given. The leader of this array is the value that occurs in more than half of the elements of A.<br/><br/>
 *
 * You are given an implementation of a function:<br/>
 * {@code
 * 		class Solution { public int solution(int[] A); }
 * }<br/><br/>
 *
 * that, given a non-empty zero-indexed array A consisting of N integers, sorted in a non-decreasing order, returns the leader of array A. The function should return −1 if array A does not contain a leader.<br/><br/>
 *
 * For example, given array A consisting of ten elements such that:
 * <pre>{@code
 * A[0] = 2
 * A[1] = 2
 * A[2] = 2
 * A[3] = 2
 * A[4] = 2
 * A[5] = 3
 * A[6] = 4
 * A[7] = 4
 * A[8] = 4
 * A[9] = 6
 * }</pre>
 *
 * the function should return −1, because the value that occurs most frequently in the array, 2, occurs five times, and 5 is not more than half of 10.<br/><br/>
 *
 * Given array A consisting of five elements such that:
 * <pre>{@code
 * A[0] = 1
 * A[1] = 1
 * A[2] = 1
 * A[3] = 1
 * A[4] = 50
 * }</pre>
 *
 * the function should return 1.<br/><br/>
 *
 * Unfortunately, despite the fact that the function may return expected result for the example input, there is a bug in
 * the implementation, which may produce incorrect results for other inputs. Find the bug and correct it. You should
 * modify at most three lines of code.<br/><br/>
 *
 * Assume that:<br/>
 * - N is an integer within the range [1..100,000];<br/>
 * - each element of array A is an integer within the range [0..2147483647];<br/>
 * - array A is sorted in non-decreasing order.<br/><br/>
 *
 * Complexity:<br/>
 * - expected worst-case time complexity is O(N);<br/>
 * - expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).<br/><br/>
 *
 * Elements of input arrays can be modified.
 */
public class FindTheBug2 {

    public static void main(String[] args) {
        System.out.println("Expected solution: " + getSolutionOriginal(new int[]{1, 1, 1, 1, 50}));
        System.out.println("Actual solution: " + getSolutionCorrected(new int[]{1, 1, 1, 1, 50}));
    }



	public static int getSolutionOriginal(int[] a) {
		int n = a.length;
		int[] l = new int[n + 1];
		l[0] = -1;
		for (int i = 0; i < n; i++) {
			l[i + 1] = a[i];
		}
		int count = 0;
		int pos = (n + 1) / 2;
		int candidate = l[pos];
		for (int i = 1; i <= n; i++) {
			if (l[i] == candidate)
				count = count + 1;
		}
		if (count > pos)
			return candidate;
		return (-1);

	}



	public static int getSolutionCorrected(int[] a) {
		int n = a.length;
		int[] l = new int[n + 1];
		l[0] = -1;
		for (int i = 0; i < n; i++) {
			l[i + 1] = a[i];
		}
		int count = 0;
		int pos = (n + 1) / 2;
		int candidate = l[pos];
		for (int i = 1; i <= n; i++) {
			if (l[i] == candidate)
				count = count + 1;
		}
		if (n%2==0 ? count > pos : count > pos -1) // This line changed
			return candidate;
		return (-1);
	}
}
