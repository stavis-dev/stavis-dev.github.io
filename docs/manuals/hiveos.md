---
sidebar_label: "HiveOs"

author: stavis
title: "HiviOs - настройка системы для майнинга"
description: "Работа с системой, настройка через терминал"
tags: ["hiveos", "linux", "devops"]

---
## Настройка

### Статический IP

> [Оригинал статьи](https://hiveon.com/knowledge-base/guides/ip/) в официальной документации

Конфигурационные файлы находятся тут:

`/hive-config/network/20-ethernet.network`  
`/hive-config/network/30-wireless.network`  

Файл выглядит так:

```bash
cat /hive-config/network/20-ethernet.network
```

```bash
root@ssh:~# cat /hive-config/network/20-ethernet.network 
[Match]
#Match eth0, eth1, ... interfaces. Don't change it to other names
Name=e*

[Network]
DHCP=yes

#Uncomment the following for static IP, set DHCP=no
#Address=192.168.0.189/24
#Gateway=192.168.0.1
#DNS=192.168.0.1


#to disable IPV6 if it's not disabled in grub
#LinkLocalAddressing=no
#IPv6AcceptRA=no


[DHCP]
ClientIdentifier=mac
RouteMetric=10
```

Ну и пример настроек для рига с адресом, например, `192.168.1.12` будет таким:

```bash
[Network]
DHCP=no
Address=192.168.1.12/24
Gateway=192.168.1.1
DNS=192.168.1.1
```