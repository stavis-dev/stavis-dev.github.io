---
title: "Шпаргалка по unittest python"
description: "Примеры по unittest в питоне"
sidebar_label: "Unittest примеры"
tags: ["triks"]
categories: ["python"]
last_update:
  date: 2023-06-20
  author: stavis

---

Юниттесты в python примеры взятые со всяких форумов.

## Mock

Мокаем `urllib.request` когда надо подменить ответы от сервера в тесткейсах.

```py
import urllib.request
import unittest
from unittest.mock import patch, MagicMock

class TestUrlopen(unittest.TestCase):
    
    @patch('urllib.request.urlopen')
    def test_cm(self, mock_urlopen):
        cm = MagicMock()
        cm.getcode.return_value = 200
        cm.read.return_value = 'contents'
        cm.__enter__.return_value = cm
        mock_urlopen.return_value = cm

        with urllib.request.urlopen('http://foo') as response:
            self.assertEqual(response.getcode(), 200)
            self.assertEqual(response.read(), 'contents')

    @patch('urllib.request.urlopen')
    def test_no_cm(self, mock_urlopen):
        cm = MagicMock()
        cm.getcode.return_value = 200
        cm.read.return_value = 'contents'
        mock_urlopen.return_value = cm

        response = urllib.request.urlopen('http://foo')
        self.assertEqual(response.getcode(), 200)
        self.assertEqual(response.read(), 'contents')
        response.close()

if __name__ == '__main__':
    unittest.main()
```

### Использования патчей

Если нужна подмена возвращаемых значений например `json` который надо сымитировать.

```py
import io
import json
import urllib.request
from unittest.mock import patch


def get_posts():
    with urllib.request.urlopen('some url here') as data:
        return json.load(data)


def test_get_posts():
    data = io.StringIO('{"id": 123}')
    with patch.object(urllib.request, 'urlopen', return_value=data):
        assert get_posts() == {"id": 123}
```

