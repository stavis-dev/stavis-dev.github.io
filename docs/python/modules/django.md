---
sidebar_label: "Фреймворк Django"

title: Шпаргалка по фреймворку Django
description: "Замена текста с помощью регулярных выражений в python"
tags: ["django", "backend", "python"]
draft: true
---

## Модели

### Модели в консоли

```bash
py manage.py shell
```

импортируем модели нашего приложения например `Women`

```python
from women.models import Women
```

#### Смотрим запросы в db

Импорт работы с базой данных

```python
from django.db import connection
```

Посмотреть запросы в базу данных

```python
connection.queries
```

### Добавление записи в бд

```python
w1 = Women(title='Анджелина Джоли', content="Биография Анджелины Джоли")
w1.save()

Women.objects.create(title="Кира Найтли", content="Биография Киры Найтли")
```

### Извлечение данных из бд


```python
Women.objects.all()
```

```python
Women.objects.filter(title="Энн Хэтэуэй")

wu = Women.objects.get(pk=2)
# <Women: Энн Хэтэуэй>


```

