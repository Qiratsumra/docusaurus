---
id: tuples
title: 6.2 Tuples
sidebar_position: 3
---

**Tuples** are another fundamental sequence data type in Python, similar to lists. The key difference is that tuples are **immutable**, meaning once a tuple is created, its elements cannot be changed, added, or removed. Tuples are defined by enclosing elements in parentheses `()`, separated by commas.

### Creating Tuples

```python
# An empty tuple
empty_tuple = ()

# A tuple of integers
numbers = (1, 2, 3, 4, 5)

# A tuple of strings
fruits = ("apple", "banana", "cherry")

# A tuple with mixed data types
mixed_tuple = (1, "hello", 3.14, False)

# Tuple without parentheses (tuple packing) - usually discouraged for clarity
my_tuple_packed = 1, 2, 3

# Creating a tuple with a single element (requires a trailing comma!)
single_element_tuple = (5,)
# single_element_tuple_wrong = (5) # This is just an integer 5, not a tuple

print(empty_tuple)         # Output: ()
print(numbers)             # Output: (1, 2, 3, 4, 5)
print(fruits)              # Output: ('apple', 'banana', 'cherry')
print(mixed_tuple)         # Output: (1, 'hello', 3.14, False)
print(type(my_tuple_packed)) # Output: <class 'tuple'>
print(type(single_element_tuple)) # Output: <class 'tuple'>
print(type((5)))           # Output: <class 'int'>
```

### Accessing Tuple Elements (Indexing and Slicing)

Like lists and strings, tuple elements can be accessed using 0-based indexing and slicing.

```python
my_tuple = ('P', 'y', 't', 'h', 'o', 'n')

# Accessing elements
print(my_tuple[0])  # Output: P
print(my_tuple[-1]) # Output: n

# Slicing
print(my_tuple[1:4])  # Output: ('y', 't', 'h')
print(my_tuple[::-1]) # Output: ('n', 'o', 'h', 't', 'y', 'P')
```

### Immutability of Tuples

Since tuples are immutable, you cannot change their elements, add new elements, or remove existing ones. Any operation that appears to "modify" a tuple actually creates a new tuple.

```python
my_tuple = (1, 2, 3)
# my_tuple[0] = 10 # This would raise a TypeError: 'tuple' object does not support item assignment
# my_tuple.append(4) # This would raise an AttributeError: 'tuple' object has no attribute 'append'
```

However, if a tuple contains mutable objects (like lists), the contents of those mutable objects *can* be changed.

```python
mutable_in_tuple = ([1, 2], 'hello')
mutable_in_tuple[0].append(3)
print(mutable_in_tuple) # Output: ([1, 2, 3], 'hello')
```

### Tuple Methods

Due to their immutability, tuples have fewer methods than lists.

| Method       | Description                                  | Example                       |
| :----------- | :------------------------------------------- | :---------------------------- |
| `len(tuple)` | Returns the number of items in the tuple     | `len((1,2,3))` -> `3`         |
| `.index(item)`| Returns the index of the first occurrence of item | `(1,2,3).index(2)` -> `1`     |
| `.count(item)`| Returns the number of times item appears     | `(1,2,2,3).count(2)` -> `2`   |

### Use Cases for Tuples

Tuples are often preferred over lists in specific scenarios:

1.  **Fixed Collections of Related Data:** When you have a collection of items that logically belong together and shouldn't change, like coordinates `(x, y, z)`, RGB color values `(R, G, B)`, or database records.
2.  **Function Return Values:** Functions that need to return multiple values often do so as a tuple.

    ```python
    def get_min_max(numbers_list):
        return min(numbers_list), max(numbers_list)

    min_val, max_val = get_min_max([10, 2, 8, 15, 3])
    print(f"Min: {min_val}, Max: {max_val}") # Output: Min: 2, Max: 15
    ```
3.  **Dictionary Keys:** Since tuples are immutable, they can be used as keys in dictionaries (unlike lists).
4.  **Performance:** Tuples can be slightly faster to iterate over and create than lists for very large collections, though this difference is often negligible for typical use cases.
5.  **Data Integrity:** Immutability provides a degree of data integrity, as you can be sure the tuple's contents won't be accidentally modified.

```mermaid
graph TD
    A[Tuples] --> B[Characteristics];
    B --> B1[Ordered];
    B --> B2[Immutable (Unchangeable)];
    B --> B3[Allows mixed data types];
    B --> B4[Defined with () or tuple packing];

    A --> C[Operations];
    C --> C1[Creation];
    C --> C2[Access (Indexing/Slicing)];
    C --> C3[No Modification Methods];

    C --> C4[Methods (len, index, count)];

    A --> D[Use Cases];
    D --> D1[Fixed collections (e.g., coordinates)];
    D --> D2[Function return values];
    D --> D3[Dictionary keys];
    D --> D4[Data integrity];
```
Choosing between a list and a tuple depends on whether the collection of items is meant to be modifiable or fixed. If the data is constant, a tuple is generally the more appropriate and safer choice.