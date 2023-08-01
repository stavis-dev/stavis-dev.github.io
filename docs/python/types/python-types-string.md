---
sidebar_label: 'Строки (str)'

title: "Строки (str) в python"
author: stavis
description: "Тип данных string в Питоне, описание, методы"
tags: ["functions", "string", "python"]

---

# Строки (Strings)

Строка в Python это:

- последовательность символов, заключенная в кавычки
  - Сразу понимаем, что если это последовательность, то по ней можно итерироваться
  - Так же можно добраться до элемента строки обратившись к его адресу как в кортеже [tuple](./python-types-tuple.md#что-такое-кортеж-tuple-в-python)
  - Получить часть строки можно воспользовавшись [слайсами](./python-types-list.md#слайсы--срезы)
- **неизменяемый** упорядоченный тип данных
  - Для простоты, можно представить, что строка это своего рода "кортеж" 

Примеры строк:

```python

str_one =  'Hello'
# 'Hello'
str_two = "Hello"
# 'Hello'

In [11]: tunnel = """
   ....: interface Tunnel0
   ....:  ip address 10.10.10.1 255.255.255.0
   ....:  ip mtu 1416
   ....:  ip ospf hello-interval 5
   ....:  tunnel source FastEthernet1/0
   ....:  tunnel protection ipsec profile DMVPN
   ....: """
```


## Объединение литералов строк

В Python есть очень удобная функциональность - объединение литералов строк. Она
дает возможность разбивать строки на части при написании кода и даже переносить
эти части на разные строки кода.  Это нужно как для разделения длинного текста
на части из-за рекомендаций по максимальной длине строки в Python, так и для
удобства восприятия.

```python

    In [1]: s = ('Test' 'String')

    In [2]: s
    Out[2]: 'TestString'

    In [3]: s = 'Test' 'String'

    In [4]: s
    Out[4]: 'TestString'
```

Можно переносить составляющие строки на разные строки, но только
если они в скобках:

```python

    In [5]: s = ('Test'
       ...: 'String')

    In [6]: s
    Out[6]: 'TestString'
```

Этим очень удобно пользоваться в регулярных выражениях:

```python

    regex = ('(\S+) +(\S+) +'
             '\w+ +\w+ +'
             '(up|down|administratively down) +'
             '(\w+)')
```

Так регулярное выражение можно разбивать на части и его будет проще
понять. Плюс можно добавлять поясняющие комментарии в строках.

```python

    regex = ('(\S+) +(\S+) +' # interface and IP
             '\w+ +\w+ +'
             '(up|down|administratively down) +' # Status
             '(\w+)') # Protocol
```

Также этим приемом удобно пользоваться, когда надо написать длинное
сообщение:

```python

    In [7]: message = ('При выполнении команды "{}" '
       ...: 'возникла такая ошибка "{}".\n'
       ...: 'Исключить эту команду из списка? [y/n]')

    In [8]: message
    Out[8]: 'При выполнении команды "{}" возникла такая ошибка "{}".\nИсключить эту команду из списка? [y/n]'
```

## Методы строк в Питоне

Полезные методы для работы со строками

При автоматизации очень часто надо будет работать со строками, так как
конфигурационный файл, вывод команд и отправляемые команды - это строки.

Знание различных методов (действий), которые можно применять к
строкам, помогает более эффективно работать с ними.

Строки - неизменяемый тип данных. Поэтому все методы, которые преобразуют
строку, возвращают новую строку, а исходная строка остается неизменной.

### Метод join

Метод `join` собирает список строк в одну строку с разделителем,
который указан перед join:

```python

    In [16]: vlans = ['10', '20', '30']

    In [17]: ','.join(vlans)
    Out[17]: '10,20,30'
```

### Методы upper, lower, swapcase, capitalize

Методы `upper()`, `lower()`, `swapcase()`,
`capitalize()` выполняют преобразование регистра строки:

```python

    In [25]: string1 = 'FastEthernet'

    In [26]: string1.upper()
    Out[26]: 'FASTETHERNET'

    In [27]: string1.lower()
    Out[27]: 'fastethernet'

    In [28]: string1.swapcase()
    Out[28]: 'fASTeTHERNET'

    In [29]: string2 = 'tunnel 0'

    In [30]: string2.capitalize()
    Out[30]: 'Tunnel 0'
```

Очень важно обращать внимание на то, что часто методы возвращают
преобразованную строку. И, значит, надо не забыть присвоить ее какой-то
переменной (можно той же).

```python

    In [31]: string1 = string1.upper()

    In [32]: print(string1)
    FASTETHERNET
```

### Метод count

Метод `count()` используется для подсчета того, сколько раз символ
или подстрока встречаются в строке:

```python

    In [33]: string1 = 'Hello, hello, hello, hello'

    In [34]: string1.count('hello')
    Out[34]: 3

    In [35]: string1.count('ello')
    Out[35]: 4

    In [36]: string1.count('l')
    Out[36]: 8
```

### Метод find

Методу `find()` можно передать подстроку или символ, и он покажет,
на какой позиции находится первый символ подстроки (для первого
совпадения):

```python

    In [37]: string1 = 'interface FastEthernet0/1'

    In [38]: string1.find('Fast')
    Out[38]: 10

    In [39]: string1[string1.find('Fast')::]
    Out[39]: 'FastEthernet0/1'
```

Если совпадение не найдено, метод find возвращает `-1`.

### Методы startswith, endswith

Проверка на то, начинается или заканчивается ли строка на определенные
символы (методы `startswith()`, `endswith()`):

```python

    In [40]: string1 = 'FastEthernet0/1'

    In [41]: string1.startswith('Fast')
    Out[41]: True

    In [42]: string1.startswith('fast')
    Out[42]: False

    In [43]: string1.endswith('0/1')
    Out[43]: True

    In [44]: string1.endswith('0/2')
    Out[44]: False
```

Методам `startswith()` и `endswith()` можно передавать несколько значений
(обязательно как кортеж):

```python

    In [1]: "test".startswith(("r", "t"))
    Out[1]: True

    In [2]: "test".startswith(("r", "a"))
    Out[2]: False

    In [3]: "rtest".startswith(("r", "a"))
    Out[3]: True

    In [4]: "rtest".endswith(("r", "a"))
    Out[4]: False

    In [5]: "rtest".endswith(("r", "t"))
    Out[5]: True
```


### Метод replace

Замена последовательности символов в строке на другую последовательность
(метод `replace()`):

```python

    In [45]: string1 = 'FastEthernet0/1'

    In [46]: string1.replace('Fast', 'Gigabit')
    Out[46]: 'GigabitEthernet0/1'
```

### Метод strip

Часто при обработке файла файл открывается построчно. Но в конце каждой
строки, как правило, есть какие-то спецсимволы (а могут быть и в
начале). Например, перевод строки.

Для того, чтобы избавиться от них, очень удобно использовать метод
`strip()`:

```python

    In [47]: string1 = '\n\tinterface FastEthernet0/1\n'

    In [48]: print(string1)

        interface FastEthernet0/1


    In [49]: string1
    Out[49]: '\n\tinterface FastEthernet0/1\n'

    In [50]: string1.strip()
    Out[50]: 'interface FastEthernet0/1'
```

По умолчанию метод strip() убирает пробельные символы. В этот набор
символов входят: `\t\n\r\f\v`

Методу strip можно передать как аргумент любые символы. Тогда в начале и
в конце строки будут удалены все символы, которые были указаны в строке:

```python

    In [51]: ad_metric = '[110/1045]'

    In [52]: ad_metric.strip('[]')
    Out[52]: '110/1045'
```

Метод strip() убирает спецсимволы и в начале, и в конце строки. Если
необходимо убрать символы только слева или только справа, можно
использовать, соответственно, методы `lstrip()` и
`rstrip()`.

### Метод split

Метод `split()` разбивает строку на части, используя как
разделитель какой-то символ (или символы) и возвращает список строк:

```python

    In [53]: string1 = 'switchport trunk allowed vlan 10,20,30,100-200'

    In [54]: commands = string1.split()

    In [55]: print(commands)
    ['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100-200']
```

В примере выше `string1.split()` разбивает строку по пробельным символам
и возвращает список строк. Список записан в переменную commands.

По умолчанию в качестве разделителя используются пробельные символы 
(пробелы, табы, перевод строки), но в скобках можно указать любой разделитель:

```python

    In [56]: vlans = commands[-1].split(',')

    In [57]: print(vlans)
    ['10', '20', '30', '100-200']
```

В списке commands последний элемент это строка с вланами, поэтому используется индекс -1.
Затем строка разбивается на части с помощью split `commands[-1].split(',')`.
Так как, как разделитель указана запятая, получен такой список `['10', '20', '30', '100-200']`.

Пример разделения адреса на октеты:

```python

    In [10]: ip = "192.168.100.1"

    In [11]: ip.split(".")
    Out[11]: ['192', '168', '100', '1']
```

Полезная особенность метода split с разделителем по умолчанию — строка не только разделяется
в список строк по пробельным символам, но пробельные символы также удаляются в начале и 
в конце строки:

```python

    In [58]: string1 = '  switchport trunk allowed vlan 10,20,30,100-200\n\n'

    In [59]: string1.split()
    Out[59]: ['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100-200']
```

У метода `split()` есть ещё одна хорошая особенность: по умолчанию
метод разбивает строку не по одному пробельному символу, а по любому количеству.
Это будет, например, очень полезным при обработке команд show:

```python

    In [60]: sh_ip_int_br = "FastEthernet0/0       15.0.15.1    YES manual up         up"

    In [61]: sh_ip_int_br.split()
    Out[61]: ['FastEthernet0/0', '15.0.15.1', 'YES', 'manual', 'up', 'up']
```

А вот так выглядит разделение той же строки, когда один пробел
используется как разделитель:

```python


    In [62]: sh_ip_int_br.split(' ')
    Out[62]:
    ['FastEthernet0/0', '', '', '', '', '', '', '', '', '', '', '', '15.0.15.1', '', '', '', '', '', '', 'YES', 'manual', 'up', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'up']
```

## Дополнительные материалы

Документация:

-  [Strings](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
-   [Methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
- [basics](https://docs.python.org/3/tutorial/introduction.html#lists)

Форматирование строк:

-  Примеры использования форматирования [строк](https://pyformat.info/)
- [Синтаксис](https://docs.python.org/3/library/string.html#format-string-syntax) форматирования строк
- Python 3s [f-Strings](https://realpython.com/python-f-strings/): An Improved String Formatting Syntax (Guide)
- Python String Formatting Best [Practices](https://realpython.com/python-string-formatting/)
