# Debounce

Write a function that accepts a function and timeout, `x`, in number of milliseconds. It will return a new function that can only be executed on per timeout period - and if the function is invoked during the timeout period, the timeout period restarts. This is useful for functions that can be need to be blocked on subsequent attempts over short period of times. Once such is example, is clicks on a button.

Once written, add a third parameter that will allow the function to be executed immediately if set to true. Otherwise the function will run at the end of the timeout period.
