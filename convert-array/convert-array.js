function convertArray(arr) {
    return arr.sort(function (a,b) {
        return a === b ? 0 : 
            a.charAt(0) <= b.charAt(0) && a.charAt(1) <= b.charAt(1) ? -1 : 1;
    });
};
