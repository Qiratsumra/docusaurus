---
id: lists
title: 6.1 Lists
sidebar_position: 2
---

**Lists** are one of the most versatile and fundamental data structures in Python. They are ordered, mutable (changeable) sequences that can store a collection of items. The items in a list do not have to be of the same data type.

### Creating Lists

Lists are created by placing all the items (elements) inside square brackets `[]`, separated by commas.

```python
# An empty list
empty_list = []

# A list of integers
numbers = [1, 2, 3, 4, 5]

# A list of strings
fruits = ["apple", "banana", "cherry"]

# A list with mixed data types
mixed_list = [1, "hello", 3.14, True]

# Nested list (list containing other lists)
nested_list = [[1, 2], [3, 4]]

print(empty_list)      # Output: []
print(numbers)         # Output: [1, 2, 3, 4, 5]
print(fruits)          # Output: ['apple', 'banana', 'cherry']
print(mixed_list)      # Output: [1, 'hello', 3.14, True]
print(nested_list)     # Output: [[1, 2], [3, 4]]
```

### Accessing List Elements (Indexing and Slicing)

Like strings, list elements can be accessed using 0-based indexing and slicing.

*   **Indexing:** `list_name[index]`
*   **Slicing:** `list_name[start:end:step]`

```python
my_list = ['P', 'y', 't', 'h', 'o', 'n']

# Accessing elements
print(my_list[0])  # Output: P
print(my_list[2])  # Output: t
print(my_list[-1]) # Output: n (last element)

# Slicing
print(my_list[1:4])  # Output: ['y', 't', 'h']
print(my_list[::2])  # Output: ['P', 't', 'o']
print(my_list[::-1]) # Output: ['n', 'o', 'h', 't', 'y', 'P'] (reversed)
```

### Modifying Lists

Since lists are mutable, you can change their elements after creation.

#### 1. Changing an element

```python
fruits = ["apple", "banana", "cherry"]
fruits[1] = "orange"
print(fruits) # Output: ['apple', 'orange', 'cherry']
```

#### 2. Adding elements

*   `.append(item)`: Adds an item to the end of the list.
*   `.insert(index, item)`: Inserts an item at a specified index.
*   `.extend(iterable)`: Appends elements from another iterable (like another list) to the end of the current list.

```python
my_list = [1, 2, 3]
my_list.append(4)
print(my_list) # Output: [1, 2, 3, 4]

my_list.insert(1, 1.5)
print(my_list) # Output: [1, 1.5, 2, 3, 4]

another_list = [5, 6]
my_list.extend(another_list)
print(my_list) # Output: [1, 1.5, 2, 3, 4, 5, 6]
```

#### 3. Removing elements

*   `.remove(item)`: Removes the first occurrence of a specified item. Raises `ValueError` if the item is not found.
*   `.pop(index)`: Removes and returns the element at the specified index. If no index is given, it removes and returns the last element.
*   `del list_name[index]`: Deletes the element at a specific index.
*   `del list_name[start:end]`: Deletes a slice of elements.
*   `.clear()`: Removes all elements from the list, making it empty.

```python
my_list = [1, 2, 3, 4, 3, 5]
my_list.remove(3) # Removes the first '3'
print(my_list) # Output: [1, 2, 4, 3, 5]

popped_item = my_list.pop() # Removes and returns the last item
print(popped_item) # Output: 5
print(my_list) # Output: [1, 2, 4, 3]

del my_list[0] # Deletes element at index 0
print(my_list) # Output: [2, 4, 3]

my_list.clear()
print(my_list) # Output: []
```

### Other Useful List Methods

| Method       | Description                                      | Example                             |
| :----------- | :----------------------------------------------- | :---------------------------------- |
| `len(list)`  | Returns the number of items in the list          | `len([1,2,3])` -> `3`               |
| `.index(item)`| Returns the index of the first occurrence of item | `[1,2,3].index(2)` -> `1`           |
| `.count(item)`| Returns the number of times item appears         | `[1,2,2,3].count(2)` -> `2`         |
| `.sort()`    | Sorts the list in-place                          | `[3,1,2].sort()` -> `[1,2,3]`       |
| `sorted(list)`| Returns a new sorted list (doesn't modify original)| `sorted([3,1,2])` -> `[1,2,3]`      |
| `.reverse()` | Reverses the order of elements in-place          | `[1,2,3].reverse()` -> `[3,2,1]`    |
| `list(iterable)`| Converts an iterable (e.g., tuple, string) to a list | `list("abc")` -> `['a', 'b', 'c']` |

```python
numbers = [3, 1, 4, 1, 5, 9, 2]
numbers.sort()
print(numbers) # Output: [1, 1, 2, 3, 4, 5, 9]

numbers.reverse()
print(numbers) # Output: [9, 5, 4, 3, 2, 1, 1]

print(numbers.count(1)) # Output: 2
```

```mermaid
graph TD
    A[Lists] --> B[Characteristics];
    B --> B1[Ordered];
    B --> B2[Mutable (Changeable)];
    B --> B3[Allows mixed data types];
    B --> B4[Defined with []];

    A --> C[Operations];
    C --> C1[Creation];
    C --> C2[Access (Indexing/Slicing)];
    C --> C3[Modification];

    C3 --> C3a[Change element (list[idx] = new_val)];
    C3 --> C3b[Add elements (append, insert, extend)];
    C3 --> C3c[Remove elements (remove, pop, del, clear)];

    C --> C4[Other Methods (len, index, count, sort, sorted, reverse)];
```
Lists are incredibly versatile and form the basis for many other data structures and algorithms in Python. Master them, and you'll have a powerful tool at your disposal.