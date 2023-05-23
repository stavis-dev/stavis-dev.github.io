---
author: Stavis
title: "Hiveos инструкция для админов"
date: "2022-04-21"
description: "Описание, комманды и настройки системы для майнинга hiveos"
tags: ["bahs", "watchdog", "hiveos"]
categories: ["devops", "linux", "mining"]
ShowToc: true
TocOpen: false
ShowBreadCrumbs: true
cover:
    hidden: false
    image: "https://beidetirehete.com/ojki/nfxbMIz2L2EKfgavnEQjyQHaEK.jpg"
    alt: "hiveos" # alt text
    caption: "hiveos" # display caption under cover
---

Несколько раз приходилось админить компьютеры с системой для майнинга `Hiveos`.
Из за ее особенностей решил сделать для себя подсказку, если вдруг придется еще
столкнуться.
<!--more-->

## Основные команды shell

Этот список отображается срзу при входе в систему.

```bash
=== Commands FAQ ===
helpme - shows this FAQ. motd [watch] - shows summary info, or live stats and logs
miner [start|stop|restart] - shows running miner screen, or starts/stops/restarts it
agent-screen [restart] - shows Hive client agent screen
selfupgrade [--force] [VER] - upgrade to latest or specified version, i.e. 0.6-65
firstrun -f [URL] - force rig setup, re-enter ID and password, URL is optional
wifi [SSID PASS] - setup WiFi if available
net-test - check network connection to internet and Hive servers
hive-passwd - change system password for ssh/vnc/shellinabox
logs-on | logs-off - keep logs on disk / in RAM (for USB Flash drives)
gpu-fans-find [GPU] - find GPU by spinning fans. GPU index can be specified, i.e. 5
disk-expand - expand system partition to use all available disk space
hpkg [remove miners noinstall] - Hive package manager. Specify option to remove all
hive-replace [--list] - live image replacement tool. Image can be selected from list
nvidia-driver-update [VER] - update to latest or specified version, i.e. 418, 418.88
amd-info | nvidia-info - shows GPU information
```

Еще команды:

| комманда  | действие |
| ----- | --- |
| `gpu-fans-find` `[GPU]` | найти GPU по вращающимся вентиляторам. Можно указать индекс GPU, т.е. 5  |
| `miner` `[start/stop/restart]` | показывает рабочий экран майнера или запускает/останавливает/перезапускает его  |


### Перезагрузка sreboot

В принципе можно и перезагрузить машину коммандами
`reboot now` или `shutdown -r now`. И если в машине нет конфликта видеокарт, она
вполне стандартно перезагружается.

Но все таки лучше использовать команду `sreboot`. Так как перед перезагрузкой или
выключением производится подготовка машины, отмонтирование дисков и прочее шамансво
оберегающее от возможных крашей.

```bash
username@miner:~# sreboot
> Preparing for reboot
> Unmounting disks
> Rebooting

```

Ниже синтаксис:

| комманда  | действие |
| ----- | --- |
| `sreboot`   | just reboots  |
| `sreboot shutdown` | shutdowns  |
| `sreboot wakealarm [timeout]` | shutdowns and sets wake alarm in BIOS to [timeout] (default 30 seconds)  |
| `sreboot -h` / --help | show help  |

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

## Настройка Watchdogs

![watchdog](https://thumb.tildacdn.com/tild6236-3137-4436-b861-653838366138/-/cover/500x500/center/center/-/format/webp/PRO2_PBD_2.jpg)
Настройка USB вотчдогов.

Важная штука, как оказалось. Из за того, что на одной материнской плате используется
большое количество разный видеокарт, да еще некоторые могут включать по нескольку
майнеров сразу. Часто машина может зависнуть и не реагировать ни на какие команды.

Спасением служит только удаленная перезагрузка или "железный" Watchdog подключенный
к usb порту. 

Администраторы hiveos рекомендуют использовать [OpenDev Watchdog](https://open-dev.ru/watchdog),
по той причине, что драйвера к hiveos писали они сами. Как аналог можно еще рекомендовать
Китай, а конкретно [USB WatchDog Lite](https://open-dev.ru/mining/tproduct/230408497-351859668740-usb-watchdog-lite).
Правда в жизни я с ними еще не скалкивался. Похоже майнеры предпочитают не рисковать.

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
из-за неправильного подключения контактов (+/-) на самом вотчдоге и материнской плате.
Решается простой заменой местами контактов.

Тест на правильную работу вотчдога можно следующим образом.
Открываем 2 терминала. В первом пингуем нужную (пример `192.168.1.10`) машину, во втором подключаемся по `ssh`
к машине и выполняем команду `/hive/opt/opendev/watchdog-opendev reset`
Ну, в случае правильного подключения вотчдога, после выполнения команды перезагрузки,
пинг должен пропасть.

```bash
# 1й терминал
ping 192.168.1.10

# 2й терминал
ssh user@192.168.1.10
/hive/opt/opendev/watchdog-opendev reset
```

Так же, при частом использовании полезно создать alias:

```bash
# alias for watchdog-opendev
alias openwd='/hive/opt/opendev/watchdog-opendev'
```

## Полезные ссылки

[Как работать с журналами][hive-os-logs]

[hive-os-logs]: https://hiveon.com/ru/knowledge-base/troubleshooting/logs/ "Журналы майнера"