---
author: Stavis
title: "Памятка по tmux"
description: "Шпаргалка памятка по приложению tmux"
tags: ["tmux"]
categories: ["devops", "linux"]
image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flightrains.com%2Fassets%2Fimg%2Fblog%2Ftmux-tips.png"
---

# Шпаргалка по tmux

![tmux](https://lightrains.com/assets/img/blog/tmux-tips.png)

## Установка

```sh
# mac
brew install tmux

#linux
sudo pacman -S tmux
```

## Команды

Отключиться от сесси `Ctrl+b d`

```bash
# запуск
tmux

# запуск с созданием новой сессии 'name-session'
tmux new-session -s name-session

# подключиться к сессии если она одна
tmux attach
# подключиться к сессии name-session
tmux attach -t name-session

# посмотреть существующие сесси tmux
tmux ls
```

## Разделение панели

`Ctrl+b ?` - help по горячим клавишам.

`Ctrl+b d` - отключиться от текущей сессии

`Ctrl+b %` - разделить текущую панель по горизонтали;

`Ctrl+b "` - разделить текущую панель по вертикали;

`Ctrl+b c` - создать новое окно;

`Ctrl+b w` - выбрать окно из списка;

`Ctrl+b 0-9` - открыть окно по его номеру;

`Ctrl+b ,` - переименовать текущее окноi;

## Environment

Переменные среды в `tmux`. Очень удобная штука,
Для того, чтоб передавать данные из одного окна в другое.

```bash
# показать переменные
tmux show-environment

# создать переменную FOO
tmux setenv FOO foo-one

tmux setenv TV 192.168.1.55:5555

# експортировать установить данные в переменную
export FOO='foo-one'

export TV='192.168.1.55:5555'
```

В созданных дочерних окнах, данные из переменной `FOO`
будут доступны.

## tmux as systemd

Никак не могу запустить tmux в автозагрузке

## Links

- [tmux repo wiki](https://github.com/tmux/tmux/wiki)
- [tmux repo](https://github.com/tmux/tmux)
