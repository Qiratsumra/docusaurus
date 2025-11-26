---
id: scope
title: 4.4 Local vs. Global Scope
sidebar_position: 5
---

In Python, the **scope** of a variable determines where in your program that variable can be accessed or modified. Understanding scope is crucial for avoiding unexpected behavior and writing clear, maintainable code. Python primarily has two types of scope: **Local** and **Global**.

### Global Scope

A variable defined outside of any function (at the top level of a script or module) has **global scope**. Global variables can be accessed from anywhere within the module, both inside and outside functions.

**Example:**

```python
global_variable = "I am a global variable"

def access_global():
    print(global_variable) # Can access global_variable

access_global() # Output: I am a global variable
print(global_variable) # Output: I am a global variable
```

### Local Scope

A variable defined inside a function has **local scope**. Local variables can only be accessed from within the function where they are defined. They cease to exist once the function finishes execution.

**Example:**

```python
def my_function():
    local_variable = "I am a local variable"
    print(local_variable)

my_function() # Output: I am a local variable

# print(local_variable) # This would cause a NameError, because local_variable is not defined in global scope
```

### LEGB Rule (Local, Enclosing, Global, Built-in)

Python follows a specific rule for resolving names (variables, functions, classes). When you reference a name, Python searches for it in this order:

1.  **Local (L):** Inside the current function.
2.  **Enclosing (E):** In the local scope of any enclosing functions (for nested functions).
3.  **Global (G):** At the top level of the current module.
4.  **Built-in (B):** In the special built-in module that Python automatically loads (e.g., `print`, `len`).

```mermaid
graph LR
    A[Reference a name] --> B{Local Scope?};
    B -- No --> C{Enclosing Function Scope?};
    C -- No --> D{Global (Module) Scope?};
    D -- No --> E{Built-in Scope?};
    E -- No --> F[NameError];
    B -- Yes --> G[Use Local Name];
    C -- Yes --> H[Use Enclosing Name];
    D -- Yes --> I[Use Global Name];
    E -- Yes --> J[Use Built-in Name];
```

### Modifying Global Variables within a Function

By default, if you assign a value to a variable inside a function, Python treats it as a new local variable, even if a global variable with the same name exists.

**Example:**

```python
global_var = 10

def modify_variable():
    global_var = 20 # This creates a new LOCAL variable named global_var
    print(f"Inside function (local): {global_var}")

modify_variable() # Output: Inside function (local): 20
print(f"Outside function (global): {global_var}") # Output: Outside function (global): 10 (global_var remains unchanged)
```

To explicitly modify a **global variable** from within a function, you must use the `global` keyword.

```python
global_var = 10

def modify_global_variable():
    global global_var # Declare intent to modify the global variable
    global_var = 20
    print(f"Inside function (global modified): {global_var}")

modify_global_variable() # Output: Inside function (global modified): 20
print(f"Outside function (global): {global_var}") # Output: Outside function (global): 20
```

:::caution Important Note
While the `global` keyword allows you to modify global variables, it is generally considered good practice to minimize its use. Over-reliance on global variables can make code harder to understand, debug, and maintain, as functions can have "side effects" that are not immediately obvious from their arguments or return values. It's often better to pass variables as arguments to functions and return new values.
:::

### Nonlocal Scope (for Nested Functions)

When you have nested functions (a function defined inside another function), the inner function can access variables from the enclosing (outer) function's scope. This is known as **nonlocal scope**. To modify a variable in an enclosing scope (but not the global scope), you use the `nonlocal` keyword.

**Example:**

```python
def outer_function():
    x = 10 # Enclosing scope variable

    def inner_function():
        nonlocal x # Declare intent to modify 'x' from the enclosing scope
        x = 20
        print(f"Inner function: x = {x}")

    inner_function() # Output: Inner function: x = 20
    print(f"Outer function: x = {x}") # Output: Outer function: x = 20

outer_function()
```

Understanding scope is crucial for managing data flow and preventing unintended modifications to your variables. Always be mindful of where your variables are defined and how they can be accessed.