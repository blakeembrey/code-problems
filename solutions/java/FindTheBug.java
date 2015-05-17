/**
 * You are given an implementation of a function:<br/>
 * {@code
 * 		class Solution { public boolean solution(int[] A, int K); }
 * }<br/><br/>
 *
 * This function, given a non-empty zero-indexed array A of N integers
 * (sorted in non-decreasing order) and integer K, checks whether A
 * contains numbers 1, 2, ..., K (every number from 1 to K at least once)
 * and no other numbers.<br/><br/>
 *
 * For example, given the following array A, and K = 3:
 *
 * <pre>{@code
 * A[0] = 1
 * A[1] = 1
 * A[2] = 2
 * A[3] = 3
 * A[4] = 3
 * }</pre>
 *
 * The function should return {@code true}.<br/><br/>
 *
 * For the following array A, and K = 2:
 *
 * <pre>{@code
 * A[0] = 1
 * A[1] = 1
 * A[2] = 3
 * }</pre>
 *
 * the function should return {@code false}.<br/><br/>
 *
 * Unfortunately, despite the fact that the function may return expected
 * result for the example input, there is a bug in the implementation,
 * which may produce incorrect results for other inputs. Find the bug and
 * correct it. You should modify at most **two** lines of code.<br/><br/>
 *
 * Assume that:<br/>
 * - N and K are integers within the range [1..300,000];
 * each element of array A is an integer within the range
 * [0..1,000,000,000];<br/>
 * - array A is sorted in non-decreasing order.<br/><br/>
 *
 * Complexity:<br/>
 * - expected worst-case time complexity is O(N);<br/>
 * - expected worst-case space complexity is O(1), beyond input
 * storage (not counting the storage required for input arguments).<br/><br/>
 *
 * Elements of input arrays can be modified.<br/><br/>
 */
public class FindTheBug {

    public static void main(String[] args) {
        System.out.println("Expected solution: " + getSolutionOriginal(new int[]{1, 1, 2, 3, 3}, 3));
        System.out.println("Actual solution: " + getSolutionCorrected(new int[]{1, 1, 2, 3, 3}, 3));
    }



	public static boolean getSolutionOriginal(int[] a, int k) {
		int n = a.length;
		for (int i = 0; i < n - 1; i++) {
			if (a[i + 1] < a[i])
				return false;
		}
		if (a[0] != 1 && a[1] != k)
			return false;
		else return true;
	}



	public static boolean getSolutionCorrected(int[] a, int k) {
		int n = a.length;
		for (int i = 0; i < n - 1; i++) {
			if (a[i] + 1 < a[i + 1]) // This line changed
				return false;
		}
		if (a[0] != 1 && a[n - 1] != k) // And this one
			return false;
		else return true;
	}
}
