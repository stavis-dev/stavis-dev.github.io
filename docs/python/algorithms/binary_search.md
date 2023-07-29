---
title: "Бинарный поиск"
author: stavis
description: "Функция бинарного поиска в Питоне"
tags: ["dataclasses", "бинарный поиск"]
 
---
Бинарный поиск производится в **упорядоченном массиве**.

При бинарном поиске искомый ключ сравнивается с ключом среднего элемента в массиве. Если они равны, то поиск успешен. 
В противном случае поиск осуществляется аналогично в левой или правой частях массива.

Алгоритм может быть определен в рекурсивной и нерекурсивной формах.

Бинарный поиск также называют **поиском методом деления** отрезка пополам или дихотомии.

Количество шагов поиска определится как

`log2n`

где n-количество элементов.

Алгоритм хорошо описан в [википедии](https://ru.wikipedia.org/wiki/Двоичный_поиск), тут только правильная функция, для удобства вставки в код.

## Бинарный поиск python

```python
from typing import List

def binary_search(nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return left
```
Функция возвращает индекс искомого элемента или, если такового нет, индекс, в который следует вставить `target`
Результат работы функции:

```python
nums = [1, 3, 5, 6, 7, 9, 15, 18, 20]; target = 8

print(binary_search(nums, target))
# 5
```

## Найти квадратный корень используя бинарный поиск

Задача на [leetcode.com](https://leetcode.com/problems/sqrtx/)

Учитывая неотрицательное целое число x, верните квадратный корень из x, округленный в меньшую сторону до ближайшего целого числа. 
Возвращаемое целое число также должно быть неотрицательным.

Вы не должны использовать какую-либо встроенную функцию экспоненты или оператор.

Например, не используйте pow(x, 0.5) в c++ или x ** 0.5 в python.

Пример 1

```sh
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```
Пример 2

```sh
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

```python
def mySqrt(x: int) -> int:
    left, right = 1, x
    while left <= right:
        mid = (left + right) // 2
        if mid * mid == x:
            return mid
        if mid * mid > x:
            right = mid - 1
        else:
            left = mid + 1
    return right
```

Результат выполнения

```python
print(mySqrt(12))
# 3
```

## Links

### Leetcode

- https://leetcode.com/problems/search-insert-position/
