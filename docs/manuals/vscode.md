---
sidebar_label: "VsCode - шпаргалка"
author: Stavis
title: "Полезные настройки VsCode"
description: "Полезные настройки VsCode"
tags: ["vscode"]
---
# VsCode

Короткая справка по настройкам. Быстрому управленю программой.

## Управление

### Перемещение вкладок в отдельное окно

Если нужно передвинуть одну из вкладок из приложения, куда-нибудь в отдельное место.  
Например на 2й монитор.

- нажать комбинацию `CTRL+K`
- и после `CTRL, press O`.

Вскладка откроется в новом окне.

## Конфигурация

### Расположение файлов

You can change the `settings.json` from your user preferences. 
This changes are global. Therefore it will affect all of your projects. 
Here are 2 ways to reach that global `settings.json` file.

- `File` -> `Preferences` -> `Settings` -> `Extensions` 
  - Scroll down and find `Edit in settings.json`

- Windows - `%APPDATA%\Code\User\settings.json`
- macOS   - `$HOME/Library/Application\ Support/Code/User/settings.json`
- Linux   - `$HOME/.config/Code/User/settings.json`

You can add the settings to this file (may be given by a extension) and make all of these settings global.
For exemple edit file:

```bash
nvim $HOME/Library/Application\ Support/Code/User/settings.json
```

### Отключение всплывающих подсказок

Как по мне дико не удобная вещь, появляется в самый неудобный момент. Типа таких.
![Всплывающая подсказка](https://habrastorage.org/webt/5d/b1/4c/5db14ca576a70136255021.png)  

Короче добавляем в файл `settings.json`.
После перезагрузки `VSCode` сплывающие подсказки появляться не будут, их можно
вызвать нажатием клавиш `хуй знает каких`

```json
"editor.hover.enabled": false,
```

### Снипет ifmain

In vscode, `File` -> `Preferences` -> `User Snippets`.  
Type python and choose python. A json file will open

Paste all or the specific snippets you want in the file and save
`Ctrl+Shift+P`

Reload Window, to activate the changes

This is the default main snippet:

```js
 "if(main)": {
        // "prefix": "__main__",
        "prefix": ["__main__", "ifmain", "main", "ifm", "if m"],
        "body": ["if __name__ == \"__main__\":", "    ${1:pass}"],
        "description": "Code snippet for a `if __name__ == \"__main__\": ...` block"
    },
```

### Вертикальная полоса ограничитель символов

```js
"editor.rulers": [80,120],
```

Так же можно устанавить цвет линии Например красный: `"#ff4081"`

```js
"workbench.colorCustomizations": {
  "editorRuler.foreground": "#ff4081"
  },
```
