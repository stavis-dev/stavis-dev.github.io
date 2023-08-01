---
sidebar_label: "Лучшие практики"

author: Stavis
title: "Лучшие практики python"
description: "Лучшиие практики применения в python"
tags: ["best", "python"]

---

# Python лучшие практики

## Удаление дубликатов из списка

Предположим у нас есть [list](./types/python-types-list.md)

```py
my_list = [1, 6, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4]
```

Задача вернуть список уникальных элементов.
Самый тривиальный метод, первый приходящий на ум - прогнать через [set](./types/python-types-set.md)

```py
my_list = list(set(my_list))
```
В этом случает тип `list` превратиться в `set`, в нем по определению не может быть дубликатов
потому что хеш-set. Но есть нюанс - порядок элементов будет рандомный.

Что делать если порядок элементов нужно сохранить просто удалив дубликаты?

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

## Enumerate: вместо range(len(array))

Вы еще используете `for i in range(len(array))`` для доступа по индексам к данным последовательностей?
Если это так используйте `enumerate``. Это дает тот же результат, но намного чище.

```python
arr = ['a', 'b', 'c', 'd', 'e']

# Instead of this
for i in range(len(arr)):
    print(i, arr[i])

# 0 a
# 1 b
# 2 c
# 3 d
# 4 e


# Use this
for i, val in enumerate(arr):
    print(i, val)

# 0 a
# 1 b
# 2 c
# 3 d
# 4 e
```

- обсуждение на [reddit.com](https://www.reddit.com/r/learnpython/comments/nn0il2/rangelens_vs_enumerate/) почему `enumerate` лучше.