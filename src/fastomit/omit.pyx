# distutils: language=c++

cdef list __global_omissions__ = []
cdef str AST = "*"


cpdef str hide(str target):
    cdef Py_ssize_t l
    l = len(target)
    return AST * l

cpdef list globally_hidden():
    return __global_omissions__

cpdef void always_omit(list targets):
    global __global_omissions__
    __global_omissions__.extend(targets)

cpdef void reset_always():
    global __global_omissions__
    __global_omissions__ = []

cdef class Omitter:
    omissions: list

    def __init__(self,  omissions: list = None):
        if omissions is None:
            omissions = __global_omissions__
        self.omissions = [*omissions, *__global_omissions__]

    cpdef dict omit(self, dict target):
        cdef bint do
        for key, value in target.items():
            if isinstance(value, (bool,int,float,complex)):
                continue
            elif isinstance(value, str):
                do = key in self.omissions
                if do:
                    target[key] = hide(value)
            elif isinstance(value, dict):
                target[key] = self.omit(value)
            elif isinstance(value, list):
                do = key in self.omissions
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