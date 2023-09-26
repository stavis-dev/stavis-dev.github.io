---
sidebar_label: "Лучшие практики"

author: Stavis
title: "Лучшие практики python"
description: "Лучшие практики которые лучше применять в своем коде python"
tags: ["best", "python"]

---

# Python лучшие практики

## list - списки

### Копирование списка (массива)

Через слайсы.

```py
numbers = [1, 2, 3]
copy_numbers = numbers[:]
```

### Реверсирование списка (массива)

чтобы записать список в обратном порядке достаточно использовать срез вида [::-1]  

```py
arr = [1, 2, 3, 4, 5, 6]
arr[::-1]
#[6, 5, 4, 3, 2, 1]
```

### Удаление дубликатов из списка

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

Вы еще используете `for i in range(len(array))` для доступа по индексам к данным последовательностей?  
Если это так используйте `enumerate`. Это дает тот же результат, но намного понятней.

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

## Распаковка

Без заморочек, распаковываем списки / кортежи в отдельные переменные.
```py
# Пример тупла
tpl = ('bla-bla', 1, 2, 3, 4, 'a', 'b')

# части элементов из множества
# получаем последний элемент (первые передаем в подстрочный)
*_, a, b = tpl

# a, b

# получаем первый и последний элементы
a, *_, b = tpl

# a, b

# получаем первые 2 элемента
a, b, *_ = tpl

# a, b
```

## Date

Хорошей практикой для отображения даты и времени будет придерживаться стандарта [ISO_8601](https://en.wikipedia.org/wiki/ISO_8601).  
Россия использует формат [ГОСТ ИСО 8601-2001](https://standartgost.ru/g/%D0%93%D0%9E%D0%A1%D0%A2_%D0%98%D0%A1%D0%9E_8601-2001).

> Дополнительные примеры можно посмотреть в официальной документации для модуля datetime [isoformat](https://docs.python.org/3/library/datetime.html#datetime.date.isoformat)

> Стоит заметить, что по стандарту ISO 8601 
> "пробел" между указанием даты и времени запретили правилами `ISO 8601-1:2019`  
> Теперь разделитель буква "T".

Отображение даты и времени в коде через f-строку

```py
from datetime import datetime

today = datetime.now()

# only day
print(f'{today:%Y-%m-%d}')
# 2023-01-10

# day n time
print(f'{today:%Y-%m-%dT%H:%M:%S}')
# 2023-01-10T23:06:48

# isoformat
datetime.now().replace(microsecond=0).isoformat()
# 2023-09-02T09:40:44

```

## if else

### Множественный `or`

по возможности заменяем на список

```py
name = 'Alex'
if name == 'John', or name == 'Steeve' or name == 'Bill':
    print(name)

if name in ('John', 'Steeve', 'Bill'):
    print(name)
```

### Булиевый `if`

```py
a = b = d = c = e = True
if a and b and c and d and e:
    print('All is True')

if all((a, b, c, d, e)): print('All is True')

# вариант для (хотя бы одного)
if any((a, b, c, d, e)): print('Any is True')
```

### Избыток if

```py
class User:
    def __init__(self, group: str):
        self.group = group

user = User(group="admin")

# нежелательный, хотя более понятный вариант
if user.group == "admin":
    process_admin_recuest(user, request)
elif user.group == "manager":
    process_manager_recuest(user, request)
elif user.group == "client":
    process_client_recuest(user, request)

# непонятно почему более предпочитаемый варик
group_to_process = {
    'admin': process_admin_recuest,
    'manager': process_manager_recuest,
    'client': process_client_recuest,
}
group_to_process[user.group](user, request)
```

## Множественная итерация через map

```py
# прогон x, y, z через map превращая их в инты.
x, y, z = map(int, (x, y, z))
```


## Приведение типов

### str to tuple / list

```python
sites_urls = "some.url, second.com, third.com"

if isinstance(sites_urls, str):
      sites_urls = tuple(sites_urls.split(', '))
      print(sites_urls)
```