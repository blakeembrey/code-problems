public class ReverseWordsInAString {
    public static void main(String[] args) {
        String input = "Interviews are awesome!";
        System.out.println("In: " + input);

        String output = reverseWords(input);
        System.out.println("Out: " + output);
    }

    private static String reverseWords(String input) {
        String[] split = input.split("\\s");
        String output = "";
        for (int i = split.length - 1; i >= 0; i--) {
            output += split[i];
            output += " ";
        }
        return output;
    }
}
