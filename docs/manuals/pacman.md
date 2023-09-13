---
title: "pacman - шпаргалка"
author: Stavis
description: "работаем с pacman установка приложений на arch manjaro linux"
tags: ["pacman", "linux"]
# image: "https://miro.medium.com/max/1400/1*7pr8EL8EDsP296pxL7Wz_g.png"

---

Для удобства названия интересуещего нас пакета будет называться `package_name`

## Установка пакетов

Установка пакетов из репозиториев

```bash
sudo pacman -S package_name
```

Установка пакетов с автоматическим подтверждением в теории выолняется с `--noconfirm`  
Но он не всегда срабатывает как `yes`. Если по какой то причине `pacman`у не нравится пакет,  он все равно остановится.

Так что практичнее использовать утилиту `yes`

```bash
yes | sudo pacman -S package_name
```

### Установить пакет хранящийся локально

```bash
sudo pacman -U /путь/к/пакету/имя_пакета-версия.pkg.tar.zst
```

### Скачать и установить пакет из удаленного источника

```bash
sudo pacman -U http://www.example.com/repo/example.pkg.tar.zst
```


## Удаление приложений

Удалить пакет и те его *зависимости*, которые не нужны никаким другим пакетам: 

```bash
sudo pacman -Rs package_name
```

### Пакеты-сироты

Вывести список пакетов, которые больше не требуются как зависимости ("пакеты-сироты"):

```bash
pacman -Qdt
```

Удалить "пакеты-сироты"

```bash
sudo pacman -Rs $(pacman -Qdtq)
```

## Обновление пакетов

```bash
sudo pacman -Syu
```

## Поиск в pacman

### Поиск в базе данных

```bash
pacman -Ss package_name
```

### Искать среди установленных пакетов

```bash
pacman -Qs package_name
```

### Искать пакет в репозиториях по названию файла

```bash
pacman -F package_name
```

## Конфигурация pacman

### Конфиг файл

```bash
less /etc/pacman.conf
```

### Список зеркал

```bash
less /etc/pacman.d/mirrorlist
```

Я добавил зеркало от Yandex:

```config title="/etc/pacman.d/mirrorlist"
## Russia
Server = https://mirror.yandex.ru/mirrors/manjaro/stable/$repo/$arch
```

## Ссылки

- документация по [pacman](https://wiki.archlinux.org/title/Pacman_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9))
- док по [Официальные репозитории](https://wiki.archlinux.org/title/Official_repositories_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9))
- документация по [зеркалам](https://wiki.archlinux.org/title/Mirrors_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9))
- [зеркала](https://mirror.yandex.ru/) яндекс
- документация по [pamac](https://wiki.manjaro.org/index.php/Pamac/ru) на Manjaro