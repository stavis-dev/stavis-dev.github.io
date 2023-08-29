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

## Unittest

Основные понятия в unittest

```python
import unittest


def setUpModule():
    """Вызывается один раз перед всеми классами, которые есть в файле."""
    print('> setUpModule')


def tearDownModule():
    """Вызывается один раз после всех классов, которые есть в файле."""
    print('> tearDownModule')


class TestExample(unittest.TestCase):
    """Демонстрирует принцип работы тестов."""

    @classmethod
    def setUpClass(cls):
        """Вызывается один раз перед запуском всех тестов класса."""
        print('>> setUpClass')

    @classmethod
    def tearDownClass(cls):
        """Вызывается один раз после запуска всех тестов класса."""
        print('>> tearDownClass')

    def setUp(self):
        """Подготовка прогона теста. Вызывается перед каждым тестом."""
        print('>>> setUp')

    def tearDown(self):
        """Вызывается после каждого теста."""
        print('>>> tearDown')

    def test_one(self): # это -- test case 
        print('>>>> test_simple')

    def test_one_more(self): # это -- еще один test case
        print('>>>> test_simple')


if __name__ == '__main__':
    unittest.main()
```

## Методика TDD

Методика TDD подразумевает, что сначала пишутся тесты, а потом код.
Например с программой калькулятором.

```python
import unittest

'''В коде задания описан метод summ.
Если вызвать этот метод без аргументов, он вернёт ноль, а если передать в метод summ один аргумент — он вернёт значение этого аргумента.
Это не лучшее поведение для калькулятора, надо его изменить. Методика TDD подразумевает, что сначала пишутся тесты, а потом код.
В этом задании напишите тесты, которые проверяют, что summ возвращает None, если количество переданных аргументов меньше двух.'''
class Calculator:
    def summ(self, *args):
        """Возвращает сумму принятых аргументов."""
        sum = 0
        if len(args) <= 1: #проверка кол-ва подаваемых аргументов
            return None
        for i in args:
            sum += i
        return sum


class TestCalc(unittest.TestCase):
    """Тестируем Calculator."""
    @classmethod
    def setUpClass(cls):
        """Вызывается однажды перед запуском всех тестов класса."""
        cls.calc = Calculator()

    def test_summ(self):
        act = TestCalc.calc.summ(3, -3, 5)
        self.assertEqual(act, 5, 'summ работает неправильно')

    '''В Unittest есть встроенный метод для проверки на None: assertIsNone(x)
Маленькие тесты — это всегда хорошо. Одна проверка — один тест:
test_summ_no_argument — что будет, если функция вызвана без аргументов
test_summ_one_argument — что будет, если функция вызвана с одним аргументом.'''

    def test_summ_no_argument(self):
        act = TestCalc.calc.summ()
        self.assertIsNone(act)

    def test_summ_one_argument(self):
        act = TestCalc.calc.summ(1)
        self.assertIsNone(act)
```

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

## Ссылки

- [unittest](https://docs.python.org/3/library/unittest.html) - в официально документации
- [unittest.mock](https://docs.python.org/3/library/unittest.mock.html) -  на сайте docs.python.org