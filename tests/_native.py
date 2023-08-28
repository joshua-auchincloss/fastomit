def hide(target: str):
    return "*" * len(target)


class Omitter:
    omissions: list

    def __init__(self, omissions: list):
        self.omissions = omissions

    def omit(self, target: dict):
        for key, value in target.items():
            if isinstance(value, (bool, int, float, complex)):
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

    def omit_recurse(self, target: list, do: bool = True):  # noqa: FBT001
        ln = len(target)
        for i in range(ln):
            tgt = target[i]
            if isinstance(tgt, dict):
                target[i] = self.omit(tgt)
            elif isinstance(tgt, list):
                target[i] = self.omit_recurse(tgt, do)
            elif do and isinstance(tgt, str):
                target[i] = hide(tgt)
        return target
