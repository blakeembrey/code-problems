public class LargestContinuousSum {
	public static void main(String[] args) {
		LargestContinuousSum lcd = new LargestContinuousSum();
		int[] input = { 1, -1, 2, -5, 10, 15, -10, 5 };
		System.out.print(lcd.getSum(input));
	}

	public int getSum(int[] input) {
		int currentMax = input[0];
		int finalMax = input[0];
		for (int i = 1; i < input.length; i++) {
			if (currentMax + input[i] > input[i])
				currentMax = currentMax + input[i];
			else
				currentMax = input[i];

			if (currentMax > finalMax)
				finalMax = currentMax;

		}
		return finalMax;
	}
}