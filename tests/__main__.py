import timeit

from fastomit.omit import Omitter

from ._native import Omitter as NativeOmitter

COUNT = 1000000
if __name__ == "__main__":
    om = Omitter(["abc", "def"])
    h = {
        "hidden": {
            "really": {
                "deep": [
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                    {"abc": "pass", "def": "abc"},
                ]
            }
        }
    }
    test = {
        "abc": "val",
        "def": "val2",
        "nest": {"another": h, "something": h},
        **h,
    }
    tc = timeit.timeit(
        "om.omit(test)",
        number=COUNT,
        globals={
            "om": om,
            "test": test,
        },
    )
    print("cython: ", tc)
    print("cython / it: ", tc / COUNT)

    om = NativeOmitter(["abc", "def"])
    pc = timeit.timeit(
        "om.omit(test)",
        number=COUNT,
        globals={
            "om": om,
            "test": test,
        },
    )
    print(
        "python: ",
        pc,
    )
    print("python / it: ", pc / COUNT)
