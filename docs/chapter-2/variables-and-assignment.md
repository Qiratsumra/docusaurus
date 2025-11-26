---
id: variables-and-assignment
title: 2.1 Variables and Assignment
sidebar_position: 2
---

In programming, a **variable** is a named storage location that holds a value. Think of it as a labeled box where you can put data. **Assignment** is the process of giving a value to a variable.

### Declaring and Assigning Variables

In Python, you don't need to explicitly declare the type of a variable before using it. You simply assign a value to a name, and Python automatically infers its type.

**Syntax:**

```python
variable_name = value
```

**Example:**

```python
# Assigning an integer to a variable
age = 30

# Assigning a string to a variable
name = "Alice"

# Assigning a floating-point number
price = 19.99

# Assigning a boolean value
is_student = True
```

### Variable Naming Rules and Conventions

Python has specific rules and conventions for naming variables:

**Rules (Must Follow):**

1.  **Start with a letter or underscore:** `my_variable`, `_internal_var`. Cannot start with a number (e.g., `1variable` is invalid).
2.  **Contain only alphanumeric characters and underscores:** `my_variable_1`, `data_2`. Special characters (e.g., `!`, `@`, `#`) are not allowed.
3.  **Case-sensitive:** `age`, `Age`, and `AGE` are three different variables.
4.  **Cannot be Python keywords:** Words like `if`, `else`, `for`, `while`, `print`, `True`, `False`, `None` are reserved and cannot be used as variable names.

**Conventions (Highly Recommended - PEP 8):**

1.  **Lowercase with underscores (snake_case):** For improved readability, variable names should be lowercase, with words separated by underscores (e.g., `first_name`, `total_amount`).
2.  **Meaningful Names:** Choose names that clearly describe the purpose of the variable (e.g., `user_count` instead of `uc`).
3.  **Avoid single-letter variables:** Unless it's a loop counter (`i`, `j`) or a very short-lived temporary variable, use descriptive names.
4.  **Avoid using `l`, `O`, `I`:** These can be confused with the numbers `1` and `0`.

```mermaid
graph TD
    A[Start] --> B{Choose Variable Name};
    B --> C{Follow Naming Rules};
    C -- Valid --> D{Assign Value};
    C -- Invalid --> E[Error: Syntax Error];
    D --> F[Variable Stored];
    F --> G[End];

    C --- Naming Rules --- H[Starts with letter or _];
    C --- Naming Rules --- I[Only alphanumeric and _];
    C --- Naming Rules --- J[Case-sensitive];
    C --- Naming Rules --- K[Not a keyword];
```

### Multiple Assignments

Python allows you to assign multiple values to multiple variables in a single line:

```python
x, y, z = 10, 20, 30
print(x) # Output: 10
print(y) # Output: 20

# Assigning the same value to multiple variables
a = b = c = 100
print(a, b, c) # Output: 100 100 100
```

### Type Checking and Type Conversion

While Python is dynamically typed, you can check the type of a variable using the `type()` function. You can also convert between types using built-in functions like `int()`, `float()`, `str()`, and `bool()`.

```python
my_variable = "hello"
print(type(my_variable))  # Output: <class 'str'>

another_variable = 123
print(type(another_variable)) # Output: <class 'int'>

# Type conversion
num_str = "123"
num_int = int(num_str)
print(num_int, type(num_int)) # Output: 123 <class 'int'>

float_num = float("3.14")
print(float_num, type(float_num)) # Output: 3.14 <class 'float'>

int_to_str = str(456)
print(int_to_str, type(int_to_str)) # Output: '456' <class 'str'>
```

Understanding variables and how to assign values to them is fundamental. They are the containers for all the data your Python programs will work with.