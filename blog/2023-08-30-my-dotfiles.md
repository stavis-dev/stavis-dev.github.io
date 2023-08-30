---
title: "dotfiles"
description: "Наводим порядок в файлах настроек"
authors: stavis
# image: https://d66cvws976y93.cloudfront.net/media/uploads/zinnia/2016/11/21/first_step.jpg
tags: ["dotfiles", "linux"]

---
Проблема с синхронизацией настроек своих приложений, уже начала напрягать.  
Часто работаю на разных машинках. И файлы настроек у меня просто расположены в папке `.dotfiles`
Откуда я просто прокидываю симлинки.
Но честно говоря поднадоело, для синхроницации винды, мака и линукса приходится много "говнокодить", тоесть печатать ручками.

В общем ищу утилиту для простой синхронизации и управления файлами.

- [статья](https://wiki.archlinux.org/title/Dotfiles) для начала
    - [chezmoi](https://www.chezmoi.io/) написан на go - приложение с 9к звезд [repo](https://github.com/twpayne/chezmoi)
    - [dotbot](https://github.com/anishathalye/dotbot) - python - 6k звезд

не смотря на то, что я предпочитаю python, все же думаю поработать с `chezmoi`

## Установка

```bash
pacman -S chezmoi
```

