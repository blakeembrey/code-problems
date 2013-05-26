# Anagram Detection

*Solutions will be evaluated based on correctness, clarity, efficiency and best practices.*

*You should use keyboard input and console output in all cases but parameter passing to functions are also acceptable. The input and output cases shown are for testing purposes only, and are not an accurate representation of the test data.*

You are given two strings, a ‘parent’ string and a ‘query’ string respectively. Your task is to determine how many times the query string – *or an anagram of the query string* – appears in the parent string.

NOTE: There are a range of solutions to this problem. With a little thought, you can massively improve the efficiency of your solution. The optimal solution runs almost instantly even for extremely large (1 million+ characters) parent and query strings.

**Input 1**

```
AdnBndAndBdaBn
dAn
```

**Output 1**

```
4
```

**Explanation 1**

The substrings are highlighted below.

```
**Adn**BndAndBdaBn
AdnB**ndA**ndBdaBn
AdnBn**dAn**dBdaBn
AdnBnd**And**BdaBn
```

**Input 2**

```
AbrAcadAbRa
cAda
```

**Output 2**

```
2
```

## Solution

```
cat input-1.txt | node index.js
cat input-2.txt | node index.js
```
