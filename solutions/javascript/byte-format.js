module.exports = function (value, precision) {
  var suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var factor   = Math.pow(10, precision > 0 ? precision : 2);
  var suffix=Math.min (Math.floor(Math.log(value)/Math.log(1024)),
    suffixes.length-1);
  return (Math.round(value/Math.pow(1024,suffix) * factor)  / factor) +
  ' ' +
  suffixes[suffix];
};