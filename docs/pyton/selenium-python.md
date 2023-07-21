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

## Обнаружение автоматизаци

По умолчанию сайт понимает когда не него заходит браузер с плагином автоматизации, или если запросы идут с браузера в headless "скрытом" режиме. Пример как происходит [Обнаружение Chrome headless](https://antoinevastel.com/bot%20detection/2018/01/17/detect-chrome-headless-v2.html) режима бразуера.

- [Посмотреть](https://antoinevastel.com/bots/) свой `fingetprint`
- Тест на бота [antoinevastel.com](https://antoinevastel.com/bots/datadome)
- еще тест на бота [bot.sannysoft.com](https://bot.sannysoft.com/)

В некоторых случаях полезно препятствовать обнаружению.
Ниже рабочие методы.

```py
from selenium.webdriver.chrome.options import Options
options = Options()

options.add_argument('--disable-blink-features=AutomationControlled')
options.add_experimental_option('useAutomationExtension', False)  # Turn-off useAutomationExtension
options.add_experimental_option("excludeSwitches", ["enable-automation"])  # Exclude the collection of enable-automation switches

driver = webdriver.Chrome(options=options)
driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
driver.execute_cdp_cmd('Network.setUserAgentOverride', {"userAgent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.53 Safari/537.36'})
print(driver.execute_script("return navigator.userAgent;"))
```
- [Ответ на stackoverflow](https://stackoverflow.com/questions/53039551/selenium-webdriver-modifying-navigator-webdriver-flag-to-prevent-selenium-detec/53040904#53040904) с решением этой проблемы.
- Как определяется selenium ответ на [stackoverflow.com](https://stackoverflow.com/questions/33225947/can-a-website-detect-when-you-are-using-selenium-with-chromedriver?noredirect=1&lq=1)


## Links

Официальные ссылки

|   |   |
|---|---|
|**Home**:|[https://selenium.dev](https://selenium.dev)|
|**Docs**:|[selenium package API](https://seleniumhq.github.io/selenium/docs/api/py/api.html)|
|**Dev**:|[https://github.com/SeleniumHQ/Selenium](https://github.com/SeleniumHQ/Selenium)|
|**PyPI**:|[https://pypi.org/project/selenium/](https://pypi.org/project/selenium/)|
|**IRC**:|**#selenium** channel on LiberaChat|
