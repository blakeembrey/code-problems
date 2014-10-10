public class SearchUnknownLengthArray {
	public static void main(String[] args) {
		SearchUnknownLengthArray sla = new SearchUnknownLengthArray();
		int[] input = { 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 5, 6, 7, 8, 9,
				9, 9, 9};
		int search = 4;
		System.out.println(sla.findElement(input, search));
	}
	
	/**
	 * Algorithm: ardendertat.com
	 * http://www.ardendertat.com/2011/11/21/programming-interview-questions-17-search-unknown-length-array/
	 */

	public int findElement(int[] input, int search) {
		int index = 1;
		try {
			if (input[0] == search) {
				return 0;
			}
			while (index < Integer.MAX_VALUE) {
				if (input[index] == search)
					return index;
				else if (input[index] > search) {
					return findBetween(input, search, index);
				}
				index = (int) Math.pow(2, index);
			}
		} catch (Exception e) {
			return -1;
		}
		return -1;
	}

	public int findBetween(int[] input, int search, int index) {
		if (input[index] < search)
			return -1;
		if (input[index] == search)
			return index;
		return findBetween(input, search, index - 1);
	}
}