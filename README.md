# fastomit

[![PyPI - Version](https://img.shields.io/pypi/v/fastomit.svg)](https://pypi.org/project/fastomit)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/fastomit.svg)](https://pypi.org/project/fastomit)

---

Fast k-v omission

**Table of Contents**

- [Installation](#installation)
- [License](#license)
- [Benchmarks](https://joshua-auchincloss.github.io/fastomit/dev/bench/)

## Installation

```console
pip install fastomit
```

## Usage

### Trust Omitter

```py
from fastomit.omit import Omitter, always_omit, globally_hidden, hide, reset_omissions

# always omit keys abc and pw
om = Omitter(["abc", "pw"])
my_dict = {"abc": "val", "pw": "val2", "ok": True, "val": "v2"}
assert om.omit(my_dict) == {"abc": "***", "pw": "****", "ok": True, "val": "v2"}

# always omit keys abc and def
always_omit(["abc", "def"])
om = Omitter()
my_dict = {"abc": "v1", "def": "value", "deg": "nohide"}
assert om.omit(my_dict) == {"abc": "**", "def": "*****", "deg": "nohide"}

# no global omissions
reset_omissions()

om = Omitter()

assert om.omit(my_dict) == my_dict
```

### No-Trust Omitter

```py
from fastomit.omit import NoTrustOmitter, always_trust, globally_trusted, reset_trusted

# omits anything but these keys
om = NoTrustOmitter(["abc", "pw"])

my_dict = {"abc": "val", "pw": "val2", "ok": True, "val": "v2"}
assert om.omit(my_dict) == {"abc": "val", "pw": "val2", "val": "**"}

# trust keys abc and def
always_trust(["abc", "def"])
om = NoTrustOmitter([])
my_dict = {"abc": "v1", "def": "value", "deg": "hide"}
assert om.omit(my_dict) == {"abc": "v1", "def": "value", "deg": "****"}

# trust nothing
reset_trusted()

om = NoTrustOmitter()

assert om.omit(my_dict) == {"abc": "**", "def": "*****", "deg": "****"}
assert globally_trusted() == []

```

## License

`fastomit` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.
