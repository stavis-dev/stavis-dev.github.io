---
sidebar_label: 'Модули'
sidebar_position: 1

title: "Полезные модули и пакеты в Python"
author: stavis

description: "Популярные модули и пакеты в питоне, заслуживающие доверия и часто используемые."
tags: ["python", "modules"]

---

# Модули Python

По возможности, если совсем "не влом", лучше использовать стандартные. 
Сторонние как правило являются "обертками", упрощающие написание кода. Недостатки таких модулей является то, что их надо устанавливать отдельно и то, что в них могут быть уязвимости.

Ниже перечислю модули, пакеты, которые я так или иначе использовал. Дабы не потерять их из памяти.

## Основные 
Универсальные модули, пакеты используемые в коде python

- парсинг html страниц
  - модуль [Beautiful Soup](https://pypi.org/project/beautifulsoup4/)
    - [Beautiful Soup Documentation oficial](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
    - [Beautiful Soup Documentation 02](https://beautiful-soup-4.readthedocs.io/en/latest/)
  
- автоматизация действий в браузере.
    - [selenium](./selenium-python.md) - пока базовый.

- работа с `.env` переменными окружениями.
    - [dotenv | decouple](./env-dotenv.md) - оба испозуются в равной степени.

- http запросы
    - [requests](https://github.com/psf/requests) - без комментариев
    - [requests-html](https://github.com/psf/requests-html) - модуль `requests` с поддержкой `JavaScript`. [doc-eng](https://requests-html.kennethreitz.org/)
    - [aiohttp](https://github.com/aio-libs/aiohttp), [docs.aiohttp.org](https://docs.aiohttp.org/en/latest/index.html) - для асинхронных запросов
    - [nest_asyncio](https://github.com/erdewit/nest_asyncio) - решает проблему асинхронных запросов в `Google Colab`

- транситерация текста
    - [transliterate](https://github.com/barseghyanartur/transliterate) - транслитератор текста заточенный под славянские языки, [русс док](https://docs-python.ru/packages/modul-transliterate-python/)
    - [unidecode](https://github.com/avian2/unidecode) **Не использовал** - принимает строки в Юникоде и пытается представить их в символах ASCII. [русс док](https://docs-python.ru/packages/unicode-to-ascii/).

- Асинхронность
    - [aiofiles](https://github.com/Tinche/aiofiles) - Асинхронный доступ к файловой системе.

- Видео
    - [ffmpeg-python](https://github.com/kkroening/ffmpeg-python/tree/master) - Обертка Python для FFmpeg — с поддержкой сложной фильтрации

## Пакеты
Специализированные пакеты, выполняющие как правило одну функцию.
Полезно для изучения. Перенять практику.

- [habr-scraper](https://github.com/a1d4r/habr-scraper) - Парсер страниц хабра.
    - понравилась структура организации кода.

