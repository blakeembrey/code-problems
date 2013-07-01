import java.util.ArrayList;
import java.util.List;

public class RemoveDuplicatesFromString {

    public static void main(String[] args) {
        String input = "tree traversal";
        System.out.println("In: " + input);

        String result = removeDuplicates(input);

        System.out.println("Out: " + result);
    }

    private static String removeDuplicates(String s) {
        char[] chars = s.toCharArray();
        List<Character> uniques = new ArrayList<Character>();
        for (char c : chars) {
            if (uniques.contains(c)) {
                continue;
            }
            uniques.add(c);
        }
        StringBuilder output = new StringBuilder();
        for (char c : uniques) {
            output.append(c);
        }
        return output.toString();
    }

}
