import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class ArrayPairSum {

	/**
	 * Does not consider duplicates of numbers
	 * 
	 * @param Sum
	 *            . Example: 8
	 * @param Integer
	 *            array. Example: [3, 4, 5, 4, 4]
	 * @return List of Integer pairs. Example: [[3, 5], [4, 4]]. Does not
	 *         consider multiple occurrences of number 4.
	 */
	public ArrayList<int[]> getAllSumPairs(int k, int[] input) {
		ArrayList<int[]> allSumPairs = new ArrayList<int[]>();
		HashMap<Integer, Boolean> usedNumbers = new HashMap<Integer, Boolean>();
		for (int i = 0; i < input.length; ++i) {
			int difference = k - input[i];
			if (usedNumbers.containsKey(difference)
					&& !usedNumbers.get(difference)) {
				int[] sumPair = new int[2];
				sumPair[0] = input[i];
				sumPair[1] = difference;
				allSumPairs.add(sumPair);
				usedNumbers.put(input[i], true);
			} else {
				usedNumbers.put(input[i], false);
			}
		}
		return allSumPairs;
	}

	public static void printAllPairSums(ArrayList<int[]> allPairSums) {
		String output = "[ ";
		for (int[] pairSum : allPairSums) {
			output += Arrays.toString(pairSum);
			output += " ";
		}
		output += " ]";
		System.out.println(output);
	}

	public static void main(String[] arg) {
		ArrayPairSum a = new ArrayPairSum();
		int[] input1 = { 3, 4, 5, 6, 7 };
		printAllPairSums(a.getAllSumPairs(10, input1));
		int[] input2 = { 3, 4, 5, 4, 4 };
		printAllPairSums(a.getAllSumPairs(8, input2));

		printAllPairSums(a.getAllSumPairsWithRep(10, input1));
		printAllPairSums(a.getAllSumPairsWithRep(8, input2));

		printAllPairSums(a.getAllSumPairsWithRepBetter(10, input1));
		printAllPairSums(a.getAllSumPairsWithRepBetter(8, input2));
	}

	/**
	 * Considers duplicates of numbers.
	 * 
	 * @param Sum
	 *            . Example: 8
	 * @param Integer
	 *            array. Example: [3, 4, 5, 4, 4]
	 * @return List of Integer pairs. Example: [[3, 5], [4, 4], [4, 4], [4, 4]].
	 *         Considers multiple occurrences of number 4.
	 * @complexity O(n2) best/worst case.
	 */
	public ArrayList<int[]> getAllSumPairsWithRep(int sum, int[] input) {
		ArrayList<int[]> allSumPairs = new ArrayList<int[]>();
		for (int i = 0; i < input.length - 1; i++) {
			for (int j = i + 1; j < input.length; j++) {
				int tSum = input[i] + input[j];
				if (sum == tSum) {
					int[] sumPair = new int[2];
					sumPair[0] = input[i];
					sumPair[1] = input[j];
					allSumPairs.add(sumPair);
				}
			}
		}
		return allSumPairs;
	}

	/**
	 * Considers duplicates of numbers.
	 * 
	 * @param Sum
	 *            . Example: 8
	 * @param Integer
	 *            array. Example: [3, 4, 5, 4, 4]
	 * @return List of Integer pairs. Example: [[3, 5], [4, 4], [4, 4], [4, 4]].
	 *         Considers multiple occurrences of number 4.
	 * @complexity O(n) best case - when all numbers are unique. O(n2) worst
	 *             case - when all numbers are the same.
	 */
	public ArrayList<int[]> getAllSumPairsWithRepBetter(int sum, int[] input) {
		ArrayList<int[]> allSumPairs = new ArrayList<int[]>();
		HashMap<Integer, Integer> checker = new HashMap<Integer, Integer>();
		for (int i = 0; i < input.length; i++) {
			int diff = sum - input[i];
			if (checker.containsKey(diff) && checker.get(diff) != null
					&& checker.get(diff) > 0) {
				for (int j = 0; j < checker.get(diff); j++) {
					int[] sumPair = new int[2];
					sumPair[0] = input[i];
					sumPair[1] = diff;
					allSumPairs.add(sumPair);
				}
				checker.put(input[i], checker.get(diff) + 1);
			} else {
				checker.put(input[i], 1);
			}
		}
		return allSumPairs;
	}
}
