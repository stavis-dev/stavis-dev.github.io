---
title: "Адаптация изображений под цвет темы сайта"
description: 'Адаптация изображений на сайте, при переключении светлой или темной темах'
authors: stavis
# image: https://i.ytimg.com/vi/9kLI6R0heTQ/hqdefault.jpg
tags: [html, img, docusaurus]
---

![](https://i.stack.imgur.com/3e9D7.gif)

В зависимости от того какая тема применена на сайте, возникает необходимость переключать изображения (со светлым фоном и темным фоном)

Как это можно реализовать в `docusaurus` я не знаю. Но нашел ваиант как это сделано в проэкте [venom](https://docs.venom.foundation/general/developer-programm)

На этой странице картинка при переключении темы со светлую на темную, переключается и картинка.

Реализованно это [github код страницы](https://github.com/venom-blockchain/venom-blockchain.github.io/blob/main/docs/start/general/developer-programm.md?plain=1).

Оставлю себе памятку, на тот случай, когда мне это понадобится.

<!--truncate-->

Код импорта и само изображение вставляются прямо в `markdown` страницу.
```js
import ImageSwitcher from './../../../src/components/ImageSwitcher';
import program_logo_light from './assets/developer-programm/vf-dev-program-black.png';
import program_logo_dark from './assets/developer-programm/vf-dev-program-white.png';
```


```html
<ImageSwitcher
    lightImageSrc={program_logo_light}
    darkImageSrc={program_logo_dark}
    alt="Developer Program Logo"
    width="400px"
/>
```


Файл же `ImageSwitcher` реализован следующим образом:

```jsx title="ImageSwitcher.tsx"
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const ImageSwitcher = ({ lightImageSrc, darkImageSrc, alt, ...props }) => {
    const { isDarkTheme } = useColorMode();

    return (
        <img
            src={isDarkTheme ? darkImageSrc.src : lightImageSrc.src}
            alt={alt}
            {...props}
        />
    )
}

export default ImageSwitcher;
```

