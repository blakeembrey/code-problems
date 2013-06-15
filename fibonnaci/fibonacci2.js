// Better Fibonacci, less computing required. Better O(n)
// @index = number spot in array starting at 1
// @n = what number in the fibonacci sequence you want to go to
// by position, not index of array 
//	i.e. positions start at 1
var fibonnaci = function( n ) {
	var results = [0, 1];

	if( n > 2 ) {
		for( var i = 2; i < n; i++ ){
			results[ i ] = results[ i - 2 ] + results[ i - 1 ];
		}
	}
	return results[n - 1];
};