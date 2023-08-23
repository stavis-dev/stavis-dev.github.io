---
draft: false
author: Stavis
title: "systemd - демон автозапуска"
date: "2022-04-15"
description: "Systemd демон которого легко приручить, systemctl как справится в linux"
tags: ["systemctl", "автозапуск линукс", "autostart"]
categories: ["devops", "linux"]
image: "https://timesofcloud.com/wp-content/uploads/2020/07/linux-systemd.jpg"
---
Вместе с подсистемой `systemd` появилась команда `systemctl`.
Она позволяет управлять основными процессами Linux.
Ниже представлена небольшая инструкция в виде шпаргалки наиболее используемых команд.
<!--more-->

> Собрано по кусочкам из разных статей в интернете.
>
> — <cite>Stavis [^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.


## Cинтаксис systemctl

Без параметров, `systemctl` выводит список запущенных служб,
устройств, точек монтирования и других юнитов.

### Список основных команд сервиса

| Описание  | Команда |
| ----- | --- |
| Посмотреть статус службы:   | `systemctl status network`  |
| Запустить сервис:   | `systemctl start mysql`  |
| Остановить сервис:   | `systemctl stop mysql`  |
| Включить автозапуск службы:   | `systemctl enable mysql`  |
| Отключить автозапуск службы:   | `systemctl disable mysql`  |

## Автозапуск приложений с помощью systemd

> Частный пример написания Unit файла.
>
> — <cite>Подробнее [^2]</cite>

[^2]: Написание Юнит файлов цела тема. Подробее про них можно почитать на
[сайте](https://linux-notes.org/pishem-systemd-unit-fajl/).

В основном `systemd` используют для автозапуска сервисов или скриптов.

Можно сделать 2 варианта.  
1. Запуск от имени Рута
2. Запуск от имени Юзера

Для `первого` варианта сервисный файл должен
располагаться в системной папке сервисов `/etc/systemd/system/`.

Например я создаю "автозапуск" шелл скрипта находящегося по пути
`/home/username/mysell.sh`

Создаем файл сервиса:

```bash
# system path for daemon
vim /etc/systemd/system/myservice.service

# user path for daemon
vim ~/.config/systemd/user/myservice.service
```

В файл прописываем команды запуска

```ini
[Unit]
Description=My shell autorun script
Documentation=man:tmux(1)

[Service]
# Type=oneshot
# RemainAfterExit=yes
ExecStart=/home/username/mysell.sh
SyslogIdentifier=Myshell

[Install]
WantedBy=default.target
# WantedBy=multi-user.target
```


Для пользовательского в папке `~/.config/systemd/user/`.
