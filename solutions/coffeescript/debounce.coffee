module.exports = (fn, delay, execAsap) ->
  timeout = undefined # Keep a reference to the timeout outside the function
  ->
    
    # Keep the functions execution context and arguments in tact
    that = this
    args = arguments_
    
    # If we already have a function ready to execute, clear it
    # Else if we are allowed to execute immediately, call the function
    if timeout
      clearTimeout timeout
    else fn.apply that, args  if execAsap
    timeout = setTimeout(->
      execAsap or fn.apply(that, args)
      timeout = null
    , delay or 100)
