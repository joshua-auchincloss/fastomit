from fastomit.omit import Omitter, always_omit, globally_hidden, hide, reset_omissions


def test_hide():
    assert hide("str") == "***"


def test_omitter():
    om = Omitter(["abc", "pw"])

    test = {"abc": "val", "pw": "val2", "ok": True, "val": "v2"}
    assert om.omit(test) == {"abc": "***", "pw": "****", "ok": True, "val": "v2"}


def test_nested_omissions():
    om = Omitter(["abc", "pw"])

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

    assert globally_hidden() == ["abc", "def"]
    om = Omitter()

    test = {"abc": "v1", "def": "value", "deg": "nohide"}

    assert om.omit(test) == {"abc": "**", "def": "*****", "deg": "nohide"}

    reset_omissions()

    om = Omitter()

    assert om.omit(test) == test
    assert globally_hidden() == []


def test_listed_nestings():
    om = Omitter(["abc"])

    test = {"test": {"nest": [{"somelist": {"abc": ["123", "456", "789"]}}]}}

    assert om.omit(test) == {"test": {"nest": [{"somelist": {"abc": ["***", "***", "***"]}}]}}
