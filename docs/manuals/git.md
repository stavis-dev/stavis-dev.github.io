---
sidebar_label: "git - порядок в коде"

author: stavis
title: "Работаем с git"
date: "2023-07-03"
description: "git конфигурация, команды, работа в гите"
tags: ["git", "education"]

---
# Краткая инструкция по git

Гит без воды на канале ADV-IT

[Основы Git, GitHub и GitHub Actions](https://www.youtube.com/playlist?list=PLg5SS_4L6LYstwxTEOU05E0URTHnbtA0l)

## Git

Обычный алгоритм работы с гитом, если все норм.

1. Проверяем изенения в рабочей папке `git status`
2. Добавляем измененые файлы в гит наблюдение `git add .` (or) `git add *`
3. Комитим изменения `git commit -m "bla bla"`
    - Добавление к предыдущему комиту - `git commit --amend`
5. Отправка на удаленный репозиторий `git push`

## Клонирование

```bash
git clone <url_git_repo>
```

## Удаление git

Удаление файлов из репозитория или наблюдения. 

### Удаление файлов из git репозитория

```bash
# Удалить из гита из из файловой системы
git rm file1.txt
git commit -m "remove file1.txt"
```

Удаление из наблюдения гит, но оставить в папке.
Как пример нужно для использования с генераторами сайтов.
Типа `jekill` или `pelikan`.

В репозитории не нужна папка с готовым, уже сгенерированным
сайтом, но он нужен локально.

```bash
# удалить из отслеживания в гит но оставив при этом в папке
git rm --cached file1.txt
git commit -m "remove file1.txt"
```

### Удаление ветки

```bash
# Удалить из remote гита ветки dev
git push origin --delete dev

# удалить из гита но оставив при этом в папке
git rm --cached file1.txt
git 
```

## Конфигурация

Отобразить текущие настройки `git` можно командой `git config -l`

```bash
# Отобразить текущие настройки git
git config -l
```

```bash
git config --global user.name "Name of user"
git config --global user.email "user.name@email.mail"

# Сменить редактор по умолчанию на **vim**
git config --global core.editor "nvim"

# Добавить глобальный файл игнора
git config --global core.excludesFile '~/.gitignore'

# Выводить команду git branch в стиле "ls", а не "less"
git config --global pager.branch false
```

## Ветвления Branch

[Git - Создание и работа с Ветвлениями - Branch](https://www.youtube.com/watch?v=4CSumcSLR14&list=PLg5SS_4L6LYstwxTEOU05E0URTHnbtA0l&index=11)

Особенно удобно для совместной работы в комманде.

Посмотреть все ветки и в какой конкретно ветке я
нахожусь в текущий момент можно командй `git branch`

```bash
user:~/Documents/knowledge-base:ubuntu$ git branch
  main
* ubuntu
```

знак звездочки `*` показывает ветку в которой я нахожусь.

Создание веток производится командой `git branch`,
а переключение между ветками `git checkout`. Так же
есть способ создать ветку и тут же на нее переключиться. Для
этого используетсчя ключ `-b` в `git checkout`.

например:

```bash
# создаем отдельную ветку ubuntu
git branch ubuntu

# удалить ветку ubuntu
git branch -d ubuntu

# переключаемся на ветку ubuntu
git checkout ubuntu

# создаем отдельную ветку ubuntu и тут переходим на нее
git checkout -b ubuntu
```

Для удаленных репозиториев:

```bash
# Retrieve available remote branches
git fetch

# Verify that all branches are now available on the local Git repository
git branch --all

# Закачать бранч с удаленной ветки
# git checkout <название уделнной ветки без origin/>
# например для origin/dev
git checkout dev

```

## Слияния веток merge

Основная команда `git merge`.

## Подмодули Submodules

Основная [статья][git-submodules]

### Инициация и обновление подмодулей в репозитории

```bash
# Инициация подмодулей (например после клонирования)
git submodule init

# Обновлени подмодулей (например после клонирования)
git submodule update

# Обьединенная команда (выполняет приведенные выше действия)
git submodule update --init
```

Если в репозитории сложная структура с подмодулями внутри подмодулей.  
Команду нужно выполнять рекурсивно `git submodule update --init --recursive`.  

Групповая команда для всех подмодулей `foreach`

```bash
# переключить все подмодули на ветку feature
git submodule foreach 'git checkout -b feature'
```
## Сервера git

... или работа с удаленными репозиториями, тут не имеется в виду понятие "удалить". Правильно понимать слово как "находящийся на удалении" от пользователя.

> **Удалённые репозитории** представляют собой версии вашего проекта, сохранённые в интернете или ещё где-то в сети.


### Посмотреть url сервера

```bash
git remote -v
# View existing remotes
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)
```

### Смена удаленного репозитория

```bash
git remote set-url origin https://github.com/user/repo2.git
# Change the 'origin' remote's URL
```

## Фишки

Трики и фишки git и github.com

### Трекинг папок

По умолчанию `git` не может отправлять пустые каталоги. Он может только отслеживать файлы.
Если необходимо чтобы `git` трекал их в нее следует добавить файл `.gitkeep` — это обычное явление в базах кода, 
где пустую папку необходимо отслеживать через Git.

### lazygit

Как правило, процесс добавление файлов в git отслеживания `git add .`, последующий
коммит `git commit -m 'bla bla` ну и последующая отправка в удаленный репо 
`git push` выглядит уж очень занудно.  
В общем все эти команды можно сложить в одну `bash` функцию.

```bash
function lazygit() {
    git add .
    git commit -a -m "$1"
    git push
}
```

Этот скрипт слудует добавить в `.bashrc` (or `.bash_profile` if Mac):  
После этого можно использовать имя функции.

```bash
lazygit "My commit msg"
```

### Скачивание файлов gist с github

Если надо получить прямую ссылку для скачивания файлов с репозиториев `github` файлов с `gist`. Например через `wget` или `curl`

URL следует формировать таким образом если нужна конкретная версия комита:

```bash
https://gist.githubusercontent.com/{user}/{gist_hash}/raw/{commit_hash}/{file}
```

Если нужна ссылка на последнюю версию гиста, формирование ссылки делать так:

```bash
https://gist.githubusercontent.com/{user}/{gist_hash}/raw/{file}
```

Посмотреть вывод `api` можно обратившись по адресу:

```bash
https://api.github.com/gists/{GIST_ID}
```

## Ссылки

[git-submodules]: https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git-%D0%9F%D0%BE%D0%B4%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8

