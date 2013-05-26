# CSV Parsing

*Solutions will be evaluated based on correctness, clarity, efficiency and best practices.*

*You should use keyboard input and console output in all cases but parameter passing to functions are also acceptable. The input and output cases shown are for testing purposes only, and are not an accurate representation of the test data.*

The input to this problem consists of a string of *n* comma-separated values, each value being an integer **or a string**. The required output is *n* consecutive lines, where line *i* contains the *i*th value of the input.

NOTICE – string may contain commas (See **Input 2 and 3** below).

**Input 1**

```
2,6,3,2,5
```

**Output 1**

```
2
6
3
2
5
```

**Input 2**

```
"pears","apples","walnuts","grapes","cheese,cake"
```

**Output 2**

```
"pears"
"apples"
"walnuts"
"grapes"
"cheese,cake"
```

**Input 3**

```
1,"Que?","Kay?",2,"Si.","Sea? Kay, sea?","No, no, no. Que... ‘what’.",234,"Kay Watt?","Si, que ‘what’.","C.K. Watt?",3,"Yes!","comma,comma, comma , :)"
```

**Output 3**

```
1
"Que?"
"Kay?"
2
"Si."
"Sea? Kay, sea?"
"No, no, no. Que... ‘what’." 234
"Kay Watt?"
"Si, que ‘what’."
"C.K. Watt?"
3
"Yes!"
"comma,comma, comma , :)"
```

## Solution

```
cat input-1.csv | node index.js
cat input-2.csv | node index.js
cat input-3.csv | node index.js
```
