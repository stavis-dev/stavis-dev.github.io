---
sidebar_label: "ffmpeg - видео-фабрика"

author: stavis
title: "Как пользоваться ffmpeg"
description: "Разбираемся в утилите и наборе библиотек ffmpeg, как установить, использовать, научиться"
tags: ["ffmpeg", "education"]
image: "https://losst.pro/wp-content/uploads/2016/09/ffmpeg5.png"

---

![](https://losst.pro/wp-content/uploads/2016/09/ffmpeg5.png)

[FFmpeg](https://ffmpeg.org/) — набор свободных библиотек с открытым исходным кодом, которые позволяют записывать, конвертировать и передавать цифровые аудио- и видеозаписи в различных форматах.

`ffmpeg` - это мультимедийный фреймворк, который содержит в себе различные инструменты для решения разнообразных задач. Например:

- `ffplay` является портативным медиаплеером, 
- `ffserver` - утилитой для потоковой передачи данных,
- `ffprobe` может использоваться для анализа мультимедийных потоков.
- `ffmpeg` может обрабатывать и конвертировать мультимедийные файлы.

Набор инструментов ffmpeg включает в себя не только утилиты, но и библиотеки: libavutil, libavcodec, libavformat, libavdevice, libavfilter, libavresample, libswscale, libswresample, libpostproc. Благодаря своей архитектуре, этот набор является очень безопасным и позволяет делать почти все, что угодно, с видео и аудио. В этой статье мы будем рассматривать синтаксис основного инструмента — ffmpeg.

## Информация о видео

Команда для получения доступной информации о видео, указанного в файле источника, в ffmpeg может выглядеть следующим образом:

```bash
ffprobe -i source_file -hide_banner
```

вместо утилиты `ffprobe` можно использовать `ffmpeg`.

| Опции | Описание |
| --- | --- |
| `-i` | означает входной файл. |
| `-hide_banner` |  указывает программе, что не нужно показывать информацию о себе. |
| `source_file` | путь к исходному файлу. |

вывод будет примерно такой.

```bash
user@linux:/media/rick.and.morty/season.06# ffprobe -i Rick.and.Morty.S06E01.avi -hide_banner
Input #0, avi, from 'Rick.and.Morty.S06E01.avi':
  Metadata:
    encoder         : VirtualDubMod 1.5.10.3 | www.virtualdub-fr.org || (build 2550/release)
  Duration: 00:22:25.26, start: 0.000000, bitrate: 3167 kb/s
    Stream #0:0: Video: mpeg4 (Advanced Simple Profile) (XVID / 0x44495658), yuv420p, 720x400 [SAR 1:1 DAR 9:5], 1799 kb/s, 23.98 fps, 23.98 tbr, 23.98 tbn, 23.98 tbc
    Stream #0:1: Audio: ac3 ([0] [0][0] / 0x2000), 48000 Hz, 5.1(side), fltp, 384 kb/s
    Stream #0:2: Audio: ac3 ([0] [0][0] / 0x2000), 48000 Hz, stereo, fltp, 192 kb/s
    Stream #0:3: Audio: ac3 ([0] [0][0] / 0x2000), 48000 Hz, 5.1(side), fltp, 384 kb/s
    Stream #0:4: Audio: ac3 ([0] [0][0] / 0x2000), 48000 Hz, 5.1(side), fltp, 384 kb/s
```

## Ключи

| Опции | Описание |
| --- | --- |
| `-map_metadata:c -1` | не копировать метадату. |
| `-map_chapters -1` | не копировать части (главы). |
| `-disposition:s default` | отключить дорожку по умолчанию. |



## Конвертация форматов

### H.264

Самый популярный, `mpeg` контейнер, поддерживается большинством устройств.
Иногда большие файлы.

[H.264 - wiki](https://ru.wikipedia.org/wiki/H.264)

```bash

```

### VP9

Возможно следующий массовый формат после ухода `H.264`
сейчас поддерживается гуглом. Вроде бы в интернетах его хвалят.

- Аудиокодек - `Opus`
- Контейнер - `WebM`

Рекомендуется выполнять двухпроходной командой:

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -pass 1 -an -f null NUL && ^
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -pass 2 -c:a libopus output.webm
```

### AV1

По словам перспективный суперкодек. В теории может многое.  
На практике сжимает так долго, что я не выдержал.
По словам еще сырой и большинство железа его не поддерживаеют,  
по этому работать будет медленно.


```bash
ffmpeg -i input.mp4 -c:v libaom-av1 -crf 30 -b:v 2000k output.mkv

# Еще вариант
ffmpeg -i input.mp4 -c:v libaom-av1 -strict -2  -crf 30 -b:v 2000k output.mkv
ffmpeg -i input.mp4 -c:v libaom-av1 -strict -2 -crf 30 -b:v 0 -movflags +faststart output.mp4
```

```python
stream = ffmpeg.input('input.mp4')
stream = ffmpeg.output(stream, 'output.mp4', vcodec='libaom-av1', acodec='libopus', strict='-2')
```

Пока лучше не использовать.

### GIF

Сделать из фрагмента видео гифку:

```bash
input="filename.webm"
ffmpeg -y -i $input -vf palettegen palette.png
ffmpeg -y -i $input -i palette.png -filter_complex paletteuse -r 10 out.gif
```

## Обрезка видео

Пример обрезки видеоролика (trims video)

```bash
ffmpeg -ss 38:19 -to 41:03 -i "Моана.(2016).webm" -c copy "You're Welcome.ru.webm"
```

```bash
 ffmpeg -ss 00:01:00 -to 00:02:00  -i input.mp4 -c copy output.mp4
```

#### Объяснение команды

| Опции | Описание |
| --- | --- |
| `-i` | Указывает входной файл. В таком случае это (input.mp4). |
| `-ss` | Used with -i, this seeks in the input file (input.mp4) to position. |
| `00:01:00:` | This is the time your trimmed video will start with. |
| `-to` | This specifies duration from start (00:01:40) to end (00:02:12). |
| `00:02:00:` | Это время, когда ваше обрезанное видео закончится. |
| `-c copy` | Это вариант обрезки через потоковое копирование. (NB: Very fast) |

Формат времени следующий: hh:mm:ss

Для получения дополнительной информации посмотрите этот официальный ffmpeg [article](https://trac.ffmpeg.org/wiki/Seeking#Cuttingsmallsections).


## Разрешение видео

Изменение разрешения картинки (`скейл`, `scale`) видеоролика.

[статья](https://trac.ffmpeg.org/wiki/Scaling)

```bash
ffmpeg -i input.mp4 -vf scale=960:-1 scale-960.mp4
```

## Маркировки, подписи.

### title

Простая подпись всего файла, **контейнера** `webm` или `mp4`

```bash
ffmpeg -i input.mp4 -metadata title="The video film" -c copy output.mp4
```

Подписи, же к отдельным дорожкам "стримам" внутри файла. Производится добавлением тайтла конкретно к стриму

```bash
ffmpeg -i input.mkv -metadata:s:v:0 title="H264 Video" -c:v copy -c:a copy -c:s copy Output.mkv
```

### lang

Маркировка языка для аудиодорожек

I think `:s:v:0` some of the comments stands for:

- `:v` = Video stream
- `:0` = Use first video stream

```bash
ffmpeg -i input.mp4 -map 0 -c copy -metadata:s:a:0 language=pol output.mp4
```

## Склеить аудио и видео вместе

Существует возможность собрать видео и звуковой файл в один с помощью команды:

```bash
ffmpeg -i audio.opus -i video.webm  -c copy mix_video.webm
```

Если при этом не будет происходить конвертации форматов следует добавить опцию `-c copy`, так склейка будет проходить быстрей.

## Ссылки

- [Как пользоваться ffmpeg](https://losst.pro/poleznye-komandy-ffmpeg)
- [Python обертка для ffmpeg](https://github.com/kkroening/ffmpeg-python)
- [Как работает -map в ffmpeg](https://write.corbpie.com/understanding-ffmpeg-map-with-examples/)
