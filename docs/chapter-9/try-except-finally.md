---
id: try-except-finally
title: 9.2 try, except, else, and finally Blocks
sidebar_position: 3
---

To handle exceptions gracefully in Python, you use `try`, `except`, `else`, and `finally` blocks. This construct allows you to separate the code that might raise an error from the code that handles the error.

### The `try-except` Block

The most basic form of exception handling is the `try-except` block.

*   The code that might cause an exception is placed inside the `try` block.
*   If an exception occurs in the `try` block, Python immediately stops executing the `try` block and jumps to the `except` block.
*   The `except` block contains the code that handles the specific exception(s) caught.

**Syntax:**

```python
try:
    # Code that might raise an exception
except ExceptionType:
    # Code to handle the specific ExceptionType
```

**Example:**

```python
try:
    result = 10 / 0  # This will raise a ZeroDivisionError
    print(result)
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

print("Program continues after exception handling.")

# Output:
# Error: Cannot divide by zero!
# Program continues after exception handling.
```

#### Catching Multiple Exceptions

You can catch multiple specific exceptions in several ways:

1.  **Multiple `except` blocks:**
    ```python
    try:
        num = int(input("Enter a number: "))
        result = 10 / num
        print(f"Result: {result}")
    except ValueError:
        print("Invalid input: Please enter an integer.")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    ```

2.  **Single `except` block with a tuple of exceptions:**
    ```python
    try:
        num = int(input("Enter a number: "))
        result = 10 / num
        print(f"Result: {result}")
    except (ValueError, ZeroDivisionError):
        print("An error occurred: Invalid input or division by zero.")
    ```

#### Catching the Generic `Exception`

You can catch all types of exceptions using the generic `Exception` class. This is usually not recommended as it can hide unexpected errors. It's better to catch specific exceptions whenever possible.

```python
try:
    # Some potentially problematic code
    my_list = [1, 2]
    print(my_list[5]) # IndexError
except Exception as e: # 'e' is the exception object
    print(f"An unexpected error occurred: {e}")
```

### The `else` Block

The `else` block is optional and is executed only if the code inside the `try` block runs without raising any exceptions.

**Syntax:**

```python
try:
    # ...
except ExceptionType:
    # ...
else:
    # Code to execute if NO exception occurs in the try block
```

**Example:**

```python
try:
    num1 = int(input("Enter numerator: "))
    num2 = int(input("Enter denominator: "))
    result = num1 / num2
except (ValueError, ZeroDivisionError):
    print("Invalid input or division by zero.")
else:
    print(f"Division successful. Result: {result}")
```

### The `finally` Block

The `finally` block is optional and is *always* executed, regardless of whether an exception occurred in the `try` block or not. It's commonly used for cleanup operations, such as closing files or releasing resources.

**Syntax:**

```python
try:
    # ...
except ExceptionType:
    # ...
else:
    # ...
finally:
    # Code that will always execute
```

**Example:**

```python
file_object = None
try:
    file_object = open("non_existent_file.txt", "r")
    content = file_object.read()
    print(content)
except FileNotFoundError:
    print("File not found.")
finally:
    if file_object: # Check if file_object was successfully opened
        file_object.close()
        print("File closed in finally block.")

print("Program finished.")
```
In this example, even though `FileNotFoundError` occurs, the `finally` block ensures that `file_object.close()` would be called if the file had been successfully opened. For file handling, the `with` statement is generally preferred over `try-finally` for automatic resource management.

```mermaid
graph TD
    A[Start] --> B[try block];
    B -- No Exception --> D[else block (optional)];
    B -- Exception --> C[except block];
    C --> F[finally block (optional)];
    D --> F;
    F --> G[End];
```
Mastering `try`, `except`, `else`, and `finally` blocks is crucial for writing robust and fault-tolerant Python applications that can gracefully handle unexpected situations.