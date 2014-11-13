package main

import (
  "fmt"
  "math"
)

func mergeSort(ary []int) []int {
  if len(ary) <= 1 {
    return ary
  }
  left := make([]int, 0)
  right := make([]int, 0)
  middle := math.Floor(float64(len(ary) / 2))

  left = ary[0:int(middle)]
  right = ary[int(middle):]

  return merge(mergeSort(left), mergeSort(right))
}

func merge(left, right []int) []int {

  result := make([]int, 0)

  for len(left) > 0 || len(right) > 0 {
    if len(left) > 0 && len(right) > 0 {
      if left[0] <= right[0] {
        result = append(result, left[0])
        left = left[1:len(left)]
      } else {
        result = append(result, right[0])
        right = right[1:len(right)]
      }
    } else if len(left) > 0 {
      result = append(result, left[0])
      left = left[1:len(left)]
    } else {
      result = append(result, right[0])
      right = right[1:len(right)]
    }
  }

  return result
}

func main() {
  random := []int{1,73,7,1,72,58,933,574,24,74,52}
  fmt.Println("Unsorted: ", random)
  random = mergeSort(random)
  fmt.Println("Sorted: ", random)
}