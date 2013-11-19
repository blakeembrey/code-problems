import java.util.Arrays;

public class Spiral {
	
	  private enum Direction { 
	      UP, DOWN, LEFT, RIGHT 
	  }

	  private boolean isCoordinateValid(int height, int width, int row, int column) {
	      return (row > 0 && row <= height) && (column > 0 && column <= width);
	  }

	  private int getNumberAtCoordinate(int width, int row, int column) {
	      return column + (row - 1) * width; 
	  }

	  private int[] getNextCoordinate(int row, int column, Direction currentDirection) {
	      int[] nextCoordinate = new int[2];
	      nextCoordinate[0] = row;
	      nextCoordinate[1] = column;
	      switch (currentDirection) {
	          case UP: 
	              nextCoordinate[0] -= 1; 
	              break;
	          case LEFT: 
	              nextCoordinate[1] -= 1;
	              break;
	          case DOWN: 
	              nextCoordinate[0] += 1;
	              break;
	          case RIGHT:
	              nextCoordinate[1] += 1;
	              break;
	      }
	      return nextCoordinate;
	  } 

	  private Direction getNextDirection(Direction currentDirection) {
	      switch (currentDirection) {
	        case UP:
	            return Direction.LEFT;
	        case LEFT:
	            return Direction.DOWN;
	        case DOWN:
	            return Direction.RIGHT;
	        case RIGHT:
	            return Direction.UP;
	        default:
	            return currentDirection;
	      }
	  }

	  public int[] spiral(int height, int width, int row, int column) {
	      int numberOfElements = height * width;
	      int[] output = new int[numberOfElements]; 
	      int outputIndex = 0;
	      Direction currentDirection = Direction.UP;
	      int stepsTaken = 0;
	      int stepsNeeded = 1;
	      while (outputIndex < numberOfElements) {
	          if (isCoordinateValid(height, width, row, column)) {
	              output[outputIndex++] = getNumberAtCoordinate(width, row, column);
	          }
	          int[] nextCoordinate = getNextCoordinate(row, column, currentDirection);
	          row = nextCoordinate[0];
	          column = nextCoordinate[1];
	          ++stepsTaken;
	          if (stepsTaken == stepsNeeded) {
	              if (currentDirection == Direction.LEFT || currentDirection == Direction.RIGHT) {
	                  ++stepsNeeded;
	              }
	              stepsTaken = 0;
	        	  currentDirection = getNextDirection(currentDirection);
	          }
	      } 
	      return output;
	  }	
	  
	  public static void main(String[] args) {
		  Spiral s = new Spiral();
		  System.out.println(Arrays.toString(s.spiral(5, 5, 3, 3)));
		  System.out.println(Arrays.toString(s.spiral(2, 4, 1, 2)));
		  
	  }
}
