/**
 * A small frog wants to get to the other side of a pond. The frog is
 * initially located on one bank of the pond (position 0) and wants to get
 * to the other bank (position X). The frog can jump any (integer) distance
 * between 1 and D. If X > D then the frog cannot jump right across the
 * pond. Luckily, there are leaves falling from a tree onto the surface of
 * the pond, and the frog can jump onto and from the leaves.<br/><br/>
 *
 * You are given a zero-indexed array A consisting of N integers. This
 * array represents falling leaves. Initially there are no leaves. A[K]
 * represents the position where a leaf will fall in second K.<br/><br/>
 *
 * The goal is to find the earliest time when the frog can get to the other
 * side of the pond. The frog can jump from and to positions 0 and X (the
 * banks of the pond) and every position with a leaf.<br/><br/>
 *
 * For example, you are given integers X = 7, D = 3 and array A such that:<br/>
 *
 * <pre>{@code
 * A[0] = 1
 * A[1] = 3
 * A[2] = 1
 * A[3] = 4
 * A[4] = 2
 * A[5] = 5
 * }</pre>
 *
 * Initially, the frog cannot jump across the pond in a single jump.
 * However, in second 3, after a leaf falls at position 4, it becomes
 * possible for the frog to cross. This is the earliest moment when the
 * frog can jump across the pond (by jumps of length 1, 3 and 3). <br/><br/>
 *
 * {@code
 * 		class Solution { public int solution(int[] A, int X, int D); }
 * }<br/><br/>
 *
 * that, given a zero-indexed array A consisting of N integers, and
 * integers X and D, returns the earliest time when the frog can jump to
 * the other side of the pond. If the frog can leap across the pond in just
 * one jump, the function should return 0. If the frog is never able to
 * jump to the other side of the pond, the function should return −1.<br/><br/>
 *
 * For example, given X = 7, D = 3 and array A such that:
 *
 * <pre>{@code
 * A[0] = 1
 * A[1] = 3
 * A[2] = 1
 * A[3] = 4
 * A[4] = 2
 * A[5] = 5
 * }</pre>
 *
 * the function should return 3 as explained above.<br/><br/>
 *
 * Assume that:<br/>
 * - N is an integer within the range [0..100,000];<br/>
 * - X and D are integers within the range [1..100,000];<br/>
 * - each element of array A is an integer within the range [1..X−1].<br/><br/>
 *
 * Complexity:<br/>
 * - expected worst-case time complexity is O(N);<br/>
 * - expected worst-case space complexity is O(X), beyond input
 * storage (not counting the storage required for input arguments).<br/><br/>
 *
 * Elements of input arrays can be modified.<br/><br/>
 *
 */
public class FrogAndPond {

    public static void main(String[] args) {
		System.out.println("Expected solution: 3");
		System.out.println("Actual solution: " + getSolution(new int[]{ 1, 3, 1, 4, 2, 5}, 7, 3));
    }



	public static int getSolution(int[] a, int x, int d) {
		int seconds = 0; // Time needed by the frog

		if (d >= x) { // Yeih! The frog can cross the pond in one jump
			return seconds;
		} else if (d < x) { // The frog cannot cross the pond in only one jump
			int distanceLeafs = 0; // Distance with the help of the leafs
			for (int n=0; n<a.length; ++n) {

				if ((a[n] <= 3 && a[n] > distanceLeafs)
						|| (a[n] > 3 && (a[n] <= (distanceLeafs + d)))) {
					distanceLeafs = a[n];
				}

				if (distanceLeafs + d >= x) {
					return seconds;
				}

				++seconds;
			}
		}

		return -1; // The frog cannot jump the pond :(
	}

}
