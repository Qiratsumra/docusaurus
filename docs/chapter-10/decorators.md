---
id: decorators
title: Decorators
sidebar_position: 4
---

# Decorators

Decorators are a powerful and expressive feature in Python that allows you to modify the behavior of a function or class. They are essentially wrappers that can execute code before and after the wrapped function runs, without modifying the function itself.

## Basic Syntax

Decorators use the `@` symbol.

```python
@my_decorator
def my_function():
    pass
```

This is equivalent to:

```python
def my_function():
    pass
my_function = my_decorator(my_function)
```

## Creating a Simple Decorator

Here is a decorator that prints a message before and after a function runs.

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

**Output:**
```text
Something is happening before the function is called.
Hello!
Something is happening after the function is called.
```

## Decorators with Arguments

If the function being decorated takes arguments, the wrapper function needs to accept them. `*args` and `**kwargs` are commonly used.

```python
def do_twice(func):
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice

@do_twice
def greet(name):
    print(f"Hello {name}")

greet("World")
```

**Output:**
```text
Hello World
Hello World
```

## Common Use Cases

1.  **Logging**: Record when functions are called.
2.  **Timing**: Measure how long a function takes to execute.
3.  **Access Control**: Check if a user is logged in (common in web frameworks like Flask/Django).

## Recap

*   **Decorators** wrap functions to extend their behavior.
*   They use the `@decorator_name` syntax.
*   They are widely used in Python frameworks and libraries.
