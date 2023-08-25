---
sidebar_label: "Google Colab"

title: "Google Colaboratory работаем в python на удаленной машине."
author: stavis
date: "2023-07-02"
description: "Google Colab то же что и Jupyter только от Гугл бесплатно. Работаем в питоне удаленно."
tags: ["Google Colab", "python"]

image: 'https://www.hwlibre.com/wp-content/uploads/2021/11/google-colaboratory.jpg'

---

# Google Colab

:::info
[Google Colab](https://colab.research.google.com/)  — сервис, созданный Google, который позволяет работать с кодом на языке `Python` через `Jupyter Notebook`.

Работает прямо в браузере, исполняется в Google облаке.  
Нет необходимости устанавливать дополнительные программы на компьютер. В Google Colab можно использовать различные библиотеки `Python`, загружать и запускать файлы, анализировать данные и получать результаты прямо в браузере. 

Этот сервис особенно полезен для разработчиков новичков, и студентов, которые изучают программирование на `Python`.
:::

Подробно описывать работу там я пока не буду, просто запишу тут пару полезных для меня фишек.

## Полезности

### Shell комманды

Очевидность скажу: перед коммандой ставим `!` восклицательный знак.

```sh
!pip install aiohttp
!pip install nest_asyncio
!pip install aiofiles
```

### Отключение консоли

Чтобы в консоль не сыпался процесс выполнения кода достаточно добавить вверху блокнота с кодом

```js
%%capture
```

### Сворачивание участка кода

Шебанг `#@title` и далее описание блока:

```sh
#@title Install requirements
%%capture

!pip install requests
!pip install beautifulsoup4

```

Этот шебанг `#@title` в начале блокнота добавить заголовок "Install requirements" (можно написать любой).
И кнопку ниже `Show code` свернутая панель не будет постоянно раскрываться, что временами бесит.

### Environment

Переменные среды внутрь машины Google Colab передаются `%env <имя_переменой>`

```sh
%env zip_file=videos_dir.zip
%env dest=/content/from_colab
```

Передаются соответсвенно:

```sh
!mv "$zip_file" "$dest"
```

### Примонтировать Google Drive

Скачивание файлов с колаба очень медленное, лучше примонтировать гугл диск и скопировав файлы на него, уже после скачать от туда.

```python
#@title mount Google Drive

from google.colab import drive
drive.mount('/content/drive')
```

## Ссылки 

- [Google Colab](https://colab.research.google.com/)
- [За кулисами Google Colab](https://habr.com/ru/companies/skillfactory/articles/673572/) - статья на хабре