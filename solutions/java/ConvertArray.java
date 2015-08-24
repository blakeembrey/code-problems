import java.util.Arrays;


public class ConvertArray {
	
	public int getOriginalIndex(int currentIndex, int length) {
		return (currentIndex % 3) * length + currentIndex/3;
	}
	
	public int[] convert(int[] input) {
	  // When array size is less than 3, returns an error.
	  if (input.length % 3 != 0 ) {
			System.out.println("Error! Array cannot be divided into three equal parts");
			return;
		}
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
