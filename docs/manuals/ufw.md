---
sidebar_label: "ufw - настройки"

author: stavis
title: "UFW начальная настройка"
description: "Базовая настройка фаервола ufw на сервере"
tags: ["ufw", "config", "manual"]

---
**UFW (Uncomplicated Firewall)** — это не самостоятельный файрвол, а удобная надстройка (frontend) над сетевыми фильтрами Linux (netfilter). Must-have - инструмент который обязан стоять на абсолютно любом сервере (ИМХО).

## 0. Начало

Подразумевается, что на сервере настроен SSH-вход по ключам, кастомный порт и отключен вход по паролю. Как это сделать читать в [статье](https://stavis-dev.github.io/blog/2023/08/24/ssh-config/). 

## 1. Настройка UFW (Uncomplicated Firewall)

### Включаем базовые политики (Запретить всё входящее, разрешить исходящее):
```bash
ufw default deny incoming
ufw default allow outgoing
```

### Добавляем защищённое правило для SSH с лимитом подключений:
```bash
ufw limit proto tcp from any to any port 1234 comment 'SSH rate limit'
```
*✅ Правило разрешает не более 6 подключений в 30 секунд с одного IP*
Внимание: `port 1234` сменить на свой. Установленный для входа

### Блокируем ответ на ping (ICMP Echo Request):

```bash
vim /etc/ufw/before.rules
```

Находим блоки правил `icmp` выглядят они так:

```bash title="/etc/ufw/before.rules"
# ok icmp codes for INPUT  
-A ufw-before-input -p icmp --icmp-type destination-unreachable -j ACCEPT  
-A ufw-before-input -p icmp --icmp-type time-exceeded -j ACCEPT  
-A ufw-before-input -p icmp --icmp-type parameter-problem -j ACCEPT  
-A ufw-before-input -p icmp --icmp-type echo-request -j ACCEPT  
  
# ok icmp code for FORWARD  
-A ufw-before-forward -p icmp --icmp-type destination-unreachable -j ACCEPT  
-A ufw-before-forward -p icmp --icmp-type time-exceeded -j ACCEPT  
-A ufw-before-forward -p icmp --icmp-type parameter-problem -j ACCEPT  
-A ufw-before-forward -p icmp --icmp-type echo-request -j ACCEPT
```

И заменяем этими:

```bash title="/etc/ufw/before.rules"
# ok icmp codes for INPUT
-A ufw-before-input -p icmp --icmp-type destination-unreachable -j DROP
-A ufw-before-input -p icmp --icmp-type time-exceeded -j DROP
-A ufw-before-input -p icmp --icmp-type parameter-problem -j DROP
-A ufw-before-input -p icmp --icmp-type echo-request -j DROP
-A ufw-before-input -p icmp --icmp-type source-quench -j DROP

# ok icmp code for FORWARD
-A ufw-before-forward -p icmp --icmp-type destination-unreachable -j DROP
-A ufw-before-forward -p icmp --icmp-type time-exceeded -j DROP
-A ufw-before-forward -p icmp --icmp-type parameter-problem -j DROP
-A ufw-before-forward -p icmp --icmp-type echo-request -j DROP
```


```bash
sudo ufw deny proto icmp from any to any type echo-request
```

### Включаем фаервол:
```bash
sudo ufw enable
```

### Проверяем статус:
```bash
ufw status verbose
```

## 2. Проверка результата

### Должно отображаться:
```
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
1234/tcp                   LIMIT IN    Anywhere                   # SSH rate limit
1234/tcp (v6)              LIMIT IN    Anywhere (v6)              # SSH rate limit
Anywhere                   DENY ICMP   icmp echo-request
```

### Тестируем ping:

```bash
ping your_server_ip
```
➞ Должен быть `100% packet loss` или `Request timed out`

### Тестируем SSH:
```bash
ssh user@your_server_ip -p 2345
```
➞ Должно быть успешное подключение

## Важные примечания:

1. ✅ Всегда тестируйте новое SSH-подключение перед закрытием текущей сессии
2. ✅ Правило `limit` защищает от брутфорс-атак (макс. 6 попыток/30 сек)
3. ✅ Правило блокировки ping не влияет на исходящие ping-запросы с сервера
4. ✅ Для полной безопасности настройте аутентификацию по ключам и отключите root-логин

## Команды для управления:

```bash
# Посмотреть детализированный статус
ufw status verbose

# Посмотреть правила с номерами (для удаления)
ufw status numbered

# Удалить правило по номеру
ufw delete 2

# Временное отключение фаервола
ufw disable

# Перезагрузка 
ufw disable && ufw enable
```

> **Важно:** Данная конфигурация обеспечивает базовую защиту. Для production-серверов необходимы дополнительные меры безопасности.
