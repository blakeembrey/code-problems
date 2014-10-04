public class NextHighestNumber {
	/***
	 * Convert int into character array. Starting from the end, compare each
	 * number with all numbers before it, one at a time. At any moment we find a
	 * number greater than any of its previous numbers, we swap them, and return
	 * the converted int.
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		NextHighestNumber nhn = new NextHighestNumber();
		Integer next = nhn.getNextHighestNumber(32233);
		if (next != null)
			System.out.println(next);
	}

	public Integer getNextHighestNumber(int n) {
		String sNumber = String.valueOf(n);
		char[] nums = sNumber.toCharArray();
		for (int i = nums.length - 1; i > 0; i--) {
			for (int j = i - 1; j >= 0; j--)
				if (Integer.valueOf(nums[i]) > Integer.valueOf(nums[j])) {
					char t = nums[i];
					nums[i] = nums[j];
					nums[j] = t;
					return Integer.valueOf(new String(nums));
				}
		}
		return null;
	}
}
