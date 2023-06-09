---
author: Stavis Vega
title: Работа с файлами Pyhton
date: 2019-03-08
description: Пару шорткодов для экономии времени при написании python скриптов
math: true
ShowBreadCrumbs: false
tags: ["python", "programing", "shortcodes"]
---
## csv файлы

### Запись в csv

```python
import csv

with open('pased_site.csv', 'w', encoding="utf-8:") as f:
    a_pen = csv.writer(f)
    a_pen.writerow(('sep=', ' '))
    a_pen.writerow(('Title', 'Descrition', 'H1', 'url'))
    for table in tables:
        try:
            a_pen.writerow((table['Title'], table['Descrition'],
                            table['H1'], table['url']))
        except Exception:
            continue
```

## Запись / Чтение в json файл

Запись данных в  json файл:

```python
import json

# Save data to json file
with open('file_name.json', 'a') as f:
    json.dump(res, f, indent=4, ensure_ascii=False)
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

## Пути

Получить путь к текущей дериктории

```python
from os.path import dirname, abspath

# get current dir
cur_dir = dirname(abspath(__file__))
```