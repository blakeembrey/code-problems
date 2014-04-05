import java.util.Arrays;

public class BubbleSort {

    public static void main(String[] args) {
        int[] array = {56, 4, -76, 1, 3, 2, -14, 4};
        System.out.println("Unsorted: " + Arrays.toString(array));
        bubbleSort(array);
        System.out.println("Sorted: " + Arrays.toString(array));
    }

    public static void bubbleSort(int[] array) {
        while (true) {
            boolean swapped = false;
            for (int i = 1; i < array.length; i++) {
                if (array[i] < array[i - 1]) {
                    swapped = true;
                    int temp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = temp;
                }
            }
            if (!swapped) break;
        }
    }

}
