import java.util.Arrays;


public class ConvertArray {
	
	public int getOriginalIndex(int currentIndex, int length) {
		return (currentIndex % 3) * length + currentIndex/3;
	}
	
	public int[] convert(int[] input) {
		for (int i = 0; i < input.length; ++i) {
			int originalIndex = getOriginalIndex(i, input.length/3);
			while (originalIndex < i) {
				originalIndex = getOriginalIndex(originalIndex, input.length/3);
			}
			int temp = input[i];
			input[i] = input[originalIndex];
			input[originalIndex] = temp;
		}
		return input;
	}

	public static void main(String[] args) {
		ConvertArray c = new ConvertArray();
		int[] test1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
		System.out.println(Arrays.toString(c.convert(test1)));
		
	}
}
