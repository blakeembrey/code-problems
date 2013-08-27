module.exports = function (fn, delay, execAsap) {
  var timeout; // Keep a reference to the timeout outside the function

  return function () {
    // Keep the functions execution context and arguments in tact
    var that = this,
        args = arguments;

    // If we already have a function ready to execute, clear it
    // Else if we are allowed to execute immediately, call the function
    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      fn.apply(that, args);
    }

    timeout = setTimeout(function () {
      execAsap || fn.apply(that, args);
      timeout = null;
    }, delay || 100);
  };
};
