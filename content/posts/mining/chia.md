---
author: Stavis
title: Майнинг монеты chia
date: 2022-01-28
description: Краткая, или не очень инструкция по майнингу монеты chia
tags: ["майнинг", "chia", "linux"]
categories: ["devops", "programing"]
ShowToc: true
TocOpen: false
ShowBreadCrumbs: true
---
## Мониторинг


[Установка чиа][InstallChia]

Ниже Перечисленны команды мониторинга.

|   действие                    | команда        | 
| ----------------------------- |  ------------- |
| Посмотреть подключеня к нодам | `chia show -c` |

## Работа в режиме полной ноды

Хотя бы одна из машин сети чиа должна работать в режиме полной ноды.
Будем считать, что она "Главная" в домашней сети chia.
Для этого на той машине, которая будет так работать следует запусить команду:

```bash
# start node
chia start node
# The answer is: chia_full_node: started

# stop node
chia stop node
# The answer is: chia_full_node: Stopped

# check conection to nodes
chia show -c

# добавить путь к полной ноде:
# Например если в сети есть машина с полной нодйо
# предположим ее адрес 192.168.1.20
chia show -a 192.168.1.20:8444
# The answer is: Connecting to 192.168.1.20, 8444
```

## Работа с программой chia-blockchain

```bash
# See status
chia farm summary

# see wallet 
chia wallet show

# logs
grep ~/.chia/mainnet/log/debug.log -e harvester

tail -F ~/.chia/mainnet/log/debug.log
```

### Проверить все ли в порядке

https://github.com/Chia-Network/chia-blockchain/wiki/How-to-Check-If-Everything-is-Working-(or-Not)#where-to-find-things

### Проверка плотов / chia plots check

```bash
# проверка плотов в конкретной находящихся в конкретной папке /mnt/chia/DriveA
chia plots check -g 01-plots

#Check only k33 plots can use 
chia plots check -g k33

# Check plots created on October 31, 2020 can use 
chia plots check -g 2020-10-31

# проверка дубликатов
chia plots check -l -n 0

# добавить / удалить пути к плотам 
chia plots add/remove -d папка-с-плотами
```

https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference#check

### Харвестр на удаленной машине

Как майнить на многих нескольких машинах можно почитать тут:

[ChiaHarvester][ChiaHarvester]

Пошагово:

Если сертификаты копируются с виндовс машины, то выполнять
**oбязательно выполнять через powersell**, потому как **cmd** не 
понимает линукс команды.

```bash
# 1. копируем с главной машины папку с сертификатами головной машины
tar -cjvf ~/ca.tar.bz2 ~/.chia/mainnet/config/ssl/ca


# 2. активируем дочерние машины (харвестры) сертификатами головной.
chia init -c $HOME/ca

```

```bash
# see config
grep -wn -A 6 "harvester:" ~/.chia/mainnet/config/config.yaml

# запустить демона харвестра
chia start harvester -r

# остановить демона
chia stop harvester

```

## Plotting

Засеивать плоты можно двумя программами.

### Плоттинr новой программой

