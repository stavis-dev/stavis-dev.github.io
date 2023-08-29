---
sidebar_label: "Рeгулярные выражения в Pyhton"

draft: true
author: stavis
title: Рeгулярные выражения в Pyhton
date: "2022-02-07"
description: "Работаем с регулярными выражениями. Шпаргалка для всевозможных случаяв."
math: true
tags: ["python", "re", "regex"]
---
# Регулярные выражения

>[Регулярные выражения](https://pythonru.com/primery/primery-primeneniya-regulyarnyh-vyrazheniy-v-python) — специальная последовательность символов, которая помогает сопоставлять или находить строки python с использованием специализированного синтаксиса, содержащегося в шаблоне. Регулярные выражения распространены в мире UNIX..


## Модуль Re для регулярных выражений в Python

В Python для работы с регулярными выражениями используется модуль **re**.

Основные функции модуля **re**: 

- [объект Match][match_object] - Объект возвращаемый функциями

- [match][match] - ищет последовательность в начале строки 
- `search` - ищет первое совпадение с шаблоном 
- `findall` - ищет все совпадения с шаблоном. Возвращает результирующие строки в виде списка 
- `finditer` - ищет все совпадения с шаблоном. Возвращает итератор 
- `compile` - компилирует регулярное выражение. К этому объекту затем можно применять все перечисленные функции 
- `fullmatch` - вся строка должна соответствовать описанному регулярному выражению

Кроме функций для поиска совпадений, в модуле есть такие функции:

-  `re.sub` - для замены в строках
-  `re.split` - для разделения строки на части



## Ссылки

- [Repo мануала по модулю re](https://github.com/natenka/pyneng-book/tree/master/docs/source/book/15_module_re)
- [Repo мануала по regex](https://github.com/natenka/pyneng-book/tree/master/docs/source/book/14_regex)
- [Документация](https://docs.python.org/3/library/re.html) по модулю re


### Сайты для проверки регулярных выражений

- Он-лайн отладка регулярок [regex101](https://regex101.com/) (не забудьте поставить галочку Python в разделе FLAVOR слева);
- [для Python](http://www.pyregex.com/) - тут можно указывать и методы `search`, `match`, `findall`, и флаги.
    - К сожалению, иногда не все выражения воспринимает. 
- [Еще один сайт для Python](http://pythex.org/) - не поддерживает методы
    - хорошо работает и отработал те выражения, на которые ругнулся предыдущий сайт.
    - Подходит для однострочного текста отлично.
    - С многострочным надо учитывать, что в Python будет другая ситуация.

### Помощь в изучении регулярных выражений

- [regexlearn.com](https://regexlearn.com/)
- [Визуализация регулярного выражения](https://regexper.com/)
- [Regex Cross­word](https://regexcrossword.com/)


- [match_object]: <https://pyneng.readthedocs.io/ru/latest/book/15_module_re/match_object.html> (Объект Match)
- [match]: <https://pyneng.readthedocs.io/ru/latest/book/15_module_re/match.html> (Функция match)
