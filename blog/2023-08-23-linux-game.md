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
ssh -p 2220 bandit0.labs.overthewire.org
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

- 8
- TESKZC0XvTetK0S9xNwm25STk5iWrBvP
```

## Решения

Простые уровни я просто пропущу, далее оставлю только те, которые интересны.

### 4 -> 5

```bash
file ./*
```

### 5 -> 6

```bash
find . -type f -size 1033c ! -executable -exec file '{}' \; | grep ASCII
```

### 6 -> 7

> [объяснение](https://mayadevbe.me/posts/overthewire/bandit/level7/)

```bash
find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

