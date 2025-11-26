---
id: generators-and-iterators
title: Generators and Iterators
sidebar_position: 3
---

# Generators and Iterators

When working with large datasets, loading everything into memory at once can be inefficient or impossible. Python's iterators and generators allow you to process data one item at a time (lazy evaluation).

## Iterators

An **iterator** is an object that contains a countable number of values. You can traverse through all the values using the `next()` function.

Technically, in Python, an iterator is an object which implements the iterator protocol, which consists of the methods `__iter__()` and `__next__()`.

## Generators

Generators are a simple way of creating iterators. They are written like regular functions but use the `yield` statement whenever they want to return data. Each time `next()` is called on it, the generator resumes where it left off (it remembers all the data values and which statement was last executed).

### Creating a Generator

```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()

print(next(gen)) # Output: 1
print(next(gen)) # Output: 2
print(next(gen)) # Output: 3
```

### Generator Expressions

Similar to list comprehensions, but with parentheses `()`. They return a generator object.

```python
squares_gen = (x*x for x in range(10))

for square in squares_gen:
    print(square)
```

## Why Use Generators?

1.  **Memory Efficiency**: They generate values on the fly and don't store the entire sequence in memory.
2.  **Infinite Sequences**: You can represent infinite streams of data (e.g., Fibonacci numbers).

### Example: Fibonacci Generator

```python
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for num in fibonacci(100):
    print(num)
```

## Recap

*   **Iterators** allow you to loop through collections.
*   **Generators** are functions that `yield` values one by one.
*   Use generators for large datasets or infinite sequences to save memory.
