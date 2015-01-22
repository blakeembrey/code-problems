var suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

module.exports = function (value, precision) {
  var factor = Math.pow(10, precision != null ? precision : 2);

  var suffix = Math.min(
    ~~(Math.log(value) / Math.log(1024)), suffixes.length - 1
  );

  var num = Math.ceil(value / Math.pow(1024, suffix) * factor) / factor;

  return num + ' ' + suffixes[suffix];
};
