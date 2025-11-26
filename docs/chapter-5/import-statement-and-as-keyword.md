---
id: import-statement-and-as-keyword
title: 5.4 The import Statement and as Keyword
sidebar_position: 5
---

The `import` statement is how you bring modules and packages into your current Python script. The `as` keyword provides a way to create aliases, which can make your code cleaner or prevent name conflicts.

### The `import` Statement

We've seen `import` in action. Let's formalize the different ways to use it.

#### 1. `import module_name`

This is the most common and recommended way to import a module. It imports the entire module, and you must use the module's name as a prefix to access its contents.

**Example:**

```python
import math

print(math.pi)       # Accessing a variable
print(math.sqrt(16)) # Calling a function

# Output:
# 3.141592653589793
# 4.0
```
**Advantage:** Clear what functionality comes from which module, preventing name clashes.
**Disadvantage:** Can be verbose if you use many items from the same module or if the module name is long.

#### 2. `from module_name import item_name`

This imports specific functions, classes, or variables directly into the current namespace. You can then use the `item_name` directly without the module prefix.

**Example:**

```python
from math import pi, sqrt

print(pi)       # Accessing directly
print(sqrt(25)) # Calling directly

# Output:
# 3.141592653589793
# 5.0
```
**Advantage:** Less verbose, direct access to items.
**Disadvantage:** Can lead to name clashes if you import items with the same name from different modules. Can also make it less clear where a function originated from without looking at the import statements.

#### 3. `from module_name import *` (Wildcard Import)

This imports *all* public names (those not starting with an underscore) from a module into the current namespace.

**Example:**

```python
# from math import * # This is generally discouraged

# print(pi)
# print(sqrt(36))
```
**Advantage:** Extremely concise, especially for interactive sessions or small scripts.
**Disadvantage:** **Highly discouraged for larger projects.** It pollutes the current namespace, making it difficult to determine where a name came from, increases the risk of name clashes, and can make debugging harder. Avoid using it in production code.

### The `as` Keyword for Aliasing

The `as` keyword allows you to give a temporary alias (an alternative name) to an imported module or an imported item. This is useful for:

*   **Shorter Names:** Making long module names more convenient to type.
*   **Avoiding Name Clashes:** Renaming an imported item to prevent it from conflicting with an existing name in your current script.

#### 1. Aliasing a Module

```python
import numpy as np # Common convention for NumPy
import pandas as pd # Common convention for Pandas

# Now use np instead of numpy
# arr = np.array([1, 2, 3])
# df = pd.DataFrame(...)
```

#### 2. Aliasing an Item

```python
from math import sqrt as square_root_function

print(square_root_function(49)) # Output: 7.0
```

### Absolute vs. Relative Imports (within packages)

When working within packages, you might encounter absolute and relative imports.

*   **Absolute Imports:** Use the full path from the project's root. Recommended for clarity and consistency.

    ```python
    # In 'drawing_app/main.py'
    from drawing_app.shapes import circle
    from drawing_app.colors.basic_colors import red
    ```

*   **Relative Imports:** Use dots (`.` or `..`) to specify a module's location relative to the current module. Useful for keeping imports concise within a package, but can be less clear for readers unfamiliar with the package structure.

    ```python
    # In 'drawing_app/shapes/rectangle.py'
    # From current package 'shapes', import 'circle' module
    from . import circle

    # From parent package 'drawing_app', import 'basic_colors' module
    from ..colors import basic_colors
    ```
    *   `.`: Refers to the current package.
    *   `..`: Refers to the parent package.

```mermaid
graph TD
    A[Import Statement] --> B[import module_name];
    B --> B1[Access: module_name.item];

    A --> C[from module_name import item_name];
    C --> C1[Access: item_name];

    A --> D[from module_name import *];
    D --> D1[Imports all public items (discouraged)];

    A --> E[as Keyword];
    E --> E1[Aliasing module: import numpy as np];
    E --> E2[Aliasing item: from math import sqrt as square_root];

    F[Import Types (within packages)] --> G[Absolute Import];
    G --> G1[from package.subpackage import module];

    F --> H[Relative Import];
    H --> H1[from . import module];
    H --> H2[from ..parent_package import module];
```
Choosing the right import strategy improves code organization, readability, and helps manage dependencies effectively in your Python projects.