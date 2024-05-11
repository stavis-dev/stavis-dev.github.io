---
sidebar_label: "HiveOs"

author: stavis
title: "HiveOs - настройка системы"
description: "Работа с системой HiveOs, настройка через терминал"
tags: ["hiveos", "linux", "devops"]

---
## Настройки

### Статический IP

> [Оригинал статьи](https://hiveon.com/knowledge-base/guides/ip/) в официальной документации

Конфигурационные файлы находятся тут:

```bash
cat /hive-config/network/20-ethernet.network
```
Для wireless сетей тут:
```bash
cat /hive-config/network/30-wireless.network
```

Файл выглядит так:

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

### Watchdog 

Важная штука, как оказалось. 
Используются [OpenDev Watchdog](https://open-dev.ru/watchdog),
а конкретно [USB WatchDog Lite](https://open-dev.ru/mining/tproduct/230408497-351859668740-usb-watchdog-lite).  
Риг может завистнуть по разным причинам, да еще так, что никакая команда
на перезагрузку не помогает. Только с помощью ватчдога, коммандой

```bash
/hive/opt/opendev/watchdog-opendev reset
```

#### Настройка Watchdog

Настройка USB вотчдогов.

Проверить обранужил ли риг вотчдог.

```bash
# команда
journalctl -u hive -b0

# должно выдать что то типа
Oct 28 23:37:55 worker hive[861]: Watchdogs OpenDev found: 1
```

```bash
# получить список команд вотчдога:
/hive/opt/opendev/watchdog-opendev

# вывод
Usage: watchdog-opendev  ping|reset|power [port]
       watchdog-opendev  fw|read|settings [port]
       watchdog-opendev  temp|temperature [port]
       watchdog-opendev  write <settings> [port]
       watchdog-opendev  decode <settings>
       watchdog-opendev  enable|disable [port]
       watchdog-opendev  poweroff [port]
```

В некоторых материнских платах вотчдоги могут не работать, это происходит
из-за неправильного подключения контактов `(+/-)` на самом вотчдоге и материнской плате.
Решается простой заменой местами контактов.

Тест на правильную работу вотчдога можно следующим образом.
Открываем 2 терминала. В первом пингуем нужную машину,
во втором подключаемся по `ssh` к машине и выполняем команду:

```bash
/hive/opt/opendev/watchdog-opendev reset
```

Ну, в случае правильного подключения вотчдога, после выполнения команды перезагрузки,
пинг должен пропасть.

```bash
# 1й терминал
ping 192.168.1.10

# 2й терминал ssh 10
/hive/opt/opendev/watchdog-opendev reset
```

### Остальные комманды настроек

Остальные страндартные команды на каждом риге:

```bash
# расширяем оставшееся свободное место на диске
disk-expand

# отключить wi-fi если не используется
wifi-disable
```

## Логи

Одной из важных навыков как в майнинге, так и вообще в администрировании линукс систем
является анализ логов. Конкретно для майнинга это помогает отлавливать "больные" карты.
Реджекты, невалидные шары и т. д.

Итак.
Логи, как известно в линукс системах находится в папке `/var/log`

Логи майнеров в `hiveos` находятс в папке `/var/log/miner/` и далее название текущего майнера.

Посмотреть текущие активные майнеры можно командой

```bash
ls /var/log/miner
```

Например: прочитать логи майнера `phoenix` можно командой.

```bash
# читаем лог феникс майнера
less /var/log/miner/phoenixminer/phoenixminer.log

# читаем лог nbminer
less /var/log/miner/nbminer/nbminer.log
```

Однако эти команды нам покажут весь фай логов, который, обычно сложно разобрать.
Попробуем сделать вывод информации чуть информативнее.

Я хочу посмотреть все реджекты в феникс майнере. Для этого я буду использовать комманду `grep`

```bash
# -i - искать без учета регистра
# -w - только точные слова без дополнений
# -n - отображать номера строк.

grep -iwn 'Share rejected' /var/log/miner/phoenixminer/phoenixminer.log

# Очень удобно применить контекст 
# -B # - Показать # строк ДО вхождения.
# -А # - Показать # строк ПОСЛЕ вхождения.

grep -iwn -B 2 'Share rejected' /var/log/miner/phoenixminer/phoenixminer.log

```

## Полезные ссылки

- [Гайды и руководства по Hive Os](https://hiveos.farm/guides_ru/)
- [Последняя версия HiveOs](http://download.hiveos.farm/latest/)
- [Текстовая истоиря версий](http://download.hiveos.farm/history/VERSIONS.txt)
- [HTML история версий HiveOs](http://download.hiveos.farm/history/)
- [Список актуальных версий](https://download.hiveos.farm/)
- [Как обновить драйверы?](https://hiveos.farm/guides-nvidia_dr_ru/)
- [Репозиторий драйверов](http://download.hiveos.farm/drivers/)

### Обсуждения видеокарт на форумах

Темы по картам с форума `https://miningclub.info/`

- [ВСЕ RTX 3080 10gb в майнинге](https://miningclub.info/threads/vse-rtx-3080-10gb-v-majninge.70017/)
- [ВСЕ RTX 3060ti в майнинге][ВСЕ-RTX-3060ti-в-майнинге]
- [Palit Dual 3060Ti](https://miningclub.info/threads/palit-dual-3060ti-xeshrejt-majnit-eth-kak-3070-63mh-na-130vatt-novyj-lider-v-linejke-rtx30.72834/)

- [ВСЕ-RTX-3060ti-в-майнинге]: https://miningclub.info/threads/vse-rtx-3060ti-v-majninge.72385/ "Ссылка на форум miningclub"
