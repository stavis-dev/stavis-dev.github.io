---
title: "dotfiles"
description: "Наводим порядок в файлах настроек"
authors: stavis
# image: https://d66cvws976y93.cloudfront.net/media/uploads/zinnia/2016/11/21/first_step.jpg
tags: ["dotfiles", "linux", "chezmoi"]

---
Проблема с синхронизацией настроек своих приложений, уже начала напрягать.  
Часто работаю на разных машинках. И файлы настроек у меня просто расположены в папке `.dotfiles`
Откуда я просто прокидываю симлинки.
Но честно говоря поднадоело, для синхроницации винды, мака и линукса приходится много "говнокодить", тоесть печатать ручками.

В общем ищу утилиту для простой синхронизации и управления файлами.

- [статья](https://wiki.archlinux.org/title/Dotfiles) для начала
    - [chezmoi](https://www.chezmoi.io/) написан на go - приложение с 9к звезд [repo](https://github.com/twpayne/chezmoi)
        - обхяснение работы программы на [youtube](https://youtu.be/JrCMCdvoMAw?si=6YCD5Tn5LaioGnko) канале автора.
    - [dotbot](https://github.com/anishathalye/dotbot) - python - 6k звезд

не смотря на то, что я предпочитаю python, все же думаю поработать с `chezmoi`

## Установка

```bash
pacman -S chezmoi
```

Далее если мы планируем работать на нескольких разных компьютерах, следует проинициализировать репозиторий с которым будет работать `chezmoi`

Например:

```bash
chezmoi init https://github.com/$GITHUB_USERNAME/dotfiles.git
```

По умолчанию папка с бекапами будет расолагаться по пути `~/.local/share/chezmoi/`

Переходим в папку используя `chezmoi`:

```bash
chezmoi cd
```

По сути выполнится команда:

```bash
cd ~/.local/share/chezmoi/
```

## Ссылки

- короткая русская статья на [хабре](https://habr.com/ru/articles/585578/)

### Репозитории для примеров

- [repo](https://github.com/twpayne/dotfiles/tree/master) с `dotfiles` автора программы
- другие [репозитории](https://github.com/topics/chezmoi?o=desc&s=updated) работающие через `chezmoi`

- [repo](https://github.com/SimonWoodtli/dotfiles/tree/main) с `dotfiles` от SimonWoodtli
    - много интересных bash скриптов