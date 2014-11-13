package main

import (
  "fmt"
)

func findMultiples() int {
  sum := 0;
  for i := 0; i < 1000; i++ {
    if i % 3 == 0 || i % 5 == 0 {
      sum += i
    }
  }
  return sum

}

func main() {
  fmt.Println(findMultiples())
}