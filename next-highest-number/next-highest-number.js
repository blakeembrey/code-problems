module.exports = function (number) {
    var numberString = ('' + number),
        length = numberString.length - 1,
        l = length,
        nextHighest;

    nextHighest = function (string, value) {
        string = string.split('').sort();
        for (var i = 0; i < string.length; ++i) {
            if (string[i] > value) {
                var result = string[i];
                string.splice(i, 1);
                // return the next highest digist and the sorted string
                // without this digist
                return {
                    value: result,
                    rest: string.join("")
                };
            }
        }
    };

    // Loop from the current right index to the left index
    while (l--) {
        // Once the character on the left is smaller than the current right
        // position this will be our swap index
        if (numberString.charAt(l) < numberString.charAt(l + 1)) {
            // Find next highest digist on the right side of the
            // swap index
            var nextHighest = nextHighest(numberString.substr(l, length), numberString.charAt(l));
            return numberString.substr(0, l) + nextHighest.value + nextHighest.rest;
        }
    }

    return number;
};
