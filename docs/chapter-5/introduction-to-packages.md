---
id: introduction-to-packages
title: 5.3 Introduction to Packages
sidebar_position: 4
---

While modules help organize single Python files, **packages** allow you to organize related modules into a directory hierarchy. Think of a package as a directory that contains multiple modules and sub-packages. This structure is essential for larger projects and for distributing libraries.

### What is a Python Package?

A Python package is essentially a directory containing a special file called `__init__.py`. This file can be empty, but its presence tells Python that the directory should be treated as a package.

#### Package Structure Example

Consider a project for a "Drawing Application" that needs modules for shapes and colors. A typical package structure might look like this:

```
drawing_app/
├── __init__.py
├── shapes/
│   ├── __init__.py
│   ├── circle.py
│   ├── rectangle.py
│   └── triangle.py
└── colors/
    ├── __init__.py
    ├── basic_colors.py
    └── palettes.py
```

In this structure:

*   `drawing_app` is the main package.
*   `shapes` and `colors` are sub-packages within `drawing_app`.
*   `circle.py`, `rectangle.py`, `triangle.py` are modules within the `shapes` sub-package.
*   `basic_colors.py`, `palettes.py` are modules within the `colors` sub-package.

### The Role of `__init__.py`

The `__init__.py` file serves several purposes:

1.  **Identifies a Package:** Its primary role is to tell Python that a directory is a Python package, not just a regular directory.
2.  **Package Initialization:** It can contain initialization code for the package or set up variables that will be available when the package is imported.
3.  **Define `__all__`:** It can define `__all__` to control what gets imported when `from package import *` is used.
4.  **Simplify Imports:** It can import selected parts of sub-modules into the package's top level, making them directly accessible from the package itself.

**Example `__init__.py` (inside `shapes` directory):**

```python title="drawing_app/shapes/__init__.py"
# drawing_app/shapes/__init__.py

# This makes circle_area directly accessible from drawing_app.shapes
from .circle import circle_area

# You can also import other things or define __all__
# __all__ = ["circle", "rectangle"]
```

If `__init__.py` is empty, no special initialization or imports happen when the package is imported.

### Why Use Packages?

*   **Hierarchical Organization:** Allows for deep nesting of modules, reflecting the logical structure of a complex application.
*   **Avoid Name Clashes:** Provides distinct namespaces for modules with the same name (e.g., you could have a `data.py` module in both `shapes` and `colors` if needed).
*   **Better Manageability:** Easier to understand the relationships between different parts of a large project.
*   **Distribution:** Packages are the standard way to bundle and distribute Python libraries (e.g., via PyPI).

### Creating a Simple Package Example

Let's illustrate with a minimal package structure:

```
my_package/
├── __init__.py
└── greetings.py
```

**`my_package/greetings.py`:**

```python title="my_package/greetings.py"
# my_package/greetings.py

def say_hello(name):
    return f"Hello, {name}!"

def say_hi(name):
    return f"Hi, {name}!"
```

**`my_package/__init__.py` (can be empty, or for convenience):**

```python title="my_package/__init__.py"
# my_package/__init__.py
# You can optionally make functions directly available from the package
from .greetings import say_hello
```

Now, from a script outside `my_package` (e.g., in the parent directory), you can import and use it:

```python title="main_app.py"
# main_app.py (in the directory above my_package)

# Method 1: Import the module within the package
import my_package.greetings
print(my_package.greetings.say_hello("Alice")) # Output: Hello, Alice!

# Method 2: Import a specific function from a module within the package
from my_package.greetings import say_hi
print(say_hi("Bob")) # Output: Hi, Bob!

# Method 3: If say_hello was exposed in __init__.py
from my_package import say_hello
print(say_hello("Charlie")) # Output: Hello, Charlie!
```

This establishes the basic concept of packages. The next section will delve deeper into the various ways to import modules and items from within packages.

```mermaid
graph TD
    A[Python Package] --> B[Directory];
    B --> C[__init__.py file];
    C --> C1[Identifies as package];
    C --> C2[Initialization code (optional)];
    C --> C3[Controls 'from package import *'];

    B --> D[Modules];
    B --> E[Sub-packages];

    A --> F[Benefits];
    F --> F1[Hierarchical Organization];
    F --> F2[Avoids Name Clashes];
    F --> F3[Manageability];
    F --> F4[Distribution];
```
