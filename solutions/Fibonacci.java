// program to print the fibonacci series
import java.util.Scanner;

public class Fibonacci {
	// computes and displays the value at nth position using dynamic programming
	static void printSeries(int n) {
		long first = 0,second = 1,third = 0;
		
		for (int i = 2 ; i < n ; i++) {
			third = first + second;
			first = second;
			second = third;
		}		
		System.out.print("The number at position " +n+" of the fibonacci series is: "  +third);
	}
	
	public static void main (String[] a) {
		Scanner in = new Scanner(System.in);
		System.out.print("Enter the position of the element to displayed in the fibonacci series: ");
		int n = in.nextInt();
		System.out.println();
		printSeries(n);
		in.close();
	}
}

