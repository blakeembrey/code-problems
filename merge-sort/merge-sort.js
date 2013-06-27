// MergeSort
// Sorts the array by breaking it down into smaller chunks.

module.exports = function(array) {
  // Not an array, empty or array of 1 is already sorted
	if(!Array.isArray(array) || array.length < 2)
		return array;

	function merge(left, right) {
		var result = [];
		while(left.length || right.length) {
			if(left.length && right.length) {
				if(left[0] < right[0]) {
					result.push(left.shift());
				} else {
					result.push(right.shift());
				}
			} else if (left.length) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}
		return result;
	}

	function MergeSort(array){
		var length = array.length,
		mid = Math.floor(length * 0.5),
		left = array.slice(0, mid),
		right = array.slice(mid, length);
		if(length === 1) {
			return array;
		}
		return merge(MergeSort(left), MergeSort(right));
	}

	return MergeSort(array);
}
