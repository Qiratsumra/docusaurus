---
id: type-hinting
title: Type Hinting
sidebar_position: 3
---

# Type Hinting

Python is dynamically typed, meaning you don't have to declare variable types. However, **Type Hinting** (introduced in Python 3.5) allows you to add optional type declarations. This helps with code readability and allows tools (like IDEs and linters) to catch errors early.

## Basic Syntax

Use a colon `:` after the variable name and `->` for the return type.

```python
def greet(name: str) -> str:
    return f"Hello, {name}"

age: int = 25
```

## Common Types

*   `int`, `float`, `bool`, `str`
*   `list`, `tuple`, `dict`, `set` (from `typing` module in older Python, built-in in 3.9+)
*   `Optional`, `Union`, `Any`

### Examples

```python
from typing import List, Dict, Optional

def process_items(items: List[str]) -> None:
    for item in items:
        print(item)

def find_user(user_id: int) -> Optional[Dict[str, str]]:
    if user_id == 1:
        return {"name": "Alice"}
    return None
```

## Static Type Checking

Type hints are ignored by the Python runtime. To enforce them, you use a static type checker like **mypy**.

```bash
pip install mypy
mypy my_script.py
```

## Recap

*   Type hints make code easier to read and debug.
*   They are optional but highly recommended for larger projects.
*   Use tools like `mypy` to verify your types.
