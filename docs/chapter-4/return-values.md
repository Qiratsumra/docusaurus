---
id: return-values
title: 4.3 Return Values
sidebar_position: 4
---

So far, our functions have primarily printed output directly to the console. However, functions are often designed to process some data and then give back a result. This result is called a **return value**, and it's sent back to the part of the code that called the function using the `return` statement.

### The `return` Statement

The `return` statement immediately exits a function and sends a value (or values) back to the caller.

**Syntax:**

```python
def function_name(parameters):
    # ...
    return expression_or_value
```

**Example: A function that calculates and returns a sum**

```python
def add_numbers(num1, num2):
    """Adds two numbers and returns their sum."""
    total = num1 + num2
    return total

# Call the function and store its return value
result = add_numbers(5, 7)
print(f"The sum is: {result}") # Output: The sum is: 12

# You can also use the return value directly
print(f"10 + 20 = {add_numbers(10, 20)}") # Output: 10 + 20 = 30
```

### Functions Returning `None`

If a function does not explicitly include a `return` statement, or if it has `return` without a value, it implicitly returns `None`. `None` is Python's special value representing the absence of a value.

**Example:**

```python
def greet(name):
    print(f"Hello, {name}!")

# This function prints, but doesn't explicitly return anything
value = greet("Alice")
print(value) # Output: None
```
In the example above, `greet("Alice")` prints "Hello, Alice!", but when its result is assigned to `value`, `value` becomes `None`.

### Returning Multiple Values

Python functions can conveniently return multiple values. These values are returned as a single tuple.

**Example:**

```python
def get_user_info(name, age):
    """Returns a tuple containing user's name and age."""
    return name, age # Returns a tuple (name, age)

# Receive multiple values using tuple unpacking
user_name, user_age = get_user_info("Bob", 30)
print(f"Name: {user_name}, Age: {user_age}") # Output: Name: Bob, Age: 30

# You can also just receive the tuple
info_tuple = get_user_info("Charlie", 25)
print(info_tuple) # Output: ('Charlie', 25)
```

### Early Exit with `return`

A `return` statement immediately exits the function, regardless of whether there's more code below it. This can be useful for handling edge cases or specific conditions early.

**Example:**

```python
def divide(a, b):
    if b == 0:
        print("Error: Cannot divide by zero!")
        return None # Return None to indicate failure
    return a / b

result1 = divide(10, 2)
print(f"Result 1: {result1}") # Output: Result 1: 5.0

result2 = divide(10, 0) # Output: Error: Cannot divide by zero!
print(f"Result 2: {result2}") # Output: Result 2: None
```
In the `divide` function, if `b` is 0, an error message is printed, and `None` is returned, preventing the division operation from causing an error.

```mermaid
graph TD
    A[Function Call] --> B[Function Execution Starts];
    B --> C{Return Statement Encountered?};
    C -- Yes --> D[Function Exits];
    D --> E[Return Value to Caller];
    C -- No --> F[Function Continues to End];
    F --> G[Function Exits];
    G --> H[Return None to Caller (Implicit)];
```
Using return values properly allows you to build complex programs by having functions communicate results to each other, making your code modular and powerful.