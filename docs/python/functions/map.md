---
sidebar_label: "Функция map()"

title: "Функция map() в python"
author: stavis
description: "Функция map в питоне"
tags: ["functions", "map"]

---

# Функция map

Функция map применяет функцию к каждому элементу последовательности и
возвращает итератор с результатами.

Например, с помощью map можно выполнять преобразования элементов.
Перевести все строки в верхний регистр:

```python
list_of_words = ['one', 'two', 'list', '', 'dict']

map(str.upper, list_of_words)
# <map at 0xb45eb7ec>

list(map(str.upper, list_of_words))
# ['ONE', 'TWO', 'LIST', '', 'DICT']
```

:::note

`str.upper("aaa")` делает то же самое что `"aaa".upper()`.

:::

## Конвертация в числа:

```python
list_of_str = ['1', '2', '5', '10']

list(map(int, list_of_str))
# [1, 2, 5, 10]
```

Вместе с map удобно использовать лямбда-выражения:

```python
vlans = [100, 110, 150, 200, 201, 202]

list(map(lambda x: 'vlan {}'.format(x), vlans))
# ['vlan 100', 'vlan 110', 'vlan 150', 'vlan 200', 'vlan 201', 'vlan 202']
```

Если функция, которую использует map(), ожидает два аргумента, то
передаются два списка:

```python
nums = [1, 2, 3, 4, 5]
nums2 = [100, 200, 300, 400, 500]

list(map(lambda x, y: x*y, nums, nums2))
# [100, 400, 900, 1600, 2500]
```

## List comprehension вместо map

Как правило, вместо map можно использовать [list comprehension](../types/x_comprehensions.md). Чаще
всего, вариант с `list comprehension` более понятный, а в некоторых
случаях даже быстрее.

[Ответ](https://stackoverflow.com/a/1247490) Alex Martelli со сравнением map и list comprehension

Но map может быть эффективней в том случае, когда надо сгенерировать
большое количество элементов, так как map - итератор, а list
comprehension генерирует список.

Примеры, аналогичные приведенным выше, в варианте с list comprehension.

Перевести все строки в верхний регистр:

```python
list_of_words = ['one', 'two', 'list', '', 'dict']
uppers = [word.upper() for word in list_of_words]

# ['ONE', 'TWO', 'LIST', '', 'DICT']
```

## Конвертация в числа:

```python
list_of_str = ['1', '2', '5', '10']

nums = [int(i) for i in list_of_str]

# [1, 2, 5, 10]
```

Форматирование строк:

```python
vlans = [100, 110, 150, 200, 201, 202]

lc = [f'vlan {x}' for x in vlans]
# ['vlan 100', 'vlan 110', 'vlan 150', 'vlan 200', 'vlan 201', 'vlan 202']
```

Для получения пар элементов используется zip:

```python
nums = [1, 2, 3, 4, 5]
nums2 = [100, 200, 300, 400, 500]

lc = [x * y for x, y in zip(nums, nums2)]
# [100, 400, 900, 1600, 2500]
```
