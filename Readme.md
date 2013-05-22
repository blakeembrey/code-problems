# Code Problems

## Balanced Brackets

Given a string consisting entirely of the characters ()[]{}, determine if it is "balanced". That is, every opening bracket must have a closing bracket of the same type following it, and the string in between the pair must also be balanced. For the purposes of the problem, an empty string should be considered balanced.

```
cd balanced-brackets
node index.js
# Every new line will output a new result
()[]{}(([])){[()][]}
())[]{}
[(])
```

## CSV Parsing

The input to this problem consists of a string of n comma-separated values, each value being an integer **or a string**. The required output is n consecutive lines, where line i contains the ith value of the input.
NOTICE – string may contain commas.

```
cd csv-parsing
cat input-1.csv | node index.js
cat input-2.csv | node index.js
cat input-3.csv | node index.js
```

## Anagram Detection

You are given two strings, a ‘parent’ string and a ‘query’ string respectively. Your task is to determine how many times the query string – *or an anagram of the query string* – appears in the parent string.

```
cd anagram-detection
cat input-1.txt | node index.js
cat input-2.txt | node index.js
```

## Spiral

You are given the dimension of a *h x w* grid filled with consecutive integers from left to right, top to bottom, starting with 1.

You are also given a starting position *r c*. The output should be the ordered list of integers obtained by spiralling outward in an anti-clockwise direction from row *r* column *c*, starting upward.

```
cd spiral
cat input-1.txt | node index.js
cat input-2.txt | node index.js
```

## Time Confusion

There are three watches, each giving a different time. One watch is x minutes behind the actual time. One watch is x minutes ahead of the actual time. From the time displayed on each watch, determine the actual time. If it is not possible, print "Look at the sun".

```
cd time-confusion
cat input-1.txt | node index.js
```
