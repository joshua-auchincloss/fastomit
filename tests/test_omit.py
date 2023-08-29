from fastomit.omit import TrustOmitter, always_omit, globally_hidden, reset_omissions


def test_omitter():
    om = TrustOmitter(["abc", "pw"])

    test = {"abc": "val", "pw": "val2", "ok": True, "val": "v2"}
    assert om.omit(test) == {"abc": "***", "pw": "****", "ok": True, "val": "v2"}


def test_nested_omissions():
    om = TrustOmitter(["abc", "pw"])

    test = {
        "abc": "val",
        "pw": "val2",
        "nest": {"something": {"hidden": {"really": {"deep": [{"abc": "pass", "pw": "abc"}]}}}},
    }
    assert om.omit(test) == {
        "abc": "***",
        "pw": "****",
        "nest": {"something": {"hidden": {"really": {"deep": [{"abc": "****", "pw": "***"}]}}}},
    }


def test_global_omissions():
    always_omit(["abc", "def"])

    assert sorted(globally_hidden()) == sorted(["abc", "def"])
    om = TrustOmitter()

    test = {"abc": "v1", "def": "value", "deg": "nohide"}

    assert om.omit(test) == {"abc": "**", "def": "*****", "deg": "nohide"}

    om.extend(["deg"])
    assert om.omit(test) == {"abc": "**", "def": "*****", "deg": "******"}

    reset_omissions()

    om = TrustOmitter()

    assert om.omit(test) == test
    assert globally_hidden() == []


def test_listed_nestings():
    om = TrustOmitter(["abc"])

    test = {"test": {"nest": [{"somelist": {"abc": ["123", "456", "789"]}}]}}

    assert om.omit(test) == {"test": {"nest": [{"somelist": {"abc": ["***", "***", "***"]}}]}}
