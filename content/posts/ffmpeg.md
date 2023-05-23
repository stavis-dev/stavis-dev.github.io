---
title: "ffmpeg быстро и просто"
author: Stavis Vega
date: "2023-02-11"
description: "Быстрые команды для проиложения ffmpeg"
tags: ["terminal", "ffmpeg"]
categories: ["devops", "linux"]
# aliases: [""]
ShowToc: true
TocOpen: true
math: true
cover:
    hidden: true
    image: "https://www.preining.info/blog/wp-content/uploads/2022/11/ffmpeg-tips-and-tricks-1024x538.jpg"
    alt: "ffmpeg logo" # alt text
    caption: "FFmpeg" # display caption under cover
---

Памятка по работе со свободной программой для конвертации видео ffmpeg.

<!--more-->
## Конвертация форматов

### Конвертация видео формата `mov`, `avi` в `mp4`!

> Флаги коммандной строки

| Flag | Options | Description |
| ---- | ------- | ----------- |
| `-codec:a` | aac, libfaac, libfdk_aac, libvorbis | Audio Codec |
| `-quality` | best, good, realtime | Video Quality |
| `-b:a` | 128k, 192k, 256k, 320k | Audio Bitrate |
| `-codec:v` | mpeg4, libx264, libvpx-vp9 | Video Codec |
| `-b:v` | 1000, 2500, 5000, 8000 | Video Bitrate |
| `-vf scale` | -1:X | Resize Video (X is height) |
| `-qmin 10 -qmax 42` | ??? | https://gist.github.com/dvlden/b9d923cb31775f92fa54eb8c39ccd5a9#gistcomment-2972745 |

###### MP4 - универсальная комманда

```sh
ffmpeg -i input.mov -codec:a aac -codec:v libx264 output.mp4
```

###### MP4 - 1080p

`ffmpeg -i input.mov -preset slow -codec:a libfdk_aac -b:a 128k -codec:v libx264 -pix_fmt yuv420p -b:v 4500k -minrate 4500k -maxrate 9000k -bufsize 9000k -vf scale=-1:1080 output.mp4`

###### MP4 - 720p

`ffmpeg -i input.mov -preset slow -codec:a libfdk_aac -b:a 128k -codec:v libx264 -pix_fmt yuv420p -b:v 2500k -minrate 1500k -maxrate 4000k -bufsize 5000k -vf scale=-1:720 output.mp4`

###### MP4 - 480p

`ffmpeg -i input.mov -preset slow -codec:a libfdk_aac -b:a 128k -codec:v libx264 -pix_fmt yuv420p -b:v 1000k -minrate 500k -maxrate 2000k -bufsize 2000k -vf scale=-1:480 output.mp4`

###### MP4 - 360p

`ffmpeg -i input.mov -preset slow -codec:a libfdk_aac -b:a 128k -codec:v libx264 -pix_fmt yuv420p -b:v 750k -minrate 400k -maxrate 1000k -bufsize 1500k -vf scale=-1:360 output.mp4`

### Готовый shell файл

avi2mp4.sh 
```sh
#! /bin/bash
echo "Enter filename in current directory:"
read VID
if [ -f $VID ]
	then
		echo "Found ${VID}... Starting ffmpeg."
		ffmpeg -i $VID -y -f mp4 -vcodec libx264 -crf 28 -threads 0 -flags +loop -cmp +chroma -deblockalpha -1 -deblockbeta -1 -refs 3 -bf 3 -coder 1 -me_method hex -me_range 18 -subq 7 -partitions +parti4x4+parti8x8+partp8x8+partb8x8 -g 320 -keyint_min 25 -level 41 -qmin 10 -qmax 51 -qcomp 0.7 -trellis 1 -sc_threshold 40 -i_qfactor 0.71 -flags2 +mixed_refs+dct8x8+wpred+bpyramid -padcolor 000000 -padtop 0 -padbottom 0 -padleft 0 -padright 0 -acodec libfaac -ab 80kb -ar 48000 -ac 2 `basename $VID avi`'mp4'
	else
		echo "Not a file, exiting..."
fi
```

## ffmpeg в формат `WebM`

```sh
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:a 128k -b:v 1M -c:a libopus output.webm
```

## Расширенные флаги ffmpeg

### Извлечение звука

* Извлечение звука из видеофайла с последующим сохранением в формате `MP3`:

Извлечение дорожек из видео через `map`. Наверное самый понятный метод, если понимать принцип.

```sh
ffmpeg -i input.webm -c copy -map 0:a:0 output.opus
```

```sh
ffmpeg -i input.avi -vn -ar 44100 -ac 2 -ab 192 -f mp3 output.mp3
```

### Вставить обложку

```sh
ffmpeg -i input.mp4 -i image.jpg -map 1 -map 0 -c copy -disposition:0 attached_pic out.mp4
```
### Вырезать фрагмент

* Паттерн

```sh
ffmpeg -i INPUT -ss STARTTS -to ENDTS -c copy OUTFILE
```

| Flag | Options | Description |
| ---- | ------- | ----------- |
| `-ss` | чч:мм:сс | Начало фрагмента |
| `-t` | чч:мм:сс | Конец фрагмента или Длительность вырезания |

```sh
ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 -c copy output.mp4
```

т.е., обратите внимание, что `-ss` идет после `-i`, в противном случае `-to` будет обозначать длительность вырезаемого. 

Для ускорения работы `-ss` до указания `input'а`

## Метаданные

Метаданные можно вставлять нативно прямо в коммандной строке, а можно и предваритиельно
сделать файл со всеми данными и уже после втавить его в видео.

### Извлечение метаданных в файл

```sh
ffmpeg -i input.mp4 -f ffmetadata meta
```

### Вставить метаданные из файла в видео mp4

```sh
ffmpeg -i input.mp4 -i meta -map_metadata 1 -codec copy output.mp4
```

### Вставить метаданные и обложку

```sh
ffmpeg -i input.mp4 -i cover.jpg -i meta -map_metadata 2 -map 1 -map 0 -c copy -disposition:0 attached_pic out.mp4
```

### не копировать метатадату из источника

```sh
-map_metadata:c -1
```

### Маркировка языка для аудиодорожек

```sh
ffmpeg -i input.mp4 -map 0 -c copy -metadata:s:a:0 language=pol output.mp4
```

## Дополнительные ссылки

* [19 команд ffmpeg для любых нужд](https://habr.com/ru/post/171213/)
* [ffmpeg Documentation](https://ffmpeg.org/ffmpeg.html)
* [ffmpeg map](https://trac.ffmpeg.org/wiki/Map)

