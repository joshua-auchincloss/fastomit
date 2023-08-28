from sys import version_info

vmaj = (version_info[0], version_info[1])


if vmaj >= (3, 10):
    ListStr = list[str]
    bool_opt = bool | None
    pass
else:
    from typing import List, Optional

    ListStr = List[str]
    bool_opt = Optional[bool]
