---
sidebar_label: 'Строки (str)'

title: "Строки (str) в python"
author: stavis
description: "Тип данных string в Питоне, описание, методы"
tags: ["types", "string", "python"]

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

tunnel = """
          interface Tunnel0
          ip address 10.10.10.1 255.255.255.0
          ip mtu 1416
          ip ospf hello-interval 5
          tunnel source FastEthernet1/0
          tunnel protection ipsec profile DMVPN
          """
```


## Объединение литералов строк

В Python есть очень удобная функциональность - объединение литералов строк. Она
дает возможность разбивать строки на части при написании кода и даже переносить
эти части на разные строки кода.  Это нужно как для разделения длинного текста
на части из-за рекомендаций по максимальной длине строки в Python, так и для
удобства восприятия.

```python
s = ('Test' 'String')
# 'TestString'

s = 'Test' 'String'
# 'TestString'
```

Можно переносить составляющие строки на разные строки, но только
если они в скобках:

```python
s = ('Test'
     'String')

# 'TestString'
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

_eng: join - присоединиться_

Метод `join` собирает список строк в одну строку с разделителем,
который указан перед join:

```python
vlans = ['10', '20', '30']

vlans_str = ','.join(vlans)
# '10,20,30'
```

### Методы upper, lower, swapcase, capitalize

Методы `upper()`, `lower()`, `swapcase()`,
`capitalize()` выполняют преобразование регистра строки:

```python
string1 = 'FastEthernet'

string1.upper()
# 'FASTETHERNET'

string1.lower()
# 'fastethernet'

string1.swapcase()
# 'fASTeTHERNET'

string2 = 'tunnel 0'

string2.capitalize()
# 'Tunnel 0'
```

Очень важно обращать внимание на то, что часто методы возвращают
преобразованную строку. И, значит, надо не забыть присвоить ее какой-то
переменной (можно той же).

```python
string1 = string1.upper()
print(string1)
# FASTETHERNET
```

### Метод count

Метод `count()` используется для подсчета того, сколько раз символ
или подстрока встречаются в строке:

```python
string1 = 'Hello, hello, hello, hello'

string1.count('hello')
# 3

string1.count('ello')
# 4

string1.count('l')
# 8
```

### Метод find {#str-find}

Методу `find()` можно передать подстроку или символ, и он покажет,
на какой позиции находится первый символ подстроки (для первого
совпадения):

```python
string1 = 'interface FastEthernet0/1'
string1.find('Fast')
# 10

string1[string1.find('Fast')::]
# 'FastEthernet0/1'
```

### Метод rfind {#str-rfind}

Метод `rfind()` похож на [find()](#str-find), за исключением того, что поиск выполняется справа налево.

### Методы startswith, endswith

Проверка на то, начинается или заканчивается ли строка на определенные
символы (методы `startswith()`, `endswith()`):

```python
string1 = 'FastEthernet0/1'

string1.startswith('Fast')
# True

string1.startswith('fast')
# False

string1.endswith('0/1')
# True

string1.endswith('0/2')
# False
```

Методам `startswith()` и `endswith()` можно передавать несколько значений
(обязательно как кортеж):

```python

chk = "test".startswith(("r", "t"))
# True

chk = "test".startswith(("r", "a"))
# False

chk = "rtest".startswith(("r", "a"))
# True

chk = "rtest".endswith(("r", "a"))
# False

chk = "rtest".endswith(("r", "t"))
# True
```


### Метод replace {#str-replace}

Замена последовательности символов в строке на другую последовательность
(метод `replace()`):

```python
string1 = 'FastEthernet0/1'

string1.replace('Fast', 'Gigabit')
# 'GigabitEthernet0/1'
```

### Метод strip {#str-strip}

Часто при обработке файла файл открывается построчно. Но в конце каждой
строки, как правило, есть какие-то спецсимволы (а могут быть и в
начале). Например, перевод строки.

Для того, чтобы избавиться от них, очень удобно использовать метод
`strip()`:

```python
string1 = '\n\tinterface FastEthernet0/1\n'
print(string1)  # print не отображает
# interface FastEthernet0/1

string1
# '\n\tinterface FastEthernet0/1\n'

string1.strip()
# 'interface FastEthernet0/1'
```

По умолчанию метод `strip()` убирает пробельные символы.  
В этот набор символов входят: `\t\n\r\f\v`

Методу `strip` можно передать как аргумент любые символы. Тогда в начале и в конце строки будут удалены все символы, которые были указаны в строке:

```python
ad_metric = '[110/1045]'

ad_metric.strip('[]')
# '110/1045'
```

Метод `strip()` убирает спецсимволы и в начале, и в конце строки. Если необходимо убрать символы только слева или только справа, можно использовать, соответственно, методы `lstrip()` и
`rstrip()`.

### Метод split {#str-split}

Метод `split()` разбивает строку на части, используя как
разделитель какой-то символ (или символы) и возвращает список строк:

```python
string1 = 'switchport trunk allowed vlan 10,20,30,100-200'
commands = string1.split()
print(commands)
# ['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100-200']
```

В примере выше `string1.split()` разбивает строку по пробельным символам
и возвращает список строк. Список записан в переменную commands.

По умолчанию в качестве разделителя используются пробельные символы 
(пробелы, табы, перевод строки), но в скобках можно указать любой разделитель:

```python
vlans = commands[-1].split(',')
print(vlans)
# ['10', '20', '30', '100-200']
```

В списке commands последний элемент это строка с вланами, поэтому используется индекс -1.
Затем строка разбивается на части с помощью split `commands[-1].split(',')`.
Так как, как разделитель указана запятая, получен такой список `['10', '20', '30', '100-200']`.

Пример разделения адреса на октеты:

```python
ip = "192.168.100.1"
ip.split(".")
# ['192', '168', '100', '1']
```

Полезная особенность метода split с разделителем по умолчанию — строка не только разделяется
в список строк по пробельным символам, но пробельные символы также удаляются в начале и 
в конце строки:

```python
string1 = '  switchport trunk allowed vlan 10,20,30,100-200\n\n'
string1.split()
# ['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100-200']
```

У метода `split()` есть ещё одна хорошая особенность: по умолчанию
метод разбивает строку не по одному пробельному символу, а по любому количеству.
Это будет, например, очень полезным при обработке команд show:

```python
sh_ip_int_br = "FastEthernet0/0       15.0.15.1    YES manual up         up"
sh_ip_int_br.split()
# ['FastEthernet0/0', '15.0.15.1', 'YES', 'manual', 'up', 'up']
```

А вот так выглядит разделение той же строки, когда один пробел `" "`
используется как разделитель:

```python
sh_ip_int_br.split(' ')
# ['FastEthernet0/0', '', '', '', '', '', '', '', '', '', '', '', '15.0.15.1', '', '', '', '', '', '', 'YES', 'manual', 'up', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'up']
```

### str.partition() {#str-partition}

```py
str.partition(sep)

str.rpartition(sep)
```
Метод `str.partition(sep)` разбивает строку при первом появлении разделителя sep и вернет кортеж, содержащий часть строки str перед разделителем, сам разделитель sep и часть строки str после разделителя.

- Разделитель `sep` может содержать как один, так и несколько символов.
- Если разделитель не найден, возвращает [кортежи](./python-types-tuple.md), содержащий саму строку `str`
  - `partition` - за которой следуют две пустые строки `(str, '', '')`.
  - `rpartition` - перед которой следуют две пустые строки `('', '', str)`.
- При вызове метода без аргументов поднимается исключение:
  - `TypeError: partition() takes exactly one argument (0 given)`

- В случаях, когда требуется, чтобы деление строки происходило при последнем появлении разделителя, используйте [str.rpartition()](#str-rpartition). 
 - Когда требуется разделить строку на список строк по определенному разделителю, используйте [str.split()](#str-split).

- судя по ответу на [stackoverflow.com](https://stackoverflow.com/a/29995164/15960848), является самым быстрым методоб разбиения строки.

#### str.partition

```python
x = 'один два три раз два три раз два три'
sep = 'раз'

x.partition(sep)
# ('один два три ', 'раз', ' два три раз два три')

x.partition(' ')
# ('один', ' ', 'два три раз два три раз два три')

x.partition('четыре')
# ('один два три раз два три раз два три', '', '')
```

#### str.rpartition() {#str-rpartition}

```py
x = 'один два три раз, два три раз два три'
sep = 'раз'

x.rpartition(sep)
# ('один два три раз два три ', 'раз', ' два три')

x.partition(' ')
# ('один два три раз два три раз два', ' ', 'три')

x.partition('четыре')
# ('', '', 'один два три раз два три раз два три')
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

## Упражнения

### Смещение строк

- Есть строка `sr = "I Me You"` содержащая 3 слова.
- Вернуть строку так, чтобы последнее слово оказалось первым `"You I Me"`

<details>
<summary>
Решение через str.rpartition()
</summary>

```py
def rpart(s):
    part = s.rpartition(' ')
    return part[-1] + part[1] + part[0]
```

</details>

<details>
<summary>
Решения
</summary>

```py
from collections import deque
import timeit

def trivial(s):
    l = s.split()
    return ' '.join(l[-1:] + l[:-1])

def more_split(s):
    return ' '.join([s.split()[-1]] + s.split()[:-1])

def dq(s):
    s_deq = deque(s.split())
    s_deq.rotate(1)
    return ' '.join(s_deq)

def find_and_slice(s):
    lsi = s.rfind(' ')
    return s[lsi+1:] + ' ' + s[:lsi]

def rs_lazy(s):
    return ' '.join(reversed(s.rsplit(maxsplit=1)))

def rs_smart(s):
    rs = s.rsplit(maxsplit=1)
    return rs[1] + ' ' + rs[0]

def rpart(s):
    part = s.rpartition(' ')
    return part[-1] + part[1] + part[0]

def time_a_method(m, s):
    c_arg = "('{}')".format(s)
    t = timeit.timeit(m + c_arg, setup="from __main__ import " + m , number=100000)
    print( m + " "*(15-len(m)) + "----> {}".format(t))


if __name__ == '__main__':
    print(trivial("I Me You"))
    print(more_split("I Me You"))
    print(dq("I Me You"))
    print(find_and_slice("I Me You"))
    print(rs_lazy("I Me You"))
    print(rs_smart("I Me You"))
    print(rpart("I Me You"))
    print("######## USE: 'I Me You'")
    for m in ["trivial", "more_split", "dq", "find_and_slice", "rs_lazy", "rs_smart", "rpart"]:
        time_a_method(m, "I Me You")

    print("######## USE: 'a b c d e f '*100")
    s = 'a b c d e f '*100
    for m in ["trivial", "more_split", "dq", "find_and_slice", "rs_lazy", "rs_smart", "rpart"]:
        time_a_method(m, s)
```

Результаты выполнения:


```bash
You I Me
You I Me
You I Me
You I Me
You I Me
You I Me
You I Me
######## USE: 'I Me You'
trivial        ----> 0.1339518820000194
more_split     ----> 0.1532761280000159
dq             ----> 0.182199565000019
find_and_slice ----> 0.07563322400005745
rs_lazy        ----> 0.23457759100006115
rs_smart       ----> 0.1615759960000105
rpart          ----> 0.06102836100001241
######## USE: 'a b c d e f '*100
trivial        ----> 3.2239098259999537
more_split     ----> 4.6946649449999995
dq             ----> 3.991058845999987
find_and_slice ----> 0.15106809200005955
rs_lazy        ----> 0.32278001499992115
rs_smart       ----> 0.22939544400003342
rpart          ----> 0.10590313199998036
```

[stackoverflow.com](https://stackoverflow.com/questions/29977868/how-to-shift-a-string-to-right-in-python#29995164)
</details>
