public class LongestCommonPrefix {
	public static void main(String[] args) {
		LongestCommonPrefix lcs = new LongestCommonPrefix();
		String[] input = { "rocket", "rockstar", "rockbottom", "rollingstone"};
		System.out.println(lcs.getSubstring(input));
	}

	public String getSubstring(String[] input) {
		String base = input[0];
		for (int i = 0; i < base.length(); i++) {
			for (int j = 1; j < input.length; j++) { // Run for all words
				String comparer = input[j];
				if (i >= comparer.length()
						|| comparer.charAt(i) != base.charAt(i))
					return base.substring(0, i);
			}
		}
		return "";
	}
}