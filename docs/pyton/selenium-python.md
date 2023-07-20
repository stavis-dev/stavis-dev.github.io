---
author: stavis
title: модуль selenium python
description: "Автоматизация браузера модулем selenium"
tags: ["modules", "selenium"]

---
## Установка

```sh
pip install selenium
```
### Драйвера

Дравера это приложения которые непосредственно управляют браузером.

| Браузер  | Ссылка для скачивания драйвера  |
|---|---|
|**Chrome**:|[https://chromedriver.chromium.org/downloads](https://chromedriver.chromium.org/downloads)|
|**Edge**:|[https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)|
|**Firefox**:|[https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)|
|**Safari**:|[https://webkit.org/blog/6900/webdriver-support-in-safari-10/](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)|


## Использование браузеров

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
```

### Chrome

Создание драйвера

```py
from selenium.webdriver.chrome.service import Service as ChromeService
options = Options()
options.binary_location = "/home/path_to_local_chrome/chrome"
options.add_experimental_option("detach", True)  # Если нужно, чтобы браузер на закрывался после выполнения скрипта

chromedriver = "/home/path_to_local_chromedriver/chromedriver"
service = ChromeService(executable_path=chromedriver)
driver = webdriver.Chrome(options=options, service=service)
```

### Firefox

Создание драйвера

```py
firefox_options = webdriver.FirefoxOptions()
firefox_options.add_argument("--private")
driver = webdriver.Firefox(options=firefox_options)
```

## Links

Официальные ссылки

|   |   |
|---|---|
|**Home**:|[https://selenium.dev](https://selenium.dev)|
|**Docs**:|[selenium package API](https://seleniumhq.github.io/selenium/docs/api/py/api.html)|
|**Dev**:|[https://github.com/SeleniumHQ/Selenium](https://github.com/SeleniumHQ/Selenium)|
|**PyPI**:|[https://pypi.org/project/selenium/](https://pypi.org/project/selenium/)|
|**IRC**:|**#selenium** channel on LiberaChat|
