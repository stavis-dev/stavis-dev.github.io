---
author: Stavis
date: "2022-12-24"

title: "yt-dlp управление"
description: "yt-dlp как работать с программой"
tags: ["yt-dlp", "youtube-dl"]
categories: ["soft", "linux"]
ShowToc: true
TocOpen: false
ShowBreadCrumbs: true
cover:
  hidden: true
  image: "nvim.png"
  alt: "vim панель" # alt text
  caption: "Vim управление" # display caption under cover
---

## скачивание только mp3 с youtube

Пример с линуксами.

```bash
yt-dlp --embed-thumbnail --extract-audio --audio-format mp3 -o '%(title)s.%(ext)s' https://youtu.be/VFwmKL5OL-Q
```

--parse-metadata "title:%(artist)s - %(title)s"



## links
Официальный [репозиторий][Repoyt-dlp]

[RepoGithub]: https://github.com/ytdl-org/youtube-dl
[Offsite]: http://ytdl-org.github.io/youtube-dl/
[Repoyt-dlp]: https://github.com/yt-dlp/yt-dlp
