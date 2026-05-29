---
title: "pacman - шпаргалка"
author: Stavis
description: "работаем с pacman установка приложений на arch manjaro linux"
tags: ["pacman", "linux"]
# image: "https://miro.medium.com/max/1400/1*7pr8EL8EDsP296pxL7Wz_g.png"

---

Для удобства названия интересуещего нас пакета будет называться `package_name`

## Установка пакетов

Установка пакетов из официальных репозиториев:

```bash
sudo pacman -S package_name
```
Установка с автоматическим подтверждением (для скриптов):

```bash
sudo pacman -S package_name --noconfirm
```

Установка пакетов с автоматическим подтверждением `--noconfirm` не всегда срабатывает как `yes`. Но это метод "принуждения" поэтому использовать с осторожностью!

> ⚠️ **Предупреждение:** Использование конструкции `yes | sudo pacman`, может привести к поломке системы при возникновении конфликтов пакетов.

```bash
yes | sudo pacman -S package_name
```

### Локальная и удаленная установка

Установить пакет, хранящийся локально (`.pkg.tar.zst`):

```bash
sudo pacman -U /путь/к/пакету/имя_пакета-версия.pkg.tar.zst
```

Установить пакет по прямой ссылке из интернета:

```bash
sudo pacman -U http://www.example.com/repo/example.pkg.tar.zst
```


## Удаление приложений

Удалить пакет и его зависимости, которые больше никому не нужны (не затрагивая глобальные конфиги):

```bash
sudo pacman -Rs package_name
```
**Рекомендуемый способ:** Удалить пакет, его неиспользуемые зависимости и все его конфигурационные файлы:

```bash
sudo pacman -Rns package_name
```

### Пакеты-сироты (Orphans)

Вывести список пакетов, которые остались в системе как неиспользуемые зависимости:

```bash
pacman -Qdt
```

Удалить все пакеты-сироты из системы:

```bash
sudo pacman -Rs $(pacman -Qdtq)
```

## Обновление системы

Синхронизировать базы данных и обновить все пакеты в системе:

```bash
sudo pacman -Syu
```

Иногда полезно проверить **версию пакета** перед обновлением. Используем ключи `-Qi`

```bash
pacman -Qi visual-studio-code-bin
```

## Поиск и информация в pacman

### Поиск в репозиториях и системе

* Поиск пакета в удаленной базе данных: `pacman -Ss package_name`
* Поиск среди уже установленных пакетов: `pacman -Qs package_name`

### Поиск по файлам

Чтобы узнать, какому пакету принадлежит конкретный файл в системе:

```bash
pacman -Qo /путь/к/файлу
```
Поиск пакета в репозитории по имени содержащегося в нем файла (требуется предварительный запуск `sudo pacman -Fy` для обновления базы данных файлов):

```bash
pacman -F имя_файла
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
