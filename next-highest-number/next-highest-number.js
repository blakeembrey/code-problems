var nextHighestNumber = function (number) {
    var digits = (number + "").split(""),
        length = digits.length;

    while (length--) {
        if (digits[length] < digits[length + 1]) {
            var digitsRight = digits.slice(length + 1).sort();
            for (var i = 0; i < digitsRight.length; ++i) {
                if (digitsRight[i] > digits[length]) {
                    digits.splice(length, 0, digitsRight[i]);
                    digitsRight.splice(i, 1);
                    break;
                }
            }
            digitsRight.push(digits[length+1]);
            digits = digits.slice(0, length+1).concat(digitsRight.sort());
            return digits.join("");
        }
    }
    return number;
}