[репа на гитхабе](https://github.com/madMAx43v3r/chia-plotter)

Установка

1. Проверить версию компилятора `Си`.  

Проверяется командой `cmake --version` нужна от 3.14 и выше.

На моих машинах стят устаревшие версии компилятора, 3.10.
Причем в официальных репах тоже устаревшие. Так что для обновы, нужо
добавить сторонюю репу (я взял репу компании "kitware" - она открытая)
и скачал ее там.

```bash
# Dependencies
# С симейком обычно самые частые затупы.
# На убунтах стоят старые версии, нужна новая.
# Needs at least cmake 3.14 (because of bls-signatures)
# check: cmake --version
# Если версия старая то выполняем:
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates gnupg software-properties-common wget
# добавляем ключ репы
wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | sudo apt-key add -
# добавляем репу и обновляемся
sudo apt-add-repository 'deb https://apt.kitware.com/ubuntu/ bionic main' && sudo apt-get update
```

```bash
sudo apt install -y libsodium-dev

```

### Немного про максимальное засеивание HDD

Вот тут https://plot-plan.chia.foxypool.io есть калькулятор максимального засеивания. Т.е. указываете свой реальный объем диска и он показывает, как эффективно (т.е. каким кол-вом k32, k33 и k34) с максимально занятым местом можно его засеять. В моем случае HDD носит гордое значение 8TB, но реально в Windows доступно 7.27TB (ну знаете все эти 1TB=1000GB, хотя реально 1TB=1024GB), поэтому следует указать реальное значение объема. Соответственно, программка предлагает мне засеять 40*k32 и 13*k33 с эффективностью использования дискового пространства в 99.98% (!!!) или же 66*k32 с эффективностью 98.81% (тоже неплохо)

## Инструкция по командной строке

[Инструкци на гитхаб](https://github.com/Chia-Network/chia-blockchain/wiki/CLI-Commands-Reference)

## go

Небольшое пошаговое руководство по созданию плотов (полей для майнинга)
на монету чиа.

1. Подготовка.

Хорошо, если на машине где будет создаваться плоты будут установленны нужные приложения.

```bash
# установка приложений если их нет.
apt install tmux
apt install git
```

1. Необходимо найти винт с минимум 500 гигабайт места. Хорошо если он будет быстрый.
Но в целом, если нет, то ладно. На простом винте HDD примерно за сутки будет создаваться
1 плот размером 100 гигабайт. Так же для кеша необходимо еще 250 гигабайт места.

```bash
# монтирование винта в систему.
mkdir dplots
lsblk
mount /dev/sdb1 /home/user/dplots
```

```bash
# проверить есть ли гит вообще.
git --version

# склонировать репо чиа и переход в нее
git clone https://github.com/Chia-Network/chia-blockchain.git -b latest
cd chia-blockchain

sh install.sh
. ./activate
```

2. Добавление ключей

```bash
# добавить ключи
chia keys add
# система предложит добавить 24 слова из закрытого ключа
```

3. Создание плотов

```bash
# help
chia plots create -h | less

# exemple
chia plots create -k 32 -b 4000 -r 2 -t /home/user/dplots/temp -d /home/user/dplots/plots -n 2

chia plots create -k 32 -b 5000 -r 2 -t /media/wega/HDDtv/tmp -d /media/wega/HDDtv/plots -n 2
```

## shell

## Виндовс

```powershell
C:\Users\user\AppData\Local\chia-blockchain\app-1.1.4\resources\app.asar.unpacked\daemon

.\chia plots create -k 32 -b 4000 -r 2 -t d:\temp -d d:\plots -n 2
```

## Hpool

Майнинг `chia` на пуле `hpool`.

[Repo](https://github.com/hpool-dev)

Официальный репозиторий. От туда нажно скачать майнер.
[версия chia-v1.3.0-4-linux.zip](https://github.com/hpool-dev/chia-miner/releases/download/v1.3.0-4/HPool-Miner-chia-v1.3.0-4-linux.zip)

[Инструкция по запуску линукс версии](https://goldgamer.medium.com/chia-hpool-linux-tutorial-863cab5a0fbe)

```bash
# Run the miner with
./hpool-miner-chia
```

### Hpool как демон

Как сделать версию для линукс работающую как демон можно почитать [тут](https://www.reddit.com/r/hpoolchia/comments/n76lf8/running_hpoolminerchia_as_a_service_on_linux/)

#### Создаем папку с файлами hpool
If you want to run `hpool-miner-chia` as a background service, follow these steps:

Create a directory to store `config.yaml` and `hpool-miner-chia`.
I use `/opt/hpool-miner-chia`.

#### Создаем файл сервиса.

Создаем файл `hpool-miner-chia.service` со следующим содержимым:

```ini
[Unit]
Description=Farm Chia using HPOOL
StartLimitIntervalSec=0

[Service]
Restart=always
RestartSec=1
WorkingDirectory=/opt/hpool-miner-chia
ExecStart=/opt/hpool-miner-chia/hpool-miner-chia
[Install]
WantedBy=default.target
; WantedBy=multi-user.target
```

#### Варианты демонов

Можно сделать 2 варианта.  
1. Запуск от имени Рута
2. Запуск от имени Юзера

Для первого варианта сервисный файл должен располагаться в системной папке сервисов:

```bash
# user path for daemon
~/.config/systemd/user/

# system path for daemon
/etc/systemd/system/
```

далее обновляем список служб командами ниже.

#### Запуск демона

Для системного вызова

```bash
# Load, enable, and start it:
systemctl daemon-reload
systemctl enable hpool-miner-chia.service
systemctl start hpool-miner-chia.service

# If you want to check the status of the service, run 
systemctl status hpool-miner-chia.service.
```

Для пользовательского вызова просто добавляется ключ `--user`

```bash
# Load, enable, and start it:
systemctl --user daemon-reload
systemctl --user enable hpool-miner-chia.service
systemctl --user start hpool-miner-chia.service

# If you want to check the status of the service, run 
systemctl --user status hpool-miner-chia.service.
```

## Update/Обновления

```bash
cd chia-blockchain
. ./activate
chia stop -d all
deactivate
git fetch
git checkout latest
git reset --hard FETCH_HEAD

# If you get RELEASE.dev0 then delete the package-lock.json in chia-blockchain-gui and install.sh again

git status

# git status should say "nothing to commit, working tree clean", 
# if you have uncommitted changes, RELEASE.dev0 will be reported.

sh install.sh

. ./activate

chia init
```

## chia docker

[Ссылка на докер образ][ChiaDocker]

## Пути к файлам

Блокчейн чиа находится по пути `~/.chia/mainnet`

```bash
# path to blockcain
cd ~/.chia/mainnet

# file of blockchain db
ls -lh ~/.chia/mainnet/db/blockchain_v1_mainnet.sqlite

```

## Проблемы их решения

В какой то момент программа перестала обновлять блокчейн.
Застряв на скачке.
Пошарив на гитхабе в ишьюсах нашел решение.
надо удалить базу пиров.

```bash
# file of p2p address
ls -lh ~/.chia/mainnet/db/peer_table_node.sqlite

# remove this file
rm ~/.chia/mainnet/db/peer_table_node.sqlite
```

## Обновление chia блокчена

```bash
cd ~/chia-blockchain && . ./activate && chia stop -d all
# check if close demon
ps -Af | grep chia

deactivate

# update from git
git fetch
git checkout latest
git reset --hard FETCH_HEAD

# install again
sh install.sh
. ./activate && chia init

```

## Полезные ссылки

- [Подходящие ssd винты](https://github.com/Chia-Network/chia-blockchain/wiki/SSD-Endurance)

- [Гайд на форуме майнинг клаб](https://miningclub.info/threads/skromnyj-post-pro-chia-texnicheskie-nastrojki-nabljudenija-i-vozmozhnye-puti-optimizacii.82301/)

- [Установка чиа][InstallChia]

- [Плотинг на нескольких машинах][ChiaHarvester]

[ChiaReleases]: https://github.com/Chia-Network/chia-blockchain/releases

[InstallChia]: https://github.com/Chia-Network/chia-blockchain/wiki/INSTALL#ubuntudebian

[ChiaHarvester]: https://github.com/Chia-Network/chia-blockchain/wiki/Farming-on-many-machines

[ChiaDocker]: https://github.com/Chia-Network/chia-docker/pkgs/container/chia