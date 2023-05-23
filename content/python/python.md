---
title: "Мануал по языку Python"
author: Stavis Vega
date: "2022-02-07"
description: "Фишечки языка Python"
tags: ["triks"]
categories: ["python"]
ShowToc: true
TocOpen: true
---

* [Stavis-dev Codewars](https://www.codewars.com/kata/556deca17c58da83c00002db/train/python)  
* [Replit Codewars](https://replit.com/@StavisViegha/CodeWars#main.py)  
* [Классы в гугл колаб](https://colab.research.google.com/drive/1vSmI7E49MBA4kA38B_MT6mgWvBKgEorC)  

* [К README файлу](README.md)

### Date

Отображение даты и времени в коде через f-строку

```py
from datetime import datetime

today = datetime.now()

# only day
print(f'{today:%Y-%m-%d}')
# 2023-01-10

# day n time
print(f'{today:%Y-%m-%d %H:%M:%S}')
# 2023-01-10 23:06:48

# old way
# today.strftime('%Y-%m-%d')
# 2013-09-18
```

### Распаковка

```py
# Пример тупла
tpl = ('bla-bla', 1, 2, 3, 4, 'a', 'b')

# части элементов из множества
# получаем последний элемент (первые передаем в подстрочный)
*_, a, b = tpl

a, b

# получаем первый и последний элементы
a, *_, b = tpl

a, b

# получаем первые 2 элемента
a, b, *_ = tpl

a, b
```

### Множественное интование через map

```py
# прогон x, y, z через map превращая их в инты.
x, y, z = map(int, (x, y, z))
```

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

### Фильтрация

```py
name = 'Alex'
if name == 'John', or name == 'Steeve' or name == 'Bill':
    print(name)

if name in ('John', 'Steeve', 'Bill'):
    print(name)
```

Булиевый `if`

```py
a = b = d = c = e = True
if a and b and c and d and e:
    print('All is True')

if all((a, b, c, d, e)): print('All is True')

# вариант для (хотя бы одного)
if any((a, b, c, d, e)): print('Any is True')
```

## Решения для многочисленных ифов

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

## Приведение типов

### str to tuple / list

```python
sites_urls = "some.url, second.com, therd.com"

if isinstance(sites_urls, str):
      sites_urls= tuple(sites_urls.split(', '))
      print(sites_urls)
```

## Gists

Цветной вывод `print` в консоль

{{< gist stavis-dev 32f56f0f9cf9a7ba09e9e1964f80e91b "color_print.py">}}
