---
title: "DevOps игра Bandit"
description: "Мое прохождение linux игры Bandit"
authors: stavis
# image: https://d66cvws976y93.cloudfront.net/media/uploads/zinnia/2016/11/21/first_step.jpg
tags: ["DevOps", "bandit"]

---
Начал играть в игру «Bandit» от Overthewire.

Сюжет такой: Ты подключаешься к удаленной машине и в изолированном пространстве ищешь ключ для подключения к следующей машине, используя рекомендации на сайте. В описании практически каждого уровня имеется список команд, которые тебе могут пригодиться.

Устанавливать ничего не надо, заходишь на [сайт](https://overthewire.org/wargames/bandit/bandit0.html), выбираешь Level 0 и читаешь условия задачи. Затем подключаешься физически по ssh к серверу и начинаешь игру.

<!--truncate-->

```bash
ssh -p 2220 bandit0@bandit.labs.overthewire.org
```

Пароль:

```bash
bandit0
```

## Прохождение

```bash
- 1
- NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL

- 2
- rRGizSaX8Mk1RTb1CNQoXTcYZWU6lgzi

- 3
- aBZ0W5EmUfAf7kHTQeOwd8bauFJ2lAiG

- 4
- 2EW7BBsr6aMMoJ2HjW067dm8EgX26xNe

- 5
- lrIWWI6bB37kxfiCQZqUdOIYfr6eEeqR

- 6
- P4L4vucdmLnm8I7Vl7jG1ApGSfjYKqJU

- 7
- z7WtoNQU2XfjmMtWA8u5rN4vzqu4v99S

ssh -p 2220 bandit8@bandit.labs.overthewire.org
# TESKZC0XvTetK0S9xNwm25STk5iWrBvP

# 9
ssh -p 2220 bandit9@bandit.labs.overthewire.org
# EN632PlfYiZbn3PhVK3XOGSlNInNE00t

# 10


```

## Решения

Простые уровни я просто пропущу, далее оставлю только те, которые интересны.

### 05

```bash
file ./*
```

### 06

```bash
find . -type f -size 1033c ! -executable -exec file '{}' \; | grep ASCII
```

### 07

> [объяснение](https://mayadevbe.me/posts/overthewire/bandit/level7/)

```bash
find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

### 09 

> The password for the next level is stored in the file data.txt and is the only line of text that occurs only once.

```bash
# sort для сортировки строк, uniq подсчитывает только повторяющиеся строки рядом
# uniq -u  -u (--unique) — выводит исключительно те строки, у которых нет повторов.
sort data.txt | uniq -u
```

### 10

```bash
ssh -p 2220 bandit9@bandit.labs.overthewire.org
# EN632PlfYiZbn3PhVK3XOGSlNInNE00t
```

> The password for the next level is stored in the file data.txt in one of the few human-readable strings, preceded by several ‘=’ characters.

> Пароль для следующего уровня хранится в файле data.txt в виде одной из немногих удобочитаемых строк, которым предшествуют несколько символов «=».

Решение:

> Нужно просмотреть текст внутри двоичного файла или файла данных? Команда Linux strings извлечет и выведет на терминал биты текста, которые называются "строками".

```bash
bandit9@bandit:~$ grep "===" data.txt 
grep: data.txt: binary file matches
bandit9@bandit:~$ strings data.txt | grep "==="
4========== the#
========== password
========== is
========== G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s
```

### 11

```bash
ssh -p 2220 bandit10@bandit.labs.overthewire.org
# G7w8LIi6J3kTb8A7j9LgrywtEUlyyp6s
```

> The password for the next level is stored in the file data.txt, which contains base64 encoded data

> Пароль для следующего уровня хранится в файле data.txt, который содержит данные в кодировке Base64.

Решение:

```bash
bandit10@bandit:~$ ls
data.txt
bandit10@bandit:~$ cat data.txt 
VGhlIHBhc3N3b3JkIGlzIDZ6UGV6aUxkUjJSS05kTllGTmI2blZDS3pwaGxYSEJNCg==

# -d or --decode
bandit10@bandit:~$ base64 -d data.txt 
The password is 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM
```

### 12

```bash
ssh -p 2220 bandit11@bandit.labs.overthewire.org
# 6zPeziLdR2RKNdNYFNb6nVCKzphlXHBM
```

> The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

> Пароль для следующего уровня хранится в файле data.txt, где все строчные (a-z) и прописные (A-Z) буквы повернуты на 13 позиций.

Решение:

> 13 позиций от английской А - это N

```bash
bandit11@bandit:~$ ls
data.txt
bandit11@bandit:~$ cat data.txt 
Gur cnffjbeq vf WIAOOSFzMjXXBC0KoSKBbJ8puQm5lIEi
bandit11@bandit:~$ cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
The password is JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv
```

### 13

```bash
ssh -p 2220 bandit12@bandit.labs.overthewire.org
# JVNBBFSmZwKKOP0XbFXOoW8chDz5yVRv
```

> The password for the next level is stored in the file data.txt, which is a hexdump of a file that has been repeatedly compressed. For this level it may be useful to create a directory under /tmp in which you can work using mkdir. For example: mkdir /tmp/myname123. Then copy the datafile using cp, and rename it using mv (read the manpages!)

> Пароль для следующего уровня хранится в файле data.txt, который представляет собой шестнадцатеричный дамп неоднократно сжатого файла. На этом уровне может оказаться полезным создать каталог в /tmp, в котором вы сможете работать с помощью mkdir. Например: mkdir/tmp/myname123. Затем скопируйте файл данных с помощью cp и переименуйте его с помощью mv (читайте man-страницы!)

Решение:

[подсказка](https://mayadevbe.me/posts/overthewire/bandit/level13/)

> ?

```bash

```