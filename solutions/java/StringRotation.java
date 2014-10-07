public class StringRotation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StringRotation sr = new StringRotation();
		System.out.println(sr.isRotation("ABCD", "BCDA"));
	}

	public boolean isRotation(String one, String two) {
		/**
		 * This code checks if one is a rotation of two The way it works is -
		 * concatenate the original string with itself, and check if the rotated
		 * string is contained in it. For example : ABCD is contained in BCDABCDA
		 */
		return (two + two).contains(one);
	}
}
