---
sidebar_label: "adb - команды"

author: stavis
title: "Как пользоваться adb"
description: "Как работать с телефоном через adb, как установить, использовать, научиться"
tags: ["adb", "education"]

---

Adb набор утилит для работой с телефоном  `android` через консоль.  
Иногда проще работать через нее, чем искать нужную настройку или приложение, пальцем в телефоне.

Для начала полезная команда получения данных с телефона `adb shell getprop`. Например версию андроида получаем по имени `ro.build.version.release`.

```bash
adb shell getprop ro.build.version.release
```


## adb shell

Передает доступ к `shell` телефона. Как правило во всех андроидах `shell` просто `/bin/sh`

В общем, чтобы получить доступ, вбиваем просто.

```bash
adb shell 
```

в `shell` можно использовать практически все команды и утилиты работающие в unix системах. `ls`, `cd`, 
Отправка на телефон файлов выполняет команда `push`
На андроид телефонах папка *Download* располагается по пути `/sdcard/Download`

```bash
adb push somefile /sdcard/Downdload
```

## shell pm

`pm` - _Package manager (package) commands:_ работающий в `shell` менеджер приложений `android` телефона.

> Инструкция по: [pm команде][package-manager]

### pm list packages

Посмотреть список всех установленных приложений на телефоне можно командой: `pm list packages`. Если мы уже находимся в `shell`. Иначе предварительно прокидываем `adb shell`

```bash
adb shell 'pm list packages'
```
#### Опции list packages

| Опции | Отображение |
| --- | --- |
| `-d` | `disabled` только заблокированные приложения. |
| `-e` | `enabled` только включенные приложения. |
| `-3` | `third party` только сторонние приложения. |
| `-s` | `system` только системные приложения. |

#### Примеры list packages

Изначально вывод включает слово `package:` убрать этот вывод можно командой `sed`

```bash
adb shell 'pm list packages' | sed 's/.*://g'
```

Для удобства можно использовать пайпы с сортировкой и передачей в `less` для подробного анализа.

```bash
adb shell 'pm list packages' | sed 's/.*://g' | sort | less
```

Посмотреть список заблокированных приложений можно используя ключ `-d`:

```bash
adb shell 'pm list packages -d' | sed 's/.*://g' | sort
```

### Очистка apk

Очистка данных приложения.

```bash
pm clear com.google.android.youtube
```

### Блокировка / разблокировка apk

```bash
# блокировка приложения
adb shell pm disable-user app.package.name

# разблокировка выполняется командой.
adb shell pm enable app.package.name

## например заблокировать приложение youtube
## блокируются даже системные apk
adb shell pm disable-user com.google.android.youtube

```

### Удаление apk

С помощью такой же процедуры можно удалять программы совсем. Пример команды для удаления youtube:

```bash
# предварительная очистка приложения
adb shell pm clear com.google.android.youtube

# удаление приложения 
adb shell pm uninstall com.google.android.youtube

## если вылетает ошибка Failure [DELETE_FAILED_INTERNAL_ERROR] то:
adb shell pm uninstall --user 0  com.google.android.youtube
```

```bash
adb shell am start -a android.intent.action.UNINSTALL_PACKAGE -d "package:com.google.android.youtube"
## или 
adb shell am start -n com.android.packageinstaller/.UninstallerActivity -d "package:com.google.android.youtube"
```

вызывает диалоговое окно удаления, но если приложение системное, то удаления не произойдет. Вылелит сообщение, "не удалось удалить приложение...."

## Остановить приложение

```bash
adb shell am force-stop com.apk.name
```

## Полезности adb

### Docker-android

[Эмулятор android в образе докер][docker-android]

```bash
# Пример с гитхаба
docker run --privileged -d -p 6080:6080 -p 5554:5554 -p 5555:5555 -e DEVICE="Samsung Galaxy S6" --name android-container budtmo/docker-android-x86-8.1

# С автоудалением образа
docker run --privileged --rm -d -p 6080:6080 -p 5554:5554 -p 5555:5555 -e DEVICE="Samsung Galaxy S6" --name android-container budtmo/docker-android-x86-8.1
```

### scrcpy

По моему мнению лучшая программа управлением `android` устройствами. Скачать можно в [репе](https://github.com/Genymobile/scrcpy) приложения на гитхаб.

#### Установка

```bash
# linux
apt install scrcpy

# mac
brew install scrcpy
```

#### Подключение

```bash
adb connect 192.168.43.141
scrcpy -s 192.168.43.141:5555
```

## Списки приложений

Так как сам использую телефон `xiaomi`, буду писать про них. Телефоны хороши в плане цены и характеристик, но имеется огромный минус с диким жором батареи, памяти, рекламы и кучей предустановленного софта. Который порой даже не скрывает своей "следящей" сущности.

В избавится от проблем штатным удалением или блокировкой не получается, прошивка не позволяет.

Приходится либо использовать кастомные прошивки, либо юзать `adb - Android Debug Bridge` через USB кабель или `WIFI`

### Нельзя удалять

:::danger Внимание

Ниже приведенный список приложений, ни в коем случае не удалять с телефонов `xiaomi`.  
Проблемы и их описание могут отсутствовать.

:::

| Приложение | Результат |
| --- | --- |
| `com.xiaomi.finddevice` |	бесконечный цикл загрузки, через некоторое время попросит стереть телефон и начать заново. Угадайте, как я этому научился? |
| `com.miui.securitycenter` | телефон перезагружается только в режиме рекавери |
| `com.android.contacts` | вы теряете значок телефона |
| `com.mi.android.globalminusscreen` | если вы вошли в систему с учетной записью Mi, устройство блокируется, для разблокировки необходимо принести его в сервисный центр Xiaomi. |


> Взято [тут](https://selivan.github.io/2020/02/25/removing-bloatware-from-xiaomi-miui-android.html)

### Можно блокировать

```bash
com.miui.powerkeeper
com.android.browser
com.android.emergency
com.android.dreams.phototable
```

### Можно удалять

| Приложение | Роль |
| --- | --------- |
| `com.miui.analytics` |	Аналитика miui |
| `com.xiaomi.joyose` | Какой то хлам |
| `com.xiaomi.mipicks` | GetApps — магазин приложений наподобие Google Play от Xiaomi. Самый раздражающий, периодически показывает рекламу. |
| `com.mi.android.globalminusscreen` | Рекламные службы MIUI — также отвечают за показ рекламы.  |
| `com.miui.cloudservice`, `com.miui.cloudservice.sysbase`, `com.miui.newmidrive` | Рекламные службы MIUI — также отвечают за показ рекламы.  |

```bash
com.miui.analytics
com.xiaomi.mipicks
com.miui.translation.youdao
```

## Ссылки

- Официальный [хелп][package-manager] по ADB
- Тема на `4pda` форуме, где собран [список](https://4pda.to/forum/index.php?showtopic=921645&st=0#entry77962469) приложений которые можно удалить в `MIUI`
- Синтаксис команды [list packages](https://gist.github.com/davidnunez/1404789#gistcomment-3184514)
- Хорошая [статья](https://selivan.github.io/2020/02/25/removing-bloatware-from-xiaomi-miui-android.html) в англ. интернете по `xiaomi` софту
- Репа [scrcpy](https://github.com/Genymobile/scrcpy)
- [Эмулятор][docker-android] android в образе докер

[package-manager]: https://developer.android.com/studio/command-line/adb#pm "Package manager"
[docker-android]: https://github.com/budtmo/docker-android "Githud docker-android"
