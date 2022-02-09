---
draft: true
author: pythonru.com
title: Рeгулярные выражения в Pyhton
date: "2022-02-07"
description: "Примеры из регулярных выражений на python которые лучше записать, чем запомнить"
math: true
tags: ["python", "programing", "shortcodes"]
---

## Модуль Re для регулярных выражений в Python

>[Регулярные выражения](https://pythonru.com/primery/primery-primeneniya-regulyarnyh-vyrazheniy-v-python) — специальная последовательность символов, которая помогает сопоставлять или находить строки python с использованием специализированного синтаксиса, содержащегося в шаблоне. Регулярные выражения распространены в мире UNIX.

Модуль `re` предоставляет полную поддержку выражениям, подобным Perl в Python. Модуль re поднимает исключение `re.error`, если возникает ошибка при компиляции или использовании регулярного выражения.

Давайте рассмотрим две функции, которые будут использоваться для обработки регулярных выражений. Важно так же заметить, что существуют символы, которые меняют свое значение, когда используются в регулярном выражении.Чтобы избежать путаницы при работе с регулярными выражениями, записывайте строку как `r'expression'`.



```python
patern: str = r"[-+]?\d*[\.\,]?\d+|\d+"]
regexp_result = re.match(patern_float, item_word)
```

Чтение данных из json файла:

```python
import json

# Load data from json file
with open('file_name.json', 'r') as f:
    serieses = json.load(f)
```

## Запись / Чтение в обыкновенные файлы

Обыкновенные файлы я называю файлы, которые требуется просто прочиать построчно.
Чтение данных из обыкновенных файлов (например html):

```python
# Save data to file
with open('index.html', 'w') as f:
    f.write(res.text)
```

Чтение из файла:

```python
# Load data from file
with open('index.html', 'r') as f:
    html = f.read()
```

