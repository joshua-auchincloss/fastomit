from fastomit.omit import NoTrustOmitter, always_trust, globally_trusted, reset_trusted


def test_notrust():
    om = NoTrustOmitter(["abc", "pw"])

    test = {"abc": "val", "pw": "val2", "val": "v2"}
    assert om.omit(test) == {"abc": "val", "pw": "val2", "val": "**"}


def test_nested_notrust():
    om = NoTrustOmitter(["abc", "pw"])

    test = {
        "abc": "val",
        "pw": "val2",
        "dont": "show",
        "nest": {
            "something": {
                "hidden": {
                    "really": {
                        "deep": [
                            {
                                "abc": "pass",
                                "pw": "abc",
                                "dont": "show",
                            }
                        ]
                    }
                }
            }
        },
    }
    assert om.omit(test) == {
        "abc": "val",
        "pw": "val2",
        "dont": "****",
        "nest": {
            "something": {
                "hidden": {
                    "really": {
                        "deep": [
                            {
                                "abc": "pass",
                                "pw": "abc",
                                "dont": "****",
                            }
                        ]
                    }
                }
            }
        },
    }


def test_global_trustings():
    always_trust(["abc", "def"])

    assert globally_trusted() == ["abc", "def"]
    om = NoTrustOmitter()

    test = {"abc": "v1", "def": "value", "deg": "hide"}

    assert om.omit(test) == {"abc": "v1", "def": "value", "deg": "****"}

    reset_trusted()

    om = NoTrustOmitter()

    assert om.omit(test) == test
    assert globally_trusted() == []
