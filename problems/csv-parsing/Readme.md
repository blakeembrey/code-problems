# CSV Parsing

Write a function that accepts a string as it's only argument. The string consists of comma-separated values and all values are either an integer or a string. Return an array of the parsed input string.

```js
f('2,6,3,2,5') // [ 2, 6, 3, 2, 5 ]

f('"pears","apples","walnuts","grapes","cheese,cake"') // [ "pears", "apples", "walnuts", "grapes", "cheese,cake" ]

f('1,"Que?","Kay?",2,"Si.","Sea? Kay, sea?","No, no, no. Que... ‘what’.",234,"Kay Watt?","Si, que ‘what’.","C.K. Watt?",3,"Yes!","comma,comma, comma , :)"') // [ 1, "Que?", "Kay?", 2, "Si.", "Sea? Kay, sea?", "No, no, no. Que... ‘what’." 234, "Kay Watt?", "Si, que ‘what’.", "C.K. Watt?", 3, "Yes!", "comma,comma, comma , :)" ]
```
