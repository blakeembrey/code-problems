from threading import Timer
# current time in ms
import time
now = lambda: int(round(time.time() * 1000))

class throttle:
    timer = None
    last = 0
    def __init__(self, func, timeout, immediate=False):
        self.func  = func
        self.timeout = int(timeout)
        self.immediate = bool(immediate)
    def __call__(self, *args, **kwargs):
        self.args = (args, kwargs)
        if now() - (self.timeout + self.last) > 0:
            if self.immediate:
                self._exec()
            elif self.timer is None:
                self.timer = Timer(self.timeout / 1000.0, self._exec)
                self.timer.start()
    # execute the function
    def _exec(self):
        args, kwargs = self.args
        self.func(*args, **kwargs)
        self.last = now()
        self.timer = None

def throttled(timeout, immediate=False):
    """
    Decorator function that will only be called once per timeout.
    @param int timeout      frequency in miliseconds function can be called
    @param bool immediate   call function immediately otherwise call after timeout 
    """
    return lambda func: throttle(func, timeout, immediate)
