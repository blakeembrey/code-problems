import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;


public class ArrayPairSum {
	
	public ArrayList<int[]> getAllSumPairs(int k, int[] input) {
		ArrayList<int[]> allSumPairs = new ArrayList<int[]>();
		HashMap<Integer, Boolean> usedNumbers = new HashMap<Integer, Boolean>();
		for (int i = 0; i < input.length; ++i) {
			int difference = k - input[i];
			if (usedNumbers.containsKey(difference) && !usedNumbers.get(difference)) {
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
		for (int[] pairSum: allPairSums) {
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
	}
}
