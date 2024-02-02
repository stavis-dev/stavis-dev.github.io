---
sidebar_label: 'Множества (set)'

title: "Множества (set) в python"
author: Stavis
description: "Множества в python. Работа со множествами методы set()."
tags: ["python", "programing", "types", "set", "frozenset"]

---
## Что такое множество?

Множество в python - "контейнер", содержащий не повторяющиеся элементы в случайном порядке.

Создаём множества:

```py
a = set()
# set()

a = set('hello')
# {'h', 'o', 'l', 'e'}

a = {'a', 'b', 'c', 'd'}
# {'b', 'c', 'a', 'd'}

a = {i ** 2 for i in range(10)} # генератор множеств
# {0, 1, 4, 81, 64, 9, 16, 49, 25, 36}

a = {}  # А так нельзя!
# type(a)
# <class 'dict'>
```

Множества удобно использовать для удаления повторяющихся элементов:

```py
words = ['hello', 'daddy', 'hello', 'mum']
# {'hello', 'daddy', 'mum'}
```

## Методы set()

С множествами можно выполнять множество операций: находить объединение, пересечение...

- `len(s)` - число элементов в множестве (размер множества).
- `x in s` - принадлежит ли x множеству s.
- `set.isdisjoint(other)` - истина, если set и other не имеют общих элементов.
- `set == other` - все элементы set принадлежат other, все элементы other принадлежат set.
- set.issubset(other) или set <= other - все элементы set принадлежат other.
- set.issuperset(other) или set >= other - аналогично.
- set.union(other, ...) или set | other | ... - объединение нескольких множеств.

```python
sets = {0, 1, 2, 3}
fset = frozenset({2, 3, 4})
lists = [5, 6, 7]
tuples = (7, 8, 9)

# Использование метода
new_set = sets.union(lists, tuples, fset)
# {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```

- set.intersection(other, ...) или set & other & ... - пересечение.
- set.difference(other, ...) или set - other - ... - множество из всех элементов set, не принадлежащие ни одному из other.
- set.symmetric_difference(other); set ^ other - множество из элементов, встречающихся в одном множестве, но не встречающиеся в обоих.
- set.copy() - копия множества.

И операции, непосредственно изменяющие множество:

- set.update(other, ...); set |= other | ... - объединение.
- set.intersection_update(other, ...); set &= other & ... - пересечение.
- set.difference_update(other, ...); set -= other | ... - вычитание.
- set.symmetric_difference_update(other); set ^= other - множество из элементов, встречающихся в одном множестве, но не встречающиеся в обоих.
- set.add(elem) - добавляет элемент в множество.
- set.remove(elem) - удаляет элемент из множества. KeyError, если такого элемента не существует.
- set.discard(elem) - удаляет элемент, если он находится в множестве.
- set.pop() - удаляет первый элемент из множества. Так как множества не упорядочены, нельзя точно сказать, какой элемент будет первым.
- set.clear() - очистка множества.

## Ссылки по типу даных set

- Ролик на youtube [Хеш-таблица — Самая Популярная Структура Данных](https://youtu.be/rPp46idEvnM) понятно объясняющий принцип хешей.
