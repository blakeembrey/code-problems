var toFraction = function (number) {
  // Split the number by the decimal. Set the numerator to the decimal number
  // (or zero if there is no decimal). Set the denominator to ten to the power
  // of the decimal places or zero (which results in 1).
  var splitNum    = ('' + number).split('.'),
      numerator   = +splitNum[1] || 0,
      denominator = Math.pow(10, splitNum[1] && splitNum[1].length || 0),
      // Store the testing numerator and denominator so we don't need to do extra calculations
      numeratorTemp,
      denominatorTemp;

  // Check that both the numerator and denominator can be divided by 2
  while ((numeratorTemp = numerator / 2) % 1 === 0 && (denominatorTemp = denominator / 2) % 1 === 0) {
    numerator   = numeratorTemp;
    denominator = denominatorTemp;
  }

  // Check that both the numerator and denominator can be divided by 5
  while ((numeratorTemp = numerator / 5) % 1 === 0 && (denominatorTemp = denominator / 5) % 1 === 0) {
    numerator   = numeratorTemp;
    denominator = denominatorTemp;
  }

  // Add on the whole numbers by multiplying the whole number by the denominator
  numerator += +splitNum[0] * denominator;

  // Output the faction as a string
  return numerator + '/' + denominator;
};
