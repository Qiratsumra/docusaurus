---
id: package-structure
title: Package Structure
sidebar_position: 2
---

# Package Structure

A well-structured project is easier to navigate, understand, and maintain.

## The `src` Layout

A modern and recommended structure is the `src` layout.

```text
my_project/
├── src/
│   └── my_package/
│       ├── __init__.py
│       ├── main.py
│       └── utils.py
├── tests/
│   ├── __init__.py
│   └── test_main.py
├── pyproject.toml
├── README.md
└── .gitignore
```

### Key Components

*   **`src/`**: Contains the actual source code. This prevents import errors where you accidentally import the local folder instead of the installed package.
*   **`tests/`**: Contains your test suite.
*   **`pyproject.toml`**: The modern configuration file for build tools and dependencies (replaces `setup.py`).
*   **`README.md`**: The entry point for documentation.

## Modules vs Packages

*   **Module**: A single `.py` file.
*   **Package**: A directory containing `__init__.py` and multiple modules.

## `__init__.py`

This file marks a directory as a Python package. It can be empty, or it can expose specific functions/classes to make imports cleaner.

```python
# src/my_package/__init__.py
from .main import my_function
```

Then users can do:
```python
from my_package import my_function
```

## Recap

*   Use the `src` layout for robustness.
*   Separate source code from tests.
*   Use `__init__.py` to define packages.
