---
id: for-loops
title: 3.2 for Loops and Iterables
sidebar_position: 3
---

Loops are control structures that allow you to execute a block of code repeatedly. The `for` loop in Python is used for iterating over a sequence (such as a list, tuple, dictionary, string, or range) or other iterable objects.

### Basic `for` Loop Syntax

The `for` loop iterates over each item in a sequence, assigning it to a specified variable, and executing the code block for each item.

**Syntax:**

```python
for item in iterable:
    # Code to execute for each item
```

**Example: Iterating over a list**

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry
```

**Example: Iterating over a string**

```python
word = "Python"
for char in word:
    print(char)

# Output:
# P
# y
# t
# h
# o
# n
```

### The `range()` Function

The `range()` function is commonly used with `for` loops to generate a sequence of numbers.

*   `range(stop)`: Generates numbers from `0` up to (but not including) `stop`.
*   `range(start, stop)`: Generates numbers from `start` up to (but not including) `stop`.
*   `range(start, stop, step)`: Generates numbers from `start` up to (but not including) `stop`, incrementing by `step`.

**Examples:**

```python
# Loop 5 times (0 to 4)
for i in range(5):
    print(f"Count: {i}")

# Loop from 2 to 4
for i in range(2, 5):
    print(i) # Output: 2, 3, 4

# Loop with a step of 2
for i in range(0, 10, 2):
    print(i) # Output: 0, 2, 4, 6, 8
```

### `for` Loop with `else` Block

A `for` loop can optionally have an `else` block. The `else` block is executed *after* the loop completes normally (i.e., not terminated by a `break` statement).

**Example:**

```python
for i in range(3):
    print(f"Loop iteration {i}")
else:
    print("Loop finished normally.")

# Output:
# Loop iteration 0
# Loop iteration 1
# Loop iteration 2
# Loop finished normally.
```

If the loop is terminated by `break`, the `else` block is skipped:

```python
for i in range(5):
    if i == 2:
        print("Breaking loop at 2")
        break
    print(f"Loop iteration {i}")
else:
    print("Loop finished normally.") # This will not be printed

# Output:
# Loop iteration 0
# Loop iteration 1
# Breaking loop at 2
```

### Iterating with `enumerate()` and `zip()`

*   **`enumerate()`:** Used to get both the index and the value of an item while iterating.

    ```python
    colors = ["red", "green", "blue"]
    for index, color in enumerate(colors):
        print(f"Index {index}: {color}")

    # Output:
    # Index 0: red
    # Index 1: green
    # Index 2: blue
    ```

*   **`zip()`:** Used to iterate over multiple iterables simultaneously.

    ```python
    names = ["Alice", "Bob", "Charlie"]
    ages = [25, 30, 35]

    for name, age in zip(names, ages):
        print(f"{name} is {age} years old.")

    # Output:
    # Alice is 25 years old.
    # Bob is 30 years old.
    # Charlie is 35 years old.
    ```

```mermaid
graph TD
    A[Start] --> B{Iterable available?};
    B -- No --> H[End];
    B -- Yes --> C{Get next item};
    C --> D[Assign item to variable];
    D --> E[Execute Code Block];
    E -- More items? --> C;
    E -- No more items & no break --> F[Execute Else Block (Optional)];
    F --> H;
    E -- No more items & break --> H;
```
