---
dtaft: true
sidebar_label: "Docker шпаргалка"

author: stavis
title: "Docker шпаргалка частые команды чтобы не забыть"
description: "Часто используемые команды для docker, чтобы не забыть и не искать по интернетам"
tags: ["docker", "linux", "devops"]

---

## Установка

### Ubuntu

> [Статья](https://docs.docker.com/desktop/install/ubuntu/) в официальной документации

```bash
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
    
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
## step
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic test"
sudo apt update
sudo apt install docker-ce

# check
sudo systemctl status docker
# add user
sudo usermod -aG docker $USER

# install docker compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# https://github.com/docker/compose/releases/download/1.25.5/docker-compose-Linux-x86_64

sudo chmod +x /usr/local/bin/docker-compose
```

## Настройка

После установки docker желательно добавить докев в группу пользователя.

```bash
sudo usermod -aG docker $USER
```

## Команды Docker

`docker run`

`docker run -d --name tg tgfin` - запустить докер образ в фоне (`-d`), назвать его "`tg`" и образа `tgfin`
можно добавить (`--rm`), тогда запущеный образ будет удален сразу после остановки. Не будет так загружена история.

### Быстрое удалене имиджей

1. `docker images` # Отображает существующие имиджи.
2. `docker images -q` # Отображает ID существующих имиджей.
3. `docker image rm` # удаляет имиджи (образа) по их ID

удаляет все неработающие контейнеры по их ID

```bash
docker rm $(docker ps -a -q)
```

`sudo service docker restart` - перезапуск сервиса докер.

## Параметры командной строки

- `--rm` - удалить докер контейнер после остановки (docker stop)

## Полезные гайды

1. [Статья на хабре](https://habr.com/ru/company/flant/blog/336654/)
2. [Основы Docker. Большой практический выпуск](https://www.youtube.com/watch?v=QF4ZF857m44&t=1688s&ab_channel=%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%9C%D0%B0%D1%82%D1%8F%D1%88%D0%BE%D0%B2)

## Интересные образы

### Docker-android

[Эмулятор android в образе докер][docker-android]

[docker-android]: https://github.com/budtmo/docker-android "Githud docker-android"

```bash

# С автоудалением образа Samsung Galaxy S6
# не работает orbot
docker run --privileged -d --rm -p 6080:6080 -p 5554:5554 -p 5555:5555 -p 7071:7071 -e DEVICE="Nexus 5" -v /home/wega/Downloads/android_download:/storage/emulated/0/Download --name android-torrent budtmo/docker-android-x86-9.0 
```

Образы эмулятора можно будет увидеть задя по ссылке докера обычно

http://172.17.0.1:6080/

### Docker-firefox

[Docker-firefox][docker-firefox]

[docker-firefox]: https://github.com/jlesage/docker-firefox "Githud Docker-firefox"

Есть версия докера с отдельным браузером Фаерфокс.

```bash
docker run -d --rm --name firefox -e DISPLAY=$DISPLAY \
-v /tmp/.X11-unix:/tmp/.X11-unix kennethkl/firefox
```

## Проблемы

### Нет соединение с интернетом из докер контейнера.

[статья](https://odino.org/cannot-connect-to-the-internet-from-your-docker-containers/)

2 пути 

```bash
ls /etc/docker # Is there a file at the specified path daemon.json
cd /etc/docker
sudo touch daemon.json

sudo vim /etc/docker/daemon.json
```

в файл ваставить днс

```bash
{
    "dns": ["192.168.1.1", "192.168.8.1", "8.8.8.8"]
}
```

После этого перезапустить сервер командой
`sudo service docker restart`

...

Но лично у меня ничего из этого не вышло.

### Еще один путь к файлу настроек

[From this site](https://github.com/laradock/laradock/issues/2047)

`sudo vim /etc/default/docker`

```sh
# Docker Upstart and SysVinit configuration file

# Use DOCKER_OPTS to modify the daemon startup options.
DOCKER_OPTS="--dns 208.67.222.222 --dns 208.67.220.220
```

в файл настроек вставить dns

### Странности

Возникла проблема с отсутствием интернета на докер контейнерах.
Проявляется это **только** с провайдером **МТС**.

Предположительно из за того, что МТС обрезает входящий TTL до 1.
И все пакеды, не идут дальше роутера.
Проверить это можно запустив докер **bash**

```bash

docker run -it --rm bash

# далее в интерактивной оболочке
# проверить трассировку маршрута к pypi.org
traceroute pypi.org

# в моем случае вывод не радует...

```

bash-5.0# traceroute pypi.org
traceroute to pypi.org (151.101.192.223), 30 hops max, 46 byte packets
 1  172.17.0.1 (172.17.0.1)  0.022 ms  0.027 ms  0.016 ms
 2  192.168.8.1 (192.168.8.1)  1.408 ms  1.443 ms  1.178 ms
 3  *  *  *
 4  *  *  *
 5  *  *  *
 6  *  *  *

что интересно ping проходит.


