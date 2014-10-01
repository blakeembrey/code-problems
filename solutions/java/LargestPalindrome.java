public class LargestPalindrome {
	public static void main(String[] args) {
		LargestPalindrome lp = new LargestPalindrome();
		String input = "I am a red racecar driver";
		System.out.println(lp.getPalindrome(input));
	}

	public String getPalindrome(String input) {
		if (input == null || input.length() == 0)
			return "";
		if (input.length() == 1)
			return input;

		String largestPalindrome = input.charAt(0) + "";
		// Run across the string
		for (int i = 1; i < input.length(); i++) {
			String curPalindrome = checkSides(input, i, i);
			if (curPalindrome.length() > largestPalindrome.length())
				largestPalindrome = curPalindrome;
		}
		return largestPalindrome;
	}

	public String checkSides(String input, int left, int right) {
		while (left >= 0 && right < input.length()
				&& input.charAt(left) == input.charAt(right)) {
			left--;
			right++;
		}
		return input.substring(left + 1, right);
	}
}