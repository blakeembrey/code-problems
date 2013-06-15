/*
 * A simple string formatting function
 * e.g.: format('Hello {0} {1}', 'Mr.', 'X') => 'Hello Mr. X'
 *       format('{1}_{0}', '{1}', '{0}')     => '{0}_{1}'

var format = function(s) {
    var i = arguments.length;
    while (i--)
        s = s.replace(new RegExp('\\{' + (i-1) + '\\}', 'gm'), String(arguments[i]));
    return s;
};
