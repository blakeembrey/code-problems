public class RemoveDuplicatesFromString {
	public static void main(String[] args) {
		RemoveDuplicatesFromString rsd = new RemoveDuplicatesFromString();
		String input = "Tree Traversal";
		System.out.println(rsd.getUniqueString(input));
	}

	public String getUniqueString(String input) {
		boolean[] isUsed = new boolean[256];
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < input.length(); i++) {
			int position = input.charAt(i);
			if (!isUsed[position]) {
				sb.append(input.charAt(i));
				isUsed[position] = true;
			}
		}
		return sb.toString();
	}
}