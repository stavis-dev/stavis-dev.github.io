---
title: "Makefile для Docker"
description: "Простое управление докерами файлом Make"
authors: stavis
# image: https://d66cvws976y93.cloudfront.net/media/uploads/zinnia/2016/11/21/first_step.jpg
tags: ["docker", "DevOps", "make"]

---

Просто памятки ради.

Прочитал [статью](https://earthly.dev/blog/docker-and-makefiles/). Оказывается с помощью `Makefile` удобней работать с докер образами.

Пример из статьи: 

```bash
DOCKER_USERNAME ?= username
APPLICATION_NAME ?= hello-world
 
build:
         docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .
```

запуск сокращается до команды

```bash
make build
```

Вариант же с моей 13й машиной, где помимо рабочих прог крутится сервер `jellyfin`

```bash title=Makefile
start: 
	docker-compose up -d
stop:
	docker-compose down
```

Соответственно `make` или `make start` запустит контейнер, а `make stop` остановит.



## Ссылки

- [Туториал](https://makefiletutorial.com/) по файлу makefile