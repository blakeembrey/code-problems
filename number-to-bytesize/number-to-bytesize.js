var prefixes = { Byte: 0, kB: 3, MB: 6, GB: 9, TB: 12, PB: 15, EB: 18 };

var numberToBytesize = function(number, precision) {
    try {
        number = parseFloat(number);
    } catch(e) {
        return number;
    }

    var target = 'Byte';
    var stop = false;
    Object.keys(prefixes).forEach(function(p) {
        if(stop)
            return;
        if( (number / Math.pow(10, prefixes[p])) >= 1 )
            target = p;
        else
            stop = true;
    });
    
    var factor = Math.pow(10, precision == null ? 2 : precision);
    var rounded = Math.round((number / Math.pow(10, prefixes[target])) * factor) / factor;
    return rounded + ' ' + target;
};
