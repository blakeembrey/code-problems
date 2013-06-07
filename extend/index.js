var shallowExtend = function (target /*, source */) {
  Array.prototype.slice.call(arguments, 1).forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
  });

  return target;
};

var deepExtend = function extend (target /*, source */) {
   Array.prototype.slice.call(arguments, 1).forEach(function (source) {
    var clone = function recurse (value) {
      if (Array.isArray(value)) {
        return value.map(recurse);
      }
      if (typeof value === 'object') {
        return extend({}, value);
      }
      return value;
    };

    Object.keys(source).forEach(function (key) {
      target[key] = clone(source[key]);
    });
  });

  return target;
};
