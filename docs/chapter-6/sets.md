---
id: sets
title: 6.4 Sets
sidebar_position: 5
---

**Sets** are an unordered collection data type that is mutable and contains no duplicate elements. They are primarily used to store unique items and to perform mathematical set operations like union, intersection, difference, and symmetric difference.

### Creating Sets

Sets are created by placing all the items inside curly braces `{}`, separated by commas, or by using the `set()` constructor.

:::caution Important Note
To create an empty set, you must use `set()`. Using `{}` creates an empty dictionary, not an empty set.
:::

```python
# An empty set
empty_set = set()

# A set of integers
numbers = {1, 2, 3, 4, 5}

# A set with duplicate elements (duplicates are automatically removed)
unique_numbers = {1, 2, 2, 3, 4, 4, 5}
print(unique_numbers) # Output: {1, 2, 3, 4, 5}

# A set of mixed data types (immutable elements only)
mixed_set = {1, "hello", 3.14, True}

# Creating a set from a list or tuple
my_list = [1, 2, 2, 3, 4]
set_from_list = set(my_list)
print(set_from_list) # Output: {1, 2, 3, 4}

print(empty_set)      # Output: set()
print(numbers)        # Output: {1, 2, 3, 4, 5}
print(mixed_set)      # Output: {1, 3.14, 'hello', True} (Order might vary)
```

### Accessing Set Elements

Sets are unordered, so you cannot access elements using indexing or slicing. You can iterate through a set using a `for` loop, or check for membership using the `in` keyword.

```python
my_set = {10, 20, 30, 40}

# Iterating through a set
for item in my_set:
    print(item)
# Output (order may vary):
# 10
# 20
# 30
# 40

# Checking for membership
print(20 in my_set)    # Output: True
print(50 in my_set)    # Output: False
```

### Modifying Sets

Sets are mutable, so you can add or remove elements after creation.

#### 1. Adding elements

*   `.add(item)`: Adds a single element to the set.
*   `.update(iterable)`: Adds multiple elements from an iterable (like a list or another set) to the set.

```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set) # Output: {1, 2, 3, 4}

my_set.update([5, 6, 7])
print(my_set) # Output: {1, 2, 3, 4, 5, 6, 7}
```

#### 2. Removing elements

*   `.remove(item)`: Removes the specified item. Raises `KeyError` if the item is not found.
*   `.discard(item)`: Removes the specified item if it is present. Does *not* raise an error if the item is not found.
*   `.pop()`: Removes and returns an arbitrary element from the set. Raises `KeyError` if the set is empty.
*   `.clear()`: Removes all elements from the set.

```python
my_set = {1, 2, 3, 4, 5}
my_set.remove(3)
print(my_set) # Output: {1, 2, 4, 5}

my_set.discard(10) # No error
print(my_set) # Output: {1, 2, 4, 5}

popped_item = my_set.pop() # Removes an arbitrary element
print(popped_item) # Output: 1 (or 2, 4, or 5)
print(my_set) # Output: {2, 4, 5} (remaining elements)

my_set.clear()
print(my_set) # Output: set()
```

### Set Operations

Sets support mathematical set operations.

| Operator / Method | Description                  | Example                 | Result           |
| :---------------- | :--------------------------- | :---------------------- | :--------------- |
| `|` / `.union()`  | Union (all unique elements)  | `A | B`                 | `{1,2,3,4,5,6}`  |
| `&` / `.intersection()` | Intersection (common elements) | `A & B`                 | `{3,4}`          |
| `-` / `.difference()` | Difference (elements in A but not B) | `A - B`                 | `{1,2}`          |
| `^` / `.symmetric_difference()` | Symmetric Difference (elements in A or B but not both) | `A ^ B`                 | `{1,2,5,6}`      |
| `<=` / `.issubset()` | Returns True if all elements of one set are in another | `A <= B`                | `False`          |
| `>=` / `.issuperset()`| Returns True if one set contains all elements of another | `A >= B`                | `False`          |

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

print(f"Union: {set1 | set2}")             # Output: {1, 2, 3, 4, 5, 6}
print(f"Intersection: {set1 & set2}")      # Output: {3, 4}
print(f"Difference (set1 - set2): {set1 - set2}") # Output: {1, 2}
print(f"Symmetric Difference: {set1 ^ set2}") # Output: {1, 2, 5, 6}

set3 = {1, 2}
print(f"set3 is subset of set1: {set3 <= set1}") # Output: True
```

### `frozenset`

Python also has an immutable version of a set called `frozenset`. Once created, you cannot add or remove elements from a `frozenset`. They can be used as dictionary keys or elements of another set.

```python
fs = frozenset([1, 2, 3])
# fs.add(4) # AttributeError: 'frozenset' object has no attribute 'add'
```

```mermaid
graph TD
    A[Sets] --> B[Characteristics];
    B --> B1[Unordered];
    B --> B2[Mutable];
    B --> B3[No duplicate elements];
    B --> B4[Defined with {} or set()];
    B --> B5[Empty set: set()];

    A --> C[Operations];
    C --> C1[Creation (from list/tuple)];
    C --> C2[Access (No indexing/slicing)];
    C --> C3[Membership (in keyword)];
    C --> C4[Modification];

    C4 --> C4a[Add (add, update)];
    C4 --> C4b[Remove (remove, discard, pop, clear)];

    C --> C5[Set Operations];
    C5 --> C5a[Union (| or .union())];
    C5 --> C5b[Intersection (& or .intersection())];
    C5 --> C5c[Difference (- or .difference())];
    C5 --> C5d[Symmetric Difference (^ or .symmetric_difference())];
    C5 --> C5e[Subset/Superset];

    A --> D[Frozenset (Immutable set)];
```
Sets are highly efficient for tasks involving unique collections and mathematical set operations, making them a valuable tool in data processing and algorithmic problems.