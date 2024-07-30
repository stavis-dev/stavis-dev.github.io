---
sidebar_label: "wireguard - vpn тунель"

author: Stavis
title: "Памятка по wireguard"
description: "Шпаргалка памятка по приложению wireguard"
tags: ["wireguard", "devops", "linux"]
image: "https://blog.wtigga.com/wp-content/uploads/2021/03/wireguard_logo.png"

---

# Шпаргалка по wireguard

![wireguard](https://blog.wtigga.com/wp-content/uploads/2021/03/wireguard_logo.png)

## Установка

обновляем систему:

```bash
apt update && apt upgrade -y
```

установка

```bash
apt install -y wireguard
```

## Настройка сервера

Файлы настроек находятся в

```bash
cd /etc/wireguard
```

### Создаём ключи для сервера

```bash
wg genkey | tee /etc/wireguard/privatekey | wg pubkey | tee /etc/wireguard/publickey
```

Проставляем права на приватный ключ:

```bash
chmod 600 /etc/wireguard/privatekey
```

Или еще вариант. Команда удаляет все разрешения к файлу для пользователей и групп, кроме пользователя `root`, чтобы гарантировать, что только он может получить доступ к закрытому ключу.

```bash
chmod go= /etc/wireguard/private.key
```

Проверим, как у вас называется сетевой интерфейс:

```bash
ip a
```

Скорее всего у вас сетевой интерфейс `eth0`, но возможно и другой, например, `ens3` или как-то иначе. Это название интерфейса используется далее в конфиге `/etc/wireguard/wg0.conf`, который мы сейчас создадим:

```bash
vim /etc/wireguard/wg0.conf
```

```conf title="wg0.conf"
[Interface]
PrivateKey = <privatekey>
Address = 10.0.0.1/24
ListenPort = 51830
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
```

> Если не знаете текстовый редактор `vim` — откройте файл с `nano`, он проще в работе.

Обратите внимание — в строках `PostUp` и `PostDown` использован как раз сетевой интерфейс `eth0`.
Если у вас другой — замените `eth0` на ваш.

Вставляем вместо `<privatekey>` содержимое файла `/etc/wireguard/privatekey`

Настраиваем IP форвардинг:

```bash
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
sysctl -p
```

Включаем `systemd` демон с `wireguard`:

```bash
systemctl enable wg-quick@wg0.service
systemctl start wg-quick@wg0.service
systemctl status wg-quick@wg0.service
```

Можно посмотреть монитор подключенных клиентов

```bash
wg
```

### Создаём ключи клиента:

```bash
wg genkey | tee /etc/wireguard/user_privatekey | wg pubkey | tee /etc/wireguard/user_publickey
```

Добавляем в конфиг сервера клиента:

```bash
vim /etc/wireguard/wg0.conf
```

```conf title="wg0.conf"
[Peer]
# Name = user ivan
PublicKey = <user_publickey>
AllowedIPs = 10.0.0.2/32
```

Вместо `<user_publickey>` — заменяем на содержимое файла `/etc/wireguard/user_publickey`

Перезагружаем `systemd` сервис с `wireguard`:

```bash
systemctl restart wg-quick@wg0 && systemctl status wg-quick@wg0
```

## Настройка клиентов

> Первым делом, само собой, следует установить клиенскую программу на локальный комп.
> - Для windows - [Download Windows Installer](https://download.wireguard.com/windows-client/wireguard-installer.exe)
> - Для android - [Download from Play Store](https://play.google.com/store/apps/details?id=com.wireguard.android)
> - Arch linux - `sudo pacman -S wireguard-tools`
> - Ubuntu - `sudo apt install wireguard`
> - Остальные версии можно глянуть на [официальной странице](https://www.wireguard.com/install/)

На локальной машине (например, на ноутбуке) создаём текстовый файл с конфигом клиента:

```bash
vim user_wb.conf
```

```conf title="user_wb.conf"
[Interface]
PrivateKey = <CLIENT-PRIVATE-KEY>
Address = 10.0.0.2/32
DNS = 8.8.8.8

[Peer]
PublicKey = <SERVER-PUBKEY>
Endpoint = <SERVER-IP>:51830
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 20
```

**Здесь:**

- `<CLIENT-PRIVATE-KEY> `заменяем на приватный ключ клиента, то есть содержимое файла `/etc/wireguard/user_privatekey` на сервере.
- `<SERVER-PUBKEY>` заменяем на публичный ключ сервера, то есть на содержимое файла `/etc/wireguard/publickey `на сервере.
- `<SERVER-IP>` заменяем на IP сервера.

Этот файл открываем в Wireguard клиенте (есть для всех операционных систем, в том числе мобильных) — и жмем в клиенте кнопку подключения.

## Дополнения

### lswg

У сервера `wireguard` есть совсем небольшой недостаток. 
В нем нет отображения имет клиентов (peers)
Во время выводы команды `wg` или `wg show` пиры отображаются только хешами.

От этого не удобно и муторно понимать, какой хеш, к какому пользователю относится.  

Решением позволяющим показывать имя пользователя является `python` скрипт [lswg](https://gist.github.com/stavis-dev/9537cd4f9bf34a7b57fe698d4e4b780c)

Он отображает имена `Name` прописаные в файле `wg0.conf`

```conf title="wg0.conf"
[Peer]
// highlight-next-line
# Name = user ivan
PublicKey = <user_publickey>
AllowedIPs = 10.0.0.2/32
```

#### Скачать и установить lswg

Предполагается что на сервере вы как `root`

```bash
wget https://gist.githubusercontent.com/stavis-dev/9537cd4f9bf34a7b57fe698d4e4b780c/raw/lswg && \
chmod +x lswg && \
mv lswg /usr/bin/
```

## Готовые скрипты

Готовый скрипт для установки га голую систему `ubuntu20.04` образа [wg-easy](https://github.com/WeeJeWel/wg-easy)

```bash
bash <(wget --no-check-certificate -O - https://stavis-dev.github.io/f/wg_easy_ubuntu20.04_install.sh)
```

Или если нужно просто скачать.

```bash
wget https://stavis-dev.github.io/f/wg_easy_ubuntu20.04_install.sh
```

## Links

- по мотивам видео [видео](https://youtu.be/5Aql0V-ta8A)
- продвинутая [инструкция](https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-22-04) на digitalocean
- официальный сайт [wireguard.com](https://www.wireguard.com/)
