---
author: Stavis Vega
title: Working with files Pyhton
date: 2019-03-08
description: A couple of shortcodes to save time when writing python scripts
math: true
---
## Save / Load to json

Save data to json file

```python
import json

# Save data to json file
with open('file_name.json', 'a') as f:
    json.dump(res, f, indent=4, ensure_ascii=False)
```

Load data from json file

```python
import json

# Load data from json file
with open('file_name.json', 'r') as f:
    serieses = json.load(f)
```

## Save / Load to file

Save data to file

```python
# Save data to file
with open('index.html', 'w') as f:
    f.write(res.text)
```

Load data from file

```python
# Load data from file
with open('index.html', 'r') as f:
    html = f.read()
```

## Paths

Get path to current dir

```python
from os.path import dirname, abspath

# get current dir
cur_dir = dirname(abspath(__file__))
```