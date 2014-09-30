import java.util.HashMap;

public class IntegerDifference {
	public static void main(String[] args) {
		IntegerDifference id = new IntegerDifference();
		int[] input = { 1, 1, 3, 3 };
		int diff = 2;
		System.out.print(id.getNumberOfElements(input, diff));
	}

	public int getNumberOfElements(int[] input, int diff) {
		int numberOfElements = 0;
		HashMap<Integer, Integer> sums = new HashMap<Integer, Integer>();
		for (int i = 0; i < input.length; i++) {
			int sum = diff + input[i];
			if (sums.containsKey(sum))
				sums.put(sum, sums.get(sum) + 1);
			else
				sums.put(sum, 1);
		}
		for (int i = 0; i < input.length; i++) {
			if (sums.containsKey(input[i])) {
				numberOfElements += sums.get(input[i]);
			}
		}
		return numberOfElements;
	}
}