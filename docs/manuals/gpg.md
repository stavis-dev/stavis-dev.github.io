---
author: Stavis
title: "GPG работаем с программой"
description: "Шифрование приложеним gpg"
tags: ["gpg"]
categories: ["devops", "linux"]
---

# GPG

Здесь написано о GnuPG, как им пользоваться и при этом понимать, что делаешь.

> В статье идёт речь исключительно о консольном клиенте `gpg`, удобнее всего с ним работать в терминале на `linux/macos` машине.

Официальный сайт GnuPG [здесь](https://www.gnupg.org/), огрызки смыслов в виде официального руководства [здесь](https://www.gnupg.org/gph/en/manual.html), статья в ру-википедии здесь.  

А эта статья адресована техноманьякам, поскольку нормальные люди GnuPG (как и PGP) использовать не будут.

## Шифровка / расшифровка

### Зашифровать файл

```sh
gpg -e -a -r keyname@key.key filename.txt
```

| ключ | Описание |
| --- | --- |
| `-e` | `Encrypt` зашифровать файл |
| `-a` | `ASCII` режим, полезно для техствых файлов |
| `-r` | `recipient name` ключ _пробел_ файл |

### Расшифровать файл

```sh
gpg -d -o (выходной файл) (файл расшифровуемый)
```

| ключ | Описание |
| --- | --- |
| `-d` | `Decrypt` режим расшифровки |
| `-o` | `output` выходной `файл` _пробел_ зашифрованный файл |

Короткая выжимка основных операций. Подробности в разделах ниже.

### Посмотреть список ключей

| Ключ | Команда | Описание |
| --- | --- | --- |
| `-k` | `--list-keys`  | список всех публичных ключей |
| `-K` | `--list-secret-keys` | просмотра приватных ключей |

Команда `--list-keys` или `-k` печатает список всех публичных ключей.  
Для просмотра приватных ключей есть `--list-secret-keys` или `-K` (большая)

```sh
gpg -k
```

## Проверка подписей

Для проверки подписи используется опция `--verify`

Если цифровая подпись интегрирована в файл, то достаточно указать опцию `--verify`, а затем проверяемый файл.

Если файл подписи находится в том же каталоге, указываем названия подписи. обычно `*.asc`

```shell
# подпись встроена в файл
gpg --verify test.php.gpg

# файл подписи в этом же каталоге вроверяемый файл.
gpg --verify test.php.asc
```

Если цифровая подпись отделена от файла, то после опции `--verify` нужно указать два аргумента: _вначале идёт файл с подписью_, а затем _подписанные данные_:

```shell
gpg --verify (файл с сигнатурой) (проверяемый файл)
```

Если есть файл ключ, то можно добавить его `--keyring (путь к ключу)`

```shell
gpg --verify --keyring (путь к ключу) (файл с сигнатурой) (проверяемый файл)
```

## Импорт / экспорт

| Команда | Описание |
| --- | --- |
| `--export`  | экспорт публичных ключей `>` в файл |
| `--export-secret-key` | эспорт приватных ключей `>` файл |

Пример экспорта публичного ключа `-a` в  `ASCII` формате.

```shell
gpg --export -a key@mail.com > public.gpg
```

Пример экспорта приватного ключа `-a` в `ASCII` формате.

```shell
gpg --export-secret-key -a key@mail.com > secret.gpg
```

В результате будет создан файл `public.gpg` / `secret.gpg`

For import use `--import`

```shell
# import public key
gpg --import public.gpg

# import secret key
gpg --import secret.gpg
```

## Config

```conf
echo "keyid-format 0xlong
throw-keyids
no-emit-version
no-comments" > ~/.gnupg/gpg.conf
```

## Полезное дополнительное чтиво

Как проверить цифровую подпись Tor Browser?

- [https://support.torproject.org/ru/tbb/how-to-verify-signature/](https://support.torproject.org/ru/tbb/how-to-verify-signature/)

- Как пользоваться gpg [https://hackware.ru/?p=8215](https://hackware.ru/?p=8215)
- [man](https://manpages.org/gpg) gpg
- [Шифруем файлы и пароли аки Царь с GPG и Pass!](https://www.youtube.com/watch?v=I2mwqC6HGGE)  Диджитализируй
- [GPG. Шифрование. Как правильно шифровать данные](https://www.youtube.com/watch?v=2CwsoGw2coc) Johe News

