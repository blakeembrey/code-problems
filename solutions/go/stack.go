package main

import (
  "errors"
  "fmt"
  "log"
  "sync"
)

type Stack struct {
  lock  sync.Mutex // concurrency-safe stack
  stack []int
}

func New() *Stack {
  return &Stack{
    lock:  sync.Mutex{},
    stack: make([]int, 0),
  }
}

func (s *Stack) Push(n int) {
  s.lock.Lock()
  defer s.lock.Unlock()
  s.stack = append(s.stack, n)
  fmt.Printf("pushed %v to the stack \n", n)
}

func (s *Stack) Pop() (int, error) {
  s.lock.Lock()
  defer s.lock.Unlock()

  length := len(s.stack)
  if length == 0 {
    err := errors.New("stack is empty")
    return 0, err
  }

  // extract the last item in stack
  last := s.stack[length - 1]

  // remove the last item in stack
  s.stack = s.stack[:length - 1]

  fmt.Printf("removed %v from the stack \n", last)
  return last, nil
}

func main() {
  stack := New()
  wg := sync.WaitGroup{}
  concurrency := 3

  // concurrently push values to the stack
  wg.Add(concurrency)
  for i := 0; i < concurrency; i++ {
    go func(n int) {
      stack.Push(n + 10)
      wg.Done()
    }(i)
  }

  // sequentially pop value off the stack
  wg.Wait()
  for j := 0; j < 3; j++ {
    _, err := stack.Pop()
    if err != nil {
      log.Fatal(err)
    }
  }
}
