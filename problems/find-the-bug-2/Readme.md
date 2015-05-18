# Find The Bug 2

A non-empty zero-indexed array A consisting of N integers and sorted in a non-decreasing order is given. The leader of this array is the value that occurs in more than half of the elements of A.

You are given an implementation of a function:
```java
class Solution { public int solution(int[] A); }
```

that, given a non-empty zero-indexed array A consisting of N integers, sorted in a non-decreasing order, returns the leader of array A. The function should return -1 if array A does not contain a leader.

For example, given array A consisting of ten elements such that:
```
A[0] = 2
A[1] = 2
A[2] = 2
A[3] = 2
A[4] = 2
A[5] = 3
A[6] = 4
A[7] = 4
A[8] = 4
A[9] = 6
```

the function should return `-1`, because the value that occurs most frequently in the array, 2, occurs five times, and 5 is not more than half of 10.

Given array A consisting of five elements such that:
```
A[0] = 1
A[1] = 1
A[2] = 1
A[3] = 1
A[4] = 50
```

the function should return `1`.

Unfortunately, despite the fact that the function may return expected result for the example input, there is a bug in the implementation, which may produce incorrect results for other inputs. Find the bug and correct it. You should modify at most three lines of code.

Assume that:
- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [0..2147483647];
- array A is sorted in non-decreasing order.

Complexity:
- expected worst-case time complexity is O(N);
- expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.

**Solution:** https://github.com/AntonioRedondo/CodingInterviewProblems/blob/master/src/FindTheBug2.java