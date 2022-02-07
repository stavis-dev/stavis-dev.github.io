---
title: "Мануал по языку Python"
author: Stavis Vega
date: "2022-02-07"
description: "Фишечки языка Python"
tags: ["python", "programing"]
ShowBreadCrumbs: true
aliases: ["migrate-from-jekyl"]
ShowToc: true
TocOpen: true
---

* [Stavis-dev Codewars](https://www.codewars.com/kata/556deca17c58da83c00002db/train/python)  
* [Replit Codewars](https://replit.com/@StavisViegha/CodeWars#main.py)  
* [Классы в гугл колаб](https://colab.research.google.com/drive/1vSmI7E49MBA4kA38B_MT6mgWvBKgEorC)  

* [К README файлу](README.md)

## Распаковка

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
