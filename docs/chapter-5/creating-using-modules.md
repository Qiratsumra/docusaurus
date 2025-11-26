---
id: creating-using-modules
title: 5.2 Creating and Using Modules
sidebar_position: 3
---

After understanding what modules are, let's put that knowledge into practice by creating our own Python module and then learning how to use it in another script.

### Step 1: Create Your Module

Let's create a simple module named `geometry.py` that contains functions for basic geometric calculations.

```python title="geometry.py"
# geometry.py

PI = 3.14159

def circle_area(radius):
    """Calculates the area of a circle."""
    return PI * radius ** 2

def rectangle_area(length, width):
    """Calculates the area of a rectangle."""
    return length * width

def triangle_area(base, height):
    """Calculates the area of a triangle."""
    return 0.5 * base * height

# This block only runs when geometry.py is executed directly, not when imported
if __name__ == "__main__":
    print("Running geometry.py directly...")
    print(f"Area of circle with radius 5: {circle_area(5)}")
    print(f"Area of rectangle 4x6: {rectangle_area(4, 6)}")
```

#### Understanding `if __name__ == "__main__":`

This special construct is a common Python idiom. Code inside this block will only execute when the script is run directly (e.g., `python geometry.py`). It will *not* execute when the script is imported as a module into another script. This allows modules to have test code or example usage that doesn't interfere when they are used as libraries.

### Step 2: Use Your Module in Another Script

Now, let's create another Python script, `main.py`, in the **same directory** as `geometry.py`, and import our new module.

```python title="main.py"
# main.py

# Import the entire geometry module
import geometry

# Access functions and variables using dot notation
radius = 7
rect_length = 10
rect_width = 8

print(f"Using geometry.py module:")
print(f"The value of PI is: {geometry.PI}")
print(f"Area of circle with radius {radius}: {geometry.circle_area(radius)}")
print(f"Area of rectangle {rect_length}x{rect_width}: {geometry.rectangle_area(rect_length, rect_width)}")

# You can also import specific items from a module
from geometry import triangle_area

base = 5
height = 10
print(f"Area of triangle with base {base} and height {height}: {triangle_area(base, height)}")

# Example of aliasing an import
import geometry as geo
print(f"Area of circle with radius 3 (using alias): {geo.circle_area(3)}")
```

### Running `main.py`

When you run `python main.py`, you will see output similar to this:

```
Using geometry.py module:
The value of PI is: 3.14159
Area of circle with radius 7: 153.93791
Area of rectangle 10x8: 80
Area of triangle with base 5 and height 10: 25.0
```

Notice that the `print("Running geometry.py directly...")` message from `geometry.py` did not appear, because `geometry.py` was imported as a module, not run directly.

### Different Ways to Import

Python offers several ways to import modules and their contents:

1.  **`import module_name`:** Imports the entire module. You must use `module_name.item_name` to access its contents.
2.  **`from module_name import item_name`:** Imports specific items (functions, classes, variables) directly into the current namespace. You can then use `item_name` directly without the module prefix.
3.  **`from module_name import item1, item2 as alias`:** Imports multiple items and allows aliasing for brevity or to avoid name clashes.
4.  **`from module_name import *`:** Imports *all* public items from a module into the current namespace. **Generally discouraged** in production code because it can lead to name clashes and make it hard to tell where a function or variable came from.

**Summary of Import Types:**

| Import Type                        | Description                                        | Example (from `main.py`)                 |
| :--------------------------------- | :------------------------------------------------- | :--------------------------------------- |
| `import module`                    | Imports module, requires `module.item` prefix      | `import geometry` then `geometry.PI`     |
| `from module import item`          | Imports specific item, use `item` directly         | `from geometry import triangle_area`     |
| `import module as alias`           | Imports module with an alias                       | `import geometry as geo` then `geo.PI`   |
| `from module import item as alias` | Imports specific item with an alias                | `from geometry import circle_area as ca` |
| `from module import *`             | Imports all public items (discouraged)             | `from geometry import *`                 |

```mermaid
graph TD
    A[Create geometry.py] --> B[Define PI, circle_area, rectangle_area, triangle_area];
    A --> C[Add if __name__ == "__main__" block];
    C --> C1[Test code for geometry.py];

    D[Create main.py] --> E[import geometry];
    E --> F[Access geometry.PI, geometry.circle_area];
    F --> G[from geometry import triangle_area];
    G --> H[Use triangle_area directly];
    H --> I[import geometry as geo];
    I --> J[Use geo.rectangle_area];

    K[Run main.py] --> L[Outputs calculations];
    K --> M[if __name__ == "__main__" code in geometry.py is SKIPPED];
```
This hands-on example demonstrates the power and simplicity of organizing your Python code into modules for better structure and reusability.