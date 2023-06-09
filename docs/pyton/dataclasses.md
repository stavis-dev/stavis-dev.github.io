---
title: "Датаклассы"
author: rikki_tikki
date: "2022-02-07"
description: "9 причин использовать dataclasses в Python"
tags: ["dataclasses"]
categories: ["python"]
# aliases: [""]
ShowToc: true
TocOpen: true
math: true
cover:
    hidden: true
    image: "https://miro.medium.com/max/1400/1*7pr8EL8EDsP296pxL7Wz_g.png"
    alt: "Картинка" # alt text
    caption: "Датаклассы" # display caption under cover
---
## 0 – Dataclasses: общая картина

>Статья более чем полностью скопированна с сайта habr.com    
>[Оригинал текста](https://habr.com/ru/company/otus/blog/650257/)

`Dataclasses`, как ясно следует из названия – это классы, предназначенные для хранения данных. Основная идея заключается в том, что мы иногда определяем классы, которые действуют только как контейнеры данных, и когда так случается, мы тратим значительное количество времени на написание шаблонного кода с кучей аргументов, уродливым методом __init__ и множеством переопределенных функций.

`Dataclasses` решают эту проблему, предоставляя из коробки ряд дополнительных полезных методов. Более того, поскольку `dataclasses` относительно новые для экосистемы Python, в них применяются современные практики, такие как аннотации типов.

`Dataclasses` остаются классами. Поэтому в них вы можете реализовать любые кастомные методы точно также, как в обычном классе. А теперь посмотрим на них в действии.

## 1 – Меньше кода для определения класса

Вот так выглядит предыдущий код с использованием dataclasses:

```python
from dataclasses import dataclass
@dataclass
class Person:
     first_name: str
     last_name: str
     age: int
     job: str
```

## 2 – Поддержка значений по умолчанию

Вы можете добавить значения по умолчанию для каждого атрибута, сохранив аннотацию.

```py
from dataclasses import dataclass

@dataclass
class Person:
     first_name: str = "Ahmed"
     last_name: str = "Besbes"
     age: int = 30
     job: str = "Data Scientist"
```

Помните о том, что поля без значений по умолчанию не могут стоять после полей со значениями по умолчанию. Например, следующий код работать не будет:

```py
from dataclasses import dataclass

@dataclass
class Person:
     first_name: str = "Ahmed"
     last_name: str = "Besbes"
     age: int = 30
     job: str = "Data Scientist"
     hobbies: str
```

## 3 – Кастомное представление объектов

Благодаря методу `repr`, добавленному `dataclasses`, экземпляры имеют приятное, удобочитаемое представление при выводе на экран.

Да и отладка так становится проще.

```py
@dataclass
class Person:
     first_name: str = "Ahmed"
     last_name: str = "Besbes"
     age: int = 30
     job: str = "Data Scientist"

ahmed = Person()
print(ahmed)
# Person(first_name='Ahmed', last_name='Besbes', age=30, job='Data Scientist')
```

Представление можно переопределить для вывода любого кастомного сообщения, которое вам может понадобиться.

```py
@dataclass
class Person:
    first_name: str = "Ahmed"
    last_name: str = "Besbes"
    age: int = 30
    job: str = "Data Scientist"

    def __repr__(self):
        return f"{self.first_name} {self.last_name} ({self.age})"

ahmed = Person()
print(ahmed)
# Ahmed Besbes (30)
```

## 4 – Упрощенная конвертация в кортеж или словарь

Экземпляры можно легко сериализовать в словари или кортежи. 
Механика оказывается полезной, когда ваш код взаимодействует 
с другими программами, которые ожидают именно эти типы.

```py
from dataclass import astuple, asdict

ahmed = Person()
print(astuple(ahmed)
# ('Ahmed', 'Besbes', 30, 'Data Scientist')

print(asdict(ahmed)
# {'first_name': 'Ahmed',
# 'last_name': 'Besbes',
# 'age': 30,
# 'job': 'Data Scientist'}
```

## 5 – Замороженные экземпляры/неизменяемые объекты

С помощью `dataclasses` можно создавать объекты, доступные только для чтения. Все, что нужно сделать – установить значение `frozen` в True внутри декоратора `@dataclass` перед нужным классом.

```py
@dataclass(frozen=True)
class Person:
     first_name: str = "Ahmed"
     last_name: str = "Besbes"
     age: int = 30
     job: str = "Data Scientist"
```

Как только вы так сделаете, вы запретите кому-либо изменять значения атрибутов 
после создания экземпляра класса.  
Если вы попробуете установить для атрибута замороженного экземпляра 
новое значение, получить ошибку `FrozenInstanceError`.'

![Пример изображения](https://habrastorage.org/r/w1560/getpro/habr/upload_files/9c3/1c7/6d8/9c31c76d81b8be72fe8bf68f726a2ba2.png)

## 6 – Не нужно писать методы сравнения

Когда вы определяете класс с использованием стандартного синтаксиса `Python`
 и прописываете равенство между двумя экземплярами, 
 имеющими одинаковые значения атрибутов, вы получаете следующую картину:

```py
class Person():
    def __init__(self, first_name, last_name, age, job):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.job = job
        
first_person = Person("Ahmed", "Besbes", 30, "Data scientist")
second_person = Person("Ahmed", "Besbes", 30, "Data scientist")

print(first_person == second_person)
# False ❌
```

Два объекта не **равны** и это нормально, поскольку класс `Person` 
фактически не реализует метод проверки равенства. 
Чтобы прописать равенство, вам придется самостоятельно реализовать 
метод __eq__ . Выглядеть он может так:

```py
def __eq__(self, other):
    if other.__class__ is not self.__class__:
        return NotImplemented
    return (self.first_name, 
            self.last_name, 
            self.age, 
            self.job) == (other.first_name,
                          other.last_name,
                          other.age,
                          other.job)
```

Метод сначала проверяет, что два объекта являются экземплярами 
одного и того же класса, а затем проверяет равенство между 
кортежами атрибутов. 

Теперь, если вы захотите добавить новые атрибуты в класс, 
вам придется снова обновлять метод eq. 
Аналогично с методами __ge__ ,__gt__ , __le__ и __lt__ , е
сли они используются.

Очень похоже на лишний код, не так ли? 
К счастью, dataclasses и тут нам помогут.

```py
@dataclass
class Person:
    first_name: str = "Ahmed"
    last_name: str = "Besbes"
    age: int = 30
    job: str = "Data Scientist"

first_person = Person()
second_person = Person()

print(first_person == second_person)
# True ✅
```

## 7 – Настраиваемое поведение атрибута с функцией field

Иногда вам может потребоваться атрибут, который определяется изнутри, 
а не при создании экземпляра класса. Такое бывает, 
если атрибут имеет значение, зависящее от ранее заданных атрибутов.

Тут вам на помощь приходит функция `field` из `dataclasses`.

С помощью этой функции и установки аргументов `itsinit` и `repr` в `False` 
при создании нового поля с именем `full_name`, мы все равно сможем создать 
экземпляр класса `Person` без установки атрибута `full_name`.

```py
from dataclasses import dataclass, field

@dataclass
class Person:
    first_name: str = "Ahmed"
    last_name: str = "Besbes"
    age: int = 30
    job: str = "Data Scientist"
    full_name: str = field(init=False, repr=False)
```

Этого атрибута еще нет в экземпляре. 
Если мы попробуем получить к нему доступ, то получим `AttributeError`.

Как установить значение `full_name` и при этом оставить 
его снаружи конструктора класса? 
Для этого нам придется использовать метод `__post_init__` .


## 8 – Метод post_init

В dataclasses есть специальный метод `__post_init__` .

Как следует из названия, этот метод вызывается сразу после метода `__init__` .

Возвращаясь к предыдущему примеру, мы видим, 
как этот метод можно вызвать для инициализации внутреннего атрибута, 
который зависит от ранее заданных атрибутов.

```py
@dataclass
class Person:
     first_name: str = "Ahmed"
     last_name: str = "Besbes"
     age: int = 30
     job: str = "Data Scientist"
     full_name: str = field(init=False, repr=True)
     def __post_init__(self):
         self.full_name = self.first_name + " " + self.last_name

ahmed = Person()
print(ahmed)
# Person(first_name='Ahmed', last_name='Besbes', age=30, job='Data Scientist', full_name='Ahmed Besbes')

ahmed.full_name
#'Ahmed Besbes'
```

Обратите внимание, что аргументу `repr` внутри функции `field` 
присвоено значение `True`, чтобы он был виден при выводе объекта. 
В предыдущем примере мы не смогли установить для этого аргумента значение `True`, 
поскольку атрибут `full_name` еще не был создан.

## 9 – Сравнение объектов и их сортировка

Одной из полезных механик, которую необходимо реализовать 
при работе с объектами, содержащими данные, является возможность сравнивать 
их и сортировать в любом желаемом порядке.

По умолчанию `dataclasses` реализуют `__eq__` . 
Чтобы работали другие виды сравнения 
(__lt__ (меньше), __le__ (меньше или равно), __gt__ (больше) и __ge__ (больше или равно)), 
мы должны установить аргумент `order` в значение `True` в декораторе `@dataclass`.

```py
@dataclasses(order=True)
```

Реализация этих методов подразумевает следующее: 
берется определенное поле и сравнивается с другими, в том порядке, 
в котором они определены, до тех пор, пока не будет найдено неравное значение.

Давайте вернемся к классу `Person`. 
Допустим, мы хотим сравнить экземпляры этого класса по атрибуту возраста 
(что имеет смысл, не так ли?).

Для этого нам нужно будет добавить поле, которое мы назовем `sort_index`, 
и установим его значение равным значению `age`.

И мы сделаем это, вызвав метод `__post_init__` , 
который мы видели в предыдущем примере.

```py
from dataclasses import dataclass, field

@dataclass(order=True)
class Person:
     first_name: str = "Ahmed"
     last_name: str = "Besbes"
     age: int = 30
     job: str = "Data Scientist"
     sort_index: int = field(init=False, repr=False)
     def __post_init__(self):
         self.sort_index = self.age

p1 = Person(age=30)
p2 = Person(age=20)

print(p1 > p2)
# True
```

Теперь экземпляры класса `Person` можно отсортировать по возрасту.

## Подведем итог

`Dataclasses` предоставляют множество механик, 
которые позволяют легко работать с классами – контейнерами данных.

В частности, этот модуль помогает:

* Писать меньше шаблонного кода;
* Представлять объекты в удобочитаемом формате;
* Реализовывать собственный порядок сравнения;
* Предоставлять быстрый доступ к атрибутам и проверять их;
* Использовать специальные методы, такие как __post_init__ для выполнения инициализации атрибутов, которые зависят от значений других атрибутов;
* Определять внутренние поля и т.д.

## Источники:

Пока я изучал `dataclasses`, я просмотрел множество ресурсов 
(статьи в блогах, видео на YouTube, PEP, официальную документацию Python).

Вот мой личный список самых интересных постов и видео, которые я нашел:

* [docs.python](https://docs.python.org/3/library/dataclasses.html)
* [realpython.com](https://realpython.com/python-data-classes/)
* [dev.to](https://dev.to/dbanty/you-should-use-python-dataclass-lkc)
* [dev.to](https://dev.to/isabelcmdcosta/dataclasses-in-python-are-nice-1fff)
* [youtu.be](https://youtu.be/vBH6GRJ1REM)
* [youtu.be](https://youtu.be/vRVVyl9uaZc)
* [medium.com](https://medium.com/mindorks/understanding-python-dataclasses-part-1-c3ccd4355c34)
* [invivoo.com](https://www.invivoo.com/dataclasses-python/)
* [florimond.dev](https://florimond.dev/en/posts/2018/10/reconciling-dataclasses-and-properties-in-python/)
