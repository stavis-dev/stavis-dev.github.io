---
author: stavis
title: Использование .env
description: "Работа с .env файлами. Храним переменные правильно"
tags: ["modules"]

---

Файл `.env` - это текстовый файл, содержащий пары ключ-значение всех переменных окружения, требуемых вашим приложением.
Этот файл включен в ваш проект локально, но не сохраняется в системе управления версиями,
чтобы вы не подвергали риску потенциально конфиденциальную информацию.

```shell title=".env"
# environment variables defined inside a .env file
GCP_PROJECT_ID=my-project-id
SERVICE_ACCOUNT_FILE=path/to/serviceAccountCredentials
STORAGE_BUCKET_NAME=my-super-important-data
```

Во всех языках есть модули которые работдают с файлами

Почти в каждом языке программирования есть пакет или библиотека,
которые можно использовать для чтения переменных окружения из файла `.env`,
а не из вашей локальной среды. 
Для Python этой библиотекой является `python-dotenv`. 
Как только библиотека установлена, обычный вариант использования `python-dotenv` требует добавления в ваш проект всего двух строк кода.

```python title="app.py"
import os
from dotenv import load_dotenv

load_dotenv()

GCP_PROJECT_ID = os.getenv('GCP_PROJECT_ID')
SERVICE_ACCOUNT_FILE = os.getenv('SERVICE_ACCOUNT_FILE')
STORAGE_BUCKET_NAME = os.getenv('STORAGE_BUCKET_NAME')
```

По умолчанию `load_dotenv` будет искать файл `.env` в текущем рабочем каталоге или любых родительских каталогах, 
однако вы также можете указать путь, если ваш конкретный вариант использования требует, чтобы он хранился в другом месте.

```python title="app.py"
from dotenv import load_dotenv
from pathlib import Path

dotenv_path = Path('path/to/.env')
load_dotenv(dotenv_path=dotenv_path)
```

Для большинства приложений это вся информация,
которая вам должна понадобиться для продуктивной работы с python-dotenv, однако есть несколько дополнительных функций,
о которых вы можете прочитать в документации [python-dotenv](https://pypi.org/project/python-dotenv/).


