package main

import (
  "fmt"
  "strings"
)

func longest(sentence string) string {
  longest := ""
  words := make([]string, 0)
  words = strings.Split(sentence, " ")

  for _, word := range words {
    if len(longest) < len(word) {
      longest = word
    }
  }

  return longest;
}

func main() {
  fmt.Println(longest("You are just an old antidisestablishmentarian"))
}