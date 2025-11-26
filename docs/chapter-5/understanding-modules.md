---
id: understanding-modules
title: 5.1 Understanding Modules
sidebar_position: 2
---

In Python, a **module** is simply a file containing Python definitions and statements. The file name is the module name with the suffix `.py` appended. Modules allow you to logically organize your Python code, making it reusable and easier to maintain.

### Why Use Modules?

Consider a large program that requires many lines of code. If all this code were in a single file, it would become difficult to read, debug, and manage. Modules solve this problem by:

1.  **Reusability:** Code written in one module can be reused in other Python programs.
2.  **Organization:** Modules group related code (functions, classes, variables) together, making the code base more structured.
3.  **Namespace Isolation:** Each module has its own namespace, preventing name clashes between identifiers in different modules. For example, `module1.function_name` is distinct from `module2.function_name`.
4.  **Simplicity:** Focusing on one small portion of a program at a time makes development easier.

### What Can a Module Contain?

A Python module can define:

*   **Functions:** Reusable blocks of code.
*   **Classes:** Blueprints for creating objects.
*   **Variables:** Data stored by the module.
*   **Constants:** Variables whose values should not change.
*   **Executable Statements:** Code that runs when the module is first imported.

### Example: A Simple Module

Let's create a file named `my_module.py` with some definitions:

```python title="my_module.py"
# my_module.py

PI = 3.14159

def greet(name):
    return f"Hello, {name} from my_module!"

class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

print("my_module has been loaded!") # This will execute upon import
```

When this file is treated as a module, its contents (`PI`, `greet`, `Calculator`) become available for use in other Python scripts. The `print` statement inside the module will execute the first time the module is imported.

### The Module Search Path

When you `import` a module, Python looks for it in a specific order:

1.  **Current directory:** The directory from which the input script was run.
2.  **PYTHONPATH:** A list of directories specified by the environment variable `PYTHONPATH`.
3.  **Standard Library directories:** Directories where Python's built-in modules are installed.
4.  **Site-packages directory:** Directory for third-party modules installed by pip.

You can inspect the paths Python searches by looking at `sys.path`:

```python
import sys
print(sys.path)
```
This understanding of modules is foundational for working with Python's rich ecosystem of libraries and for structuring your own projects effectively.

```mermaid
graph TD
    A[Module (e.g., my_module.py)] --> B[Contains Definitions];
    B --> B1[Functions];
    B --> B2[Classes];
    B --> B3[Variables/Constants];
    B --> B4[Executable Statements];

    A --> C[Benefits];
    C --> C1[Reusability];
    C --> C2[Organization];
    C --> C3[Namespace Isolation];
    C --> C4[Simplicity];

    D[Import Mechanism] --> E[Python searches for module];
    E --> E1[Current directory];
    E --> E2[PYTHONPATH];
    E --> E3[Standard Library];
    E --> E4[Site-packages];
```
