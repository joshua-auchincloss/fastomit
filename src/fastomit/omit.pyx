# distutils: language=c++

cdef str AST = "*"

cdef set __global_omissions__ = set()
cdef set __global_trusted__ = set()

cdef str hide(str target):
    cdef Py_ssize_t l
    l = len(target)
    return AST * l

cpdef list globally_hidden():
    return list(__global_omissions__)

cpdef void always_omit(list targets):
    global __global_omissions__
    __global_omissions__ = __global_omissions__.union(set(targets))

cpdef list globally_trusted():
    return list(__global_trusted__)

cpdef void always_trust(list targets):
    global __global_trusted__
    __global_trusted__ = __global_trusted__.union(set(targets))

cpdef void reset_omissions():
    global __global_omissions__
    __global_omissions__ = set()

cpdef void reset_trusted():
    global __global_trusted__
    __global_trusted__ = set()

cdef class _OmitterType:
    cdef set box

    cpdef void extend(self, list trusted):
        self.box = self.box.union({*trusted})

    cdef bint should_hide(self, str key):
        msg = "call from base class"
        raise NotImplementedError(msg)

    cpdef dict omit(self, dict target):
        cdef bint do
        for key, value in target.items():
            if isinstance(value, (bool,int,float,complex)):
                continue
            elif isinstance(value, str):
                do = self.should_hide(key)
                if do:
                    target[key] = hide(value)
            elif isinstance(value, dict):
                target[key] = self.omit(value)
            elif isinstance(value, list):
                do = self.should_hide(key)
                target[key] = self.omit_recurse(value, do)
        return target

    cpdef list omit_recurse(self, list target, bint do = 1):
        cdef Py_ssize_t l
        l = len(target)
        for i in range(l):
            tgt = target[i]
            if isinstance(tgt, dict):
                target[i] = self.omit(tgt)
            elif isinstance(tgt, list):
                target[i] = self.omit_recurse(tgt, do)
            elif do and isinstance(tgt, str):
                target[i] = hide(tgt)
        return target

cdef class TrustOmitter(_OmitterType):
    def __init__(self,  omissions: list = None):
        if omissions is None:
            omissions = []
        self.box = __global_omissions__.union({*omissions})

    @property
    def omitted(self) -> list:
        return list(self.box)

    cdef bint should_hide(self, str key):
        return key in self.box


cdef class TrustlessOmitter(_OmitterType):
    def __init__(self,  trusted: list = None):
        if trusted is None:
            trusted = []
        self.box = __global_trusted__.union({*trusted})

    @property
    def trusted(self) -> list:
        return list(self.box)

    cdef bint should_hide(self, str key):
        return key not in self.box
