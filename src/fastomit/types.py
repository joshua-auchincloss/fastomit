from sys import version_info

vmaj = (version_info[0], version_info[1])


if vmaj >= (3, 10):
    ListStr = list[str]
    pass
else:
    from typing import List

    ListStr = List[str]
