# Time Confusion

*Solutions will be evaluated based on correctness, clarity, efficiency and best practices.*

*You should use keyboard input and console output in all cases but parameter passing to functions are also acceptable. The input and output cases shown are for testing purposes only, and are not an accurate representation of the test data.*

There are three watches, each giving a different time. One watch is x minutes behind the actual time. One watch is x minutes ahead of the actual time. From the time displayed on each watch, determine the actual time. If it is not possible, print "Look at the sun".

**Input:**

The input begins with an integer T indicating the number of cases.

Each of the following T lines contains one test case, made up of three readings, separated by single space characters: H1:M1 H2:M2 H3:M3

In each reading H1,H2,H3 represent the hours displayed (0 < H1,H2,H3 < 13), and M1,M2,M3 represent the minutes displayed (0 < M1,M2,M3 < 60). If the number of minutes is than 10, a leading 0 is prepended.

**Input 1:**

```
3
5:00 12:00 10:00
11:59 12:30 1:01
12:00 4:00 8:00
```

**Output 1:**

```
The correct time is 5:00.
The correct time is 12:30.
Look at the sun.
```

## Solution

```
cat input-1.txt | node index.js
```
