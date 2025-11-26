---
id: list-comprehensions
title: List Comprehensions
sidebar_position: 2
---

# List Comprehensions

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.

## Basic Syntax

The basic syntax is:

```python
[expression for item in iterable if condition]
```

## Examples

### 1. Squares of Numbers

**Traditional Loop:**

```python
squares = []
for x in range(10):
    squares.append(x**2)
print(squares)
# Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

**List Comprehension:**

```python
squares = [x**2 for x in range(10)]
print(squares)
# Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### 2. Filtering with `if`

Get only even numbers:

```python
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
# Output: [0, 2, 4, 6, 8]
```

## Dictionary and Set Comprehensions

Python also supports comprehensions for dictionaries and sets.

**Dictionary Comprehension:**

```python
square_dict = {x: x**2 for x in (2, 4, 6)}
print(square_dict)
# Output: {2: 4, 4: 16, 6: 36}
```

**Set Comprehension:**

```python
unique_lengths = {len(w) for w in ["apple", "banana", "cherry", "apple"]}
print(unique_lengths)
# Output: {5, 6}
```

## Recap

*   List comprehensions are more concise and often faster than traditional loops.
*   They can include conditions to filter items.
*   Similar syntax exists for dictionaries and sets.
