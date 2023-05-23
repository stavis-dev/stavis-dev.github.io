---
title: "Как отключить вход по SSH с паролем"
author: Stavis Vega
date: "2023-02-14"
description: "Защищаем сервер от аттак из вне, ssh доступ"
tags: ["ssh", "linux"]
categories: ["devops", "linux"]
# aliases: [""]
ShowToc: true
TocOpen: true
math: true
cover:
    hidden: true
    image: "https://assets.website-files.com/5ff66329429d880392f6cba2/61c1b963247368113bbeef17_Secure%20Shell%20work.png"
    alt: "ssh connect" # alt text
    caption: "ssh connection" # display caption under cover
---

Я хочу отключить доступ для ssh-клиентов с помощью пароля и разрешить только авторизацию ssh с помощью SSH-ключей.
Как отключить аутентификацию паролей для SSH в операционных системах Linux?


Во-первых, вам нужно настроить обычную учетную запись пользователя.
Затем настройте SSH-ключи для входа. 
После того, как вы настроили SSH-ключи, вам необходимо отключить пароль для всех пользователей, включая root. 
В этом руководстве показано:

## Как отключить вход по SSH с паролем

```sh
sudo vim /etc/ssh/sshd_config
```
Выставляе в `no` следующие параметры:

* ChallengeResponseAuthentication
* PasswordAuthentication
* UsePAM
* PermitRootLogin

Как искать текст в `vim` читаем [тут]({{< ref "/posts/vim#поиск-и-замена-в-файле-перемещения-по-совпадениям" >}} )

Сохраните изменения и закройте файл. Перезагрузите ssh сервер:

```sh
sudo systemctl reload ssh
```

## Ссылки

[Взято с форума](https://codeby.net/threads/kak-otkljuchit-vxod-po-ssh-parolju-na-linux-dlja-povyshenija-bezopasnosti.67556/)
