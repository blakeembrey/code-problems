#!/usr/bin/perl -w
use Data::Dumper;
my %prime_map = (
	'a' => 2,
	'b' => 3,
	'c' => 5,
	'd' => 7,
	'e' => 11,
	'f' => 13,
	'g' => 17,
	'h' => 19,
	'i' => 23,
	'j' => 29,
	'k' => 31,
	'l' => 37,
	'm' => 41,
	'n' => 43,
	'o' => 47,
	'p' => 53,
	'q' => 59,
	'r' => 61,
	's' => 67,
	't' => 71,
	'u' => 73,
	'v' => 79,
	'w' => 83,
	'x' => 89,
	'y' => 97,
	'z' => 101,
	'A' => 103,
	'B' => 107,
	'C' => 109,
	'D' => 113,
	'E' => 127,
	'F' => 131,
	'G' => 137,
	'H' => 139,
	'I' => 149,
	'J' => 151,
	'K' => 163,
	'L' => 167,
	'M' => 173,
	'N' => 179,
	'O' => 181,
	'P' => 191,
	'Q' => 193,
	'R' => 197,
	'S' => 199,
	'T' => 211,
	'U' => 223,
	'V' => 227,
	'W' => 229,
	'X' => 233,
	'Y' => 239,
	'Z' => 241
);
sub compute_checkproduct {
	(my $input_string) = @_;
	my @characters = split '', $input_string;
	my $checkproduct = 1;
	foreach $character (@characters) {
		$checkproduct *= $prime_map{$character};
	}
	$checkproduct;
}
sub detect_anagrams {
	(my $haystack, my $needle) = @_;
	my $found = 0, $needle_length = length($needle), $haystack_length = length($haystack);
	return 0 if ($haystack_length < $needle_length );
	my $needle_checkproduct = compute_checkproduct( $needle );
	for( $i = 0; $i < (length($haystack) - length($needle)); $i++ ) {
		my $haystack_slice = substr( $haystack, $i, length($needle) );
		my $haystack_slice_checkproduct = compute_checkproduct( $haystack_slice );
		$found++ if( $haystack_slice_checkproduct == $needle_checkproduct );
	}
	$found;
}
print detect_anagrams('AdnBndAndBdaBn', 'dAn');
print "\n";
print detect_anagrams('AbrAcadAbRa', 'cAda');
print "\n";
