---
author: Stavis
title: "Raspberry pi"
date: "2022-02-02"
description: "Настройка малинки как wifi роутера"
tags: ["Raspberry pi"]
categories: ["devops", "linux"]
ShowToc: true
TocOpen: true
ShowBreadCrumbs: true
---

## Первое подключение

... Испробовано на Малинке 3й версии.
### Сетевые настройки

1. Создать файл `wpa_supplicant.conf`

Внутри его прописать:

```bash
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=RU

network={
	ssid="Name_wi_spot"
	psk="your_password_to_wifi"
	key_mgmt=WPA-PSK
		}
```

### Включить доступ по ssh при установке

Для того, чтоб после первого подключения малины, 
сразу после того как залит образ был доступ к ней
по `ssh` протоколу.  
Необходимо в корневую дерикторию кинуть файл
с названием `ssh` без расширения.  
После подключения устройства к сети (по кабелю), можно будет подключиться к
малине по ее IP адресу.

>Пользователь по умолчанию: pi  
>Пароль по умолчанию: raspberry

### Отключение wi-fi / bluetooth

в файле `/boot/config.txt`

```bash
# отключаем wi-fi
dtoverlay=disable-wifi

# отключаем bluetooth
dtoverlay=disable-bt
```

## Настройки сети

Статический адрес настраивается в файле
`dhcpcd` — это DHCP Client Daemon

```bash
# первичные настройки сети (статические)
sudo vim /etc/dhcpcd.conf

# так же какие то настройи могуты быть в файле
sudo vim /etc/network/interfaces
```

Пример заполнения файла

```bash
# static address for cable lan
interface eth0
static ip_address=192.168.1.39/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1

# static address for wi-fi
interface wlan0
static ip_address=192.168.1.38/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1
```

### Смена пароля

Добавление пользователя, например `fred`

```bash
sudo useradd -m fred -G sudo
```

Установка паролля для пользователя`fred`

```bash
sudo passwd fred
```

Выходим из пользователя `pi` и перезаходим с новым, созданым именем.
Далее желательно проверить, действительно ли новый созданный пользователь имеет
привилегии `root`.

```bash
sudo visudo
```

Если все хорошо, удаляем пользователя `pi` чтоб его не забрутфорсили и не получили
доступ на малину.

```bash
# To delete the pi user, type the following:
sudo deluser pi

# и так же удаляем папку пользователя
# если по какой то причине папка не удалилась
sudo deluser -remove-home pi
```

Требуем для `pi` обязательный ввод пароля.

To force sudo to require a password, enter

```bash
sudo vim /etc/sudoers.d/010_pi-nopasswd

# and change the pi entry (or whichever usernames have superuser rights) to
pi ALL=(ALL) PASSWD: ALL
```

Now save the file.

## Малина как шлюз модема

Имеется малина, к которой подключен мобильный телефон в качестве usb модема. Через usb кабель.

Пробуем прописать в настройках

[Основная статья](https://www.cnblogs.com/jins-note/p/9513113.html)

### Установка DHCP сервера

Сервер устанавливается командой

```bash
sudo apt-get install isc-dhcp-server
```

Конфигурация производится в файле

```bash
sudo vim /etc/dhcp/dhcpd.conf
```

Полезные команды DHCP сервера

```bash
# рестарт сервера для применения новых настроек.
sudo /etc/init.d/isc-dhcp-server restart
sudo systemctl restart isc-dhcp-server.service

# посмотреть статус сервера
sudo systemctl status isc-dhcp-server.service

# показать выданные адреса
dhcp-lease-list


```

## Настройка NAT

Открываем доступ в интерте через NAT
в вайле `/etc/sysctl.conf`

```bash
sudo vim /etc/sysctl.conf
```

Найдем и раскомментируем строку `net.ipv4.ip_forward=1`

После этого следует перезагрузиться `sudo reboot` или 
перезагрузить сетевую службу `sudo /etc/init.d/networking restart`. (хотя она возможно не сработает). Если  нет
желания перезагружать, выполните следующую команду

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

Затем, чтобы настроить таблицы маршрутизации NAT, введите:

```bash
# настройки нат проброса всего
sudo iptables -t nat -A POSTROUTING -o usb0 -j MASQUERADE

sudo iptables -A POSTROUTING -t nat -s 192.168.1.0/24 -o usb0 -j MASQUERADE


sudo iptables -A FORWARD -i wlan0 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT

sudo iptables -t nat -A POSTROUTING -o eth1 -j MASQUERADE
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

sudo iptables -A FORWARD -i wlan0 -o eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT

sudo iptables -A FORWARD -i eth0 -o usb0 -j ACCEPT
sudo iptables -A FORWARD -i usb0 -o eth0 -j ACCEPT

sudo iptables -A FORWARD -i wlan0 -o usb0 -j ACCEPT

```

Далее делем так, чтоб после перезагрузки малины
настройки маршрутизации восстанавливались.

```bash
# сохраняем текущие настройки таблицы маршрутизации в файл
sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"

# можн прочитать что сохранилось в файл командой
less /etc/iptables.ipv4.nat

```

Для восстановления настроек из файла можно добавить скрипт
в конец файла `/etc/network/interfaces`

```bash
# открываем файл 
sudo vim /etc/network/interfaces

# и в конец файла добавляем строчку
up iptables-restore < /etc/iptables.ipv4.nat

# или через pre-up
pre-up iptables-restore < /etc/iptables.ipv4.nat
```

Не знаю почему (было лень разбираться),
но у меня метод выше не заработал.

В сети нашел еще варик. Через файл `/etc/rc.local`

```bash
# открываем файл 
sudo vim /etc/rc.local

# добавляем перед exit 0
iptables-restore < /etc/iptables.ipv4.nat
```

allow-hotplug eth1
iface eth1 inet dhcp

```bash
# уронить интерфейс
sudo ifconfig enp6s0 down

# поднять интерфейс
sudo ifconfig enp6s0 up
```


1raspber