---
title: "all(), any() в python"
author: stavis
description: "Функции all и any в питоне."
tags: ["functions", "sorted", "all", "any" ]

---

## Функция all


Функция `all` возвращает True, если все элементы истинные (или объект
пустой).

```python
all([False, True, True])
# False

all([True, True, True])
# True

all([])
# True
```

Например, с помощью `all` можно проверить, все ли октеты в IP-адресе
являются числами:

```python
ip = '10.0.1.1'

all(i.isdigit() for i in ip.split('.'))
# True

all(i.isdigit() for i in '10.1.1.a'.split('.'))
# False
```

## Функция any

Функция `any` возвращает True, если хотя бы один элемент истинный.

```python

any([False, True, True])
# True

any([False, False, False])
# False

any([])
# False

any(i.isdigit() for i in '10.1.1.a'.split('.'))
# True
```

Например, с помощью any, можно заменить функцию ignore_command:

```python
def ignore_command(command):
    '''
    Функция проверяет содержится ли в команде слово из списка ignore.
    * command - строка. Команда, которую надо проверить
    * Возвращает True, если в команде содержится слово из списка ignore, False - если нет
    '''
    ignore = ['duplex', 'alias', 'Current configuration']

    for word in ignore:
        if word in command:
            return True
    return False
```

На такой вариант:

```python
def ignore_command(command):
    '''
    Функция проверяет содержится ли в команде слово из списка ignore.
    command - строка. Команда, которую надо проверить
    Возвращает True, если в команде содержится слово из списка ignore, False - если нет
    '''

    ignore = ['duplex', 'alias', 'Current configuration']
    return any([word in command for word in ignore])
```
