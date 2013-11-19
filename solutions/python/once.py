class once:
    def __init__(self, func, times=1):
        self.times = int(times)
        self.func  = func
    def __call__(self, *args, **kwargs):
        if self.times > 0:
            self.times -= 1
            return self.func(*args, **kwargs)
