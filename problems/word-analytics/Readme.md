# Word Analytics

You're a newly hired engineer for a brand-new company that's building a "killer Word-like application". You've been specifically assigned to implement a tool that gives the user some details on common word usage, letter usage, and some other analytics for a given document! More specifically, you must read a given text file (no special formatting, just a plain ASCII text file) and print off the following details:

1. Number of words
2. Number of letters
3. Number of symbols (any non-letter and non-digit character, excluding white spaces)
4. Top three most common words (you may count "small words", such as "it" or "the")
5. Top three most common letters
6. Most common first word of a paragraph (paragraph being defined as a block of text with an empty line above it) (Optional bonus)
7. Number of words only used once (Optional bonus)
8. All letters not used in the document (Optional bonus)

Please note that your tool does not have to be case sensitive, meaning the word "Hello" is the same as "hello" and "HELLO".

*Author: nint22*

## Formal Inputs & Outputs

### Input Description

As an argument to your program on the command line, you will be given a text file location (such as "C:\Users\nint22\Document.txt" on Windows or "/Users/nint22/Document.txt" on any other sane file system). This file may be empty, but will be guaranteed well-formed (all valid ASCII characters). You can assume that line endings will follow the UNIX-style new-line ending (unlike the Windows carriage-return & new-line format ).

### Output Description

For each analytic feature, you must print the results in a special string format. Simply you will print off 6 to 8 sentences with the following format:

```
"A words", where A is the number of words in the given document
"B letters", where B is the number of letters in the given document
"C symbols", where C is the number of non-letter and non-digit character, excluding white spaces, in the document
"Top three most common words: D, E, F", where D, E, and F are the top three most common words
"Top three most common letters: G, H, I", where G, H, and I are the top three most common letters
"J is the most common first word of all paragraphs", where J is the most common word at the start of all paragraphs in the document (paragraph being defined as a block of text with an empty line above it) (*Optional bonus*)
"Words only used once: K", where K is a comma-delimited list of all words only used once (*Optional bonus*)
"Letters not used in the document: L", where L is a comma-delimited list of all alphabetic characters not in the document (*Optional bonus*)
```

If there are certain lines that have no answers (such as the situation in which a given document has no paragraph structures), simply do not print that line of text. In this example, I've just generated some random Lorem Ipsum text.

## Testing

```
cat huckleberry-finn.txt | node index.js
```

## Source

[http://www.reddit.com/r/dailyprogrammer/comments/1e97ob/051313_challenge_125_easy_word_analytics/](http://www.reddit.com/r/dailyprogrammer/comments/1e97ob/051313_challenge_125_easy_word_analytics/)
