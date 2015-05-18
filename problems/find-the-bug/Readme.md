# Find The Bug

You are given an implementation of a function:<br/>
```java
class Solution { public boolean solution(int[] A, int K); }
```

This function, given a non-empty zero-indexed array A of N integers (sorted in non-decreasing order) and integer K, checks whether A contains numbers 1, 2, ..., K (every number from 1 to K at least once) and no other numbers. For example, given the following array A, and K = 3:

```
A[0] = 1
A[1] = 1
A[2] = 2
A[3] = 3
A[4] = 3
```

The function should return `true`.

For the following array A, and K = 2:
```
A[0] = 1
A[1] = 1
A[2] = 3
```

the function should return `false`.
Unfortunately, despite the fact that the function may return expected result for the example input, there is a bug in the implementation, which may produce incorrect results for other inputs. Find the bug and correct it. You should modify at most two lines of code.

Assume that:
- N and K are integers within the range [1..300,000];
- each element of array A is an integer within the range [0..1,000,000,000];
- array A is sorted in non-decreasing order.

Complexity:
- expected worst-case time complexity is O(N);
- expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.

**Solution:** https://github.com/AntonioRedondo/CodingInterviewProblems/blob/master/src/FindTheBug.java