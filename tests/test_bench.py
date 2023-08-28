import random
import string
from os import environ

import pytest  # noqa: F401
from hatch.utils.ci import running_in_ci
from pytest_benchmark.fixture import BenchmarkFixture

from fastomit.omit import Omitter

from ._native import Omitter as NativeOmitter

HIDE = {"abc": "pass", "def": "abc"}
FAST = environ.get("EXHAUSTIVE") is None


def get_random(le: int):
    return "".join(random.choice(string.ascii_letters) for x in range(le))  # noqa: S311


def long_random(k: int = 5, v: int = 15):
    return {get_random(k): get_random(v) for _ in range(15)}


def get_shallow():
    return {
        **HIDE,
        "ok": "value",
    }


def get_nesting():
    return {
        "shallow": get_shallow(),
        "list": [
            get_shallow(),
            HIDE,
        ],
        "something": long_random(),
        "something_mid": long_random(),
    }


def get_deep_nested():
    h = {
        "hidden": {
            "really": {
                "deep": [
                    long_random(15, 15),
                    HIDE,
                    HIDE,
                    HIDE,
                    HIDE,
                    long_random(15, 15),
                    HIDE,
                    HIDE,
                ]
            },
            "more": {
                "deep": [
                    HIDE,
                    HIDE,
                    long_random(15, 15),
                    HIDE,
                    HIDE,
                    long_random(15, 15),
                    HIDE,
                    HIDE,
                ]
            },
        }
    }
    test = {
        "abc": "val",
        "def": "val2",
        "shallow": long_random(15, 15),
        "nest": {"another": h, "something": h},
        **h,
    }
    return test


def run_bench(benchmark: BenchmarkFixture, nested, om: Omitter):
    benchmark.pedantic(
        om.omit, args=(nested,), iterations=1000 if FAST else 1000 if running_in_ci() else 10000, rounds=15
    )


def create_runner(cls, getter):
    def runner(benchmark: BenchmarkFixture):
        om = cls(["abc", "def"])
        nested = getter()
        run_bench(benchmark, nested, om)

    return runner


test_b_shallow_cext = create_runner(Omitter, get_shallow)
test_b_shallow_native = create_runner(NativeOmitter, get_shallow)


test_b_nesting_cext = create_runner(Omitter, get_nesting)
test_b_nesting_native = create_runner(NativeOmitter, get_nesting)


test_b_long_nested_cext = create_runner(Omitter, get_deep_nested)
test_b_long_nested_native = create_runner(NativeOmitter, get_deep_nested)
