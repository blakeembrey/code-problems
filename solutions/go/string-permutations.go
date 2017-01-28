package main

import (
	"fmt"
	"sort"
)

/****************************************************************************
Generates permutations of sortable sequence changing it in place.
****************************************************************************/

// PermutationsIter returns a closure, each call to the returned function
// generates the next permutations of the sequence (changing it in place).
// Uses Non-recursive lexicographic order (Knuth's L-Algorithm), thus
// the sequence passed as argument must be sortable.
func PermutationsIter(a sort.Interface) func() bool {
	current := int64(0)
	n := a.Len()
	return func() bool {
		if current == 0 {
			sort.Sort(a)
			current++
			return true
		}
		// Find largest index k such that a[k] < a[k + 1]
		k := -1
		for j := n - 2; j >= 0; j-- {
			if a.Less(j, j+1) {
				k = j
				break
			}
		}
		if k == -1 { // if k not found, all done
			return false
		}
		// Find largest index l greater than k such that a[k] < a[l]
		l := -1
		for j := n - 1; j >= k+1; j-- {
			if a.Less(k, j) {
				l = j
				break
			}
		}
		// swap a[k] <-> a[l]
		a.Swap(k, l)
		// Reverse a[k+1:n]
		for i, j := k+1, n-1; i < j; i, j = i+1, j-1 {
			a.Swap(i, j)
		}
		current++
		return true
	}
}

/*************** Create a sortable type ***************/

// MyPermSeq satisfy interface sort.Interface
type MyPermSeq []byte

// Len of the sequence
func (ps MyPermSeq) Len() int {
	return len(ps)
}

// Less implements <
func (ps MyPermSeq) Less(i, j int) bool {
	return ps[i] < ps[j]
}

// Swap in place
func (ps MyPermSeq) Swap(i, j int) {
	ps[i], ps[j] = ps[j], ps[i]
}

func main() {

	// Let's permutate ABCD in-place: output will be ordered in lexicographical order
	mySeq := MyPermSeq([]byte("ABCD"))
	next := PermutationsIter(mySeq)
	fmt.Println("Generating permutations for", string(mySeq), ": ")
	for next() {
		fmt.Print(string(mySeq), " ")
	}
	fmt.Println("")

	// Let's permutate ABBB in-place: shows algorithm handles repeated elements well
	mySeq = MyPermSeq([]byte("ABBB"))
	next = PermutationsIter(mySeq)
	fmt.Println("Generating permutations for", string(mySeq), ": ")
	for next() {
		fmt.Print(string(mySeq), " ")
	}
	fmt.Println("")

}
