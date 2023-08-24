---
title: "ssh - только по ключам."
description: "Закрываем ssh вход по паролю, разрешаем только по ключам"
authors: stavis
# image: https://d66cvws976y93.cloudfront.net/media/uploads/zinnia/2016/11/21/first_step.jpg
tags: ["ssh", "DevOps"]

---

Думаю это давно обязательная практика для первичной настройки ssh демона.
Но не смотря на память - копипастинг все равно быстрей.

<!--truncate-->

## Файл настроек

```bash
sudo vim /etc/ssh/sshd_config
```

Поиском в vim - комбирация `/поисковая_фраза`
Переключение на следующую найденую комбирацюи `n`, предыдущую `N`

## Отключение аутентификации по паролю на сервере

Нужный параметр:

```cfg
PasswordAuthentication yes
```

- Находим строчку `PasswordAuthentication`
- Расскоментировать, если `#`
- Прописываем `no`

## Меняем стандартный порт

Не думаю, что это как то спасает от снифферов, но часто требуют. Так что.
Нужный параметр:

```cfg
Port 22
```

- Находим строчку `Port`
- Прописываем потр по которому хотим подключаться например `1234`
- теперь для подключения по `ssh` в строку подключения сделует добавить ключ `-p 1234`.


## Копируем наши ключи на сервер

```bash
ssh-copy-id username@remote_host
```

Хардкор вариант если `ssh-copy-id` на сервере нет.

```bash
cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Ну или совсем треш

Скопировать у себя на хосте открытый ключ:

```bash
cat ~/.ssh/id_rsa.pub
```

На OS X, Мак осях используем `pbcopy`; `pbpaste`

```bash
pbcopy < .ssh/id_rsa.pub
```

Ну а на сервере вставляешь прямо в файл `authorized_keys`.

создаем директорию, есди ее еще нет:

```bash
mkdir -p ~/.ssh
```

Добавляем наш открытый ключ в список авторизованных:

```bash
echo public_key_string >> ~/.ssh/authorized_keys
```

## перезапуск сервиса

На **Ubuntu / Debian**:

```bash
sudo service ssh restart
```

**CentOS/Fedora/Manjaro** этот демон носит имя `sshd`:

```bash
sudo service sshd restart
```