---
author: Stavis Vega
title: Работа с файлами Pyhton
description: Операции с файлами на питоне. Чтение, сохранение, csv и json файлов.
tags: ["python", "csv", "json", "save", "load", "files"]

---
## csv файлы

> подробнее про [csv](https://docs.python.org/3/library/csv.html) модуль

CSV файлы, предпочтительно хранить в формате, (dialect) - excel. С разделителем столбцов табуляцией `\t`.

Потому, что такие файлы:

- проще понимается `xls` читалками.
- легче читается человеком
- проще ичпользовать [cut]() в `unix` ситемах и администрировать логи девопсам. Чеее?

В общем, раз у пошла такая практика, то

### Чтение csv

```python
import csv

with open('log_ip.csv') as f:
    tab_reader = csv.reader(f, dialect='excel-tab')
    for row in tab_reader:
        print(row)
```

Если файл в `excel` формате, когда колонки разделены не запятыми а символами `TAB`, в обьект `reader`, можно добавить [dialect](https://docs.python.org/3/library/csv.html#csv.Dialect) `'excel-tab'`

При чтении:

```python
# tab delimiter excet_tab
tab_reader = csv.reader(f, dialect='excel-tab')

# or tab delimiter
tab_reader = csv.reader(f, delimiter="\t")
```

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

Для записи в в `excel` формате `'excel-tab'` добавляем в обьект `writer`

```python
# tab delimiter excet_tab
a_pen = csv.writer(f, dialect='excel-tab')

# or tab delimiter
a_pen = csv.writer(f, delimiter="\t")
```


> [Примеры](https://docs.python.org/3/library/csv.html#examples) работы с csv файлами в официальной документации.

## json файлы

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

## Плоские файлы
.
Чтение и запись данных из обыкновенных (плоских) файлов `txt`, `html` и т.д.:

### Сохранение в файл

Простое сохранение в файл

```python
# Save data to file
with open('index.html', 'w') as f:
    f.write(res.text)
```

Сохранинение [list](./types/python-types-list.md) или [dict](./types/python-types-dict.md) в плоский файл построчно:

```python
# Save list to file
myList = [1,2,3,4]

with open('output.txt', 'w') as f:
  f.write('\n'.join(str(i) for i in myList))
```

### Чтение из файла:

```python
# Load data from file
with open('index.html', 'r') as f:
    html = f.read()
```

## Асинхронный доступ

Для асинхронного доступа к файловой системе есть модуль [aiofiles](https://github.com/Tinche/aiofiles)

модуль предварительно установить: КЭП?

```sh
pip install aiofiles
```

Пример сохранения в файл:

```python
import asyncio
import aiofiles  # pip install aiofiles

async def saver():
  async with aiofiles.open('test.txt', 'a') as f:
    await f.write("Ole ole")

asyncio.run(saver())
```


## Пути

Получить путь к текущей дериктории

```python
from os.path import dirname, abspath

# get current dir
cur_dir = dirname(abspath(__file__))
```