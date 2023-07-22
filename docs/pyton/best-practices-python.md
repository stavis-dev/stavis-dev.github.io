---
author: Stavis
title: "Лучшие прктики python"
description: "Лучшиие практики применения в python"
tags: ["best", "python"]

---

# Python лучшие практики

## Удаление дубликатов из списка

Если расположение элементов имеет значение
Самый простой и понятный метод:

```py
list(dict.fromkeys(seq))
```

Самый быстрый метод, чуть сложней для понимания:

```py
def uniq_nums(seq):
    uniq = set()
    uniq_add = uniq.add
    return [item for item in seq if not item in uniq and not uniq_add(item)]
```

В случае когда не важно в каком порядке вернуться элементы:

```py
list(set(seq))
```

