---
id: dictionaries
title: 6.3 Dictionaries
sidebar_position: 4
---

**Dictionaries** are Python's most flexible built-in data type for storing collections of data. Unlike sequences (lists, tuples) that are indexed by a range of numbers, dictionaries are indexed by **keys**. They store data in **key-value pairs**.

### Creating Dictionaries

Dictionaries are created by placing a comma-separated list of `key: value` pairs inside curly braces `{}`. Keys must be unique and immutable (e.g., strings, numbers, tuples). Values can be of any data type and can be duplicated.

```python
# An empty dictionary
empty_dict = {}

# A dictionary with string keys and various values
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# A dictionary with mixed key types (though generally stick to one type for keys)
mixed_keys = {
    "count": 10,
    1: "first",
    (1, 2): "coordinates"
}

# Using dict() constructor
another_dict = dict(brand="Ford", model="Mustang", year=1964)

print(person)      # Output: {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(another_dict) # Output: {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
```

### Accessing Dictionary Elements

You can access the value associated with a key using square brackets `[]` or the `.get()` method.

*   **Using `[]`:** `dictionary[key]`. If the key is not found, it raises a `KeyError`.
*   **Using `.get(key, default_value)`:** `dictionary.get(key)`. If the key is not found, it returns `None` (or a `default_value` if provided), avoiding `KeyError`.

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"]) # Output: Alice
print(person.get("age")) # Output: 30

# Trying to access a non-existent key
# print(person["country"]) # Raises KeyError

print(person.get("country")) # Output: None
print(person.get("country", "Unknown")) # Output: Unknown
```

### Modifying Dictionaries

Dictionaries are mutable, so you can add, change, and remove key-value pairs.

#### 1. Adding/Updating Elements

If the key already exists, its value is updated. If the key doesn't exist, a new key-value pair is added.

```python
person = {"name": "Alice", "age": 30}

person["city"] = "New York" # Add a new key-value pair
print(person) # Output: {'name': 'Alice', 'age': 30, 'city': 'New York'}

person["age"] = 31 # Update an existing key's value
print(person) # Output: {'name': 'Alice', 'age': 31, 'city': 'New York'}
```

#### 2. Removing Elements

*   `del dictionary[key]`: Deletes the key-value pair with the specified key. Raises `KeyError` if the key is not found.
*   `.pop(key, default_value)`: Removes the key and returns its value. If the key is not found and `default_value` is not provided, it raises `KeyError`.
*   `.popitem()`: Removes and returns an arbitrary (key, value) pair. In Python 3.7+, it removes the last inserted item.
*   `.clear()`: Removes all items from the dictionary.

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

del person["city"]
print(person) # Output: {'name': 'Alice', 'age': 30}

age = person.pop("age")
print(age) # Output: 30
print(person) # Output: {'name': 'Alice'}

person["occupation"] = "Engineer"
print(person) # Output: {'name': 'Alice', 'occupation': 'Engineer'}
last_item = person.popitem()
print(last_item) # Output: ('occupation', 'Engineer')
print(person) # Output: {'name': 'Alice'}

person.clear()
print(person) # Output: {}
```

### Iterating Through Dictionaries

You can iterate through dictionaries in several ways:

*   **Iterating over keys (default):**
    ```python
    person = {"name": "Alice", "age": 30}
    for key in person:
        print(key)
    # Output:
    # name
    # age
    ```

*   **Iterating over values:**
    ```python
    for value in person.values():
        print(value)
    # Output:
    # Alice
    # 30
    ```

*   **Iterating over key-value pairs:**
    ```python
    for key, value in person.items():
        print(f"{key}: {value}")
    # Output:
    # name: Alice
    # age: 30
    ```

### Other Useful Dictionary Methods

| Method         | Description                                       | Example                             |
| :------------- | :------------------------------------------------ | :---------------------------------- |
| `len(dict)`    | Returns the number of key-value pairs             | `len({"a":1, "b":2})` -> `2`       |
| `.keys()`      | Returns a view object of all keys                 | `person.keys()`                     |
| `.values()`    | Returns a view object of all values               | `person.values()`                   |
| `.items()`     | Returns a view object of all (key, value) tuples  | `person.items()`                    |
| `.update(other)`| Merges `other` dictionary/iterable into current | `d1.update(d2)`                     |

```python
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "a": 4} # 'a' will be updated

dict1.update(dict2)
print(dict1) # Output: {'a': 4, 'b': 2, 'c': 3}
```

```mermaid
graph TD
    A[Dictionaries] --> B[Characteristics];
    B --> B1[Key-Value Pairs];
    B --> B2[Mutable];
    B --> B3[Keys must be unique & immutable];
    B --> B4[Values can be any type];
    B --> B5[Defined with {}];

    A --> C[Operations];
    C --> C1[Creation];
    C --> C2[Access (dict[key], dict.get(key))];
    C --> C3[Modification];

    C3 --> C3a[Add/Update (dict[key] = value)];
    C3 --> C3b[Remove (del, pop, popitem, clear)];

    C --> C4[Iteration (keys, values, items)];
    C --> C5[Other Methods (len, keys, values, items, update)];
```
Dictionaries are incredibly powerful for mapping unique keys to values, making them suitable for representing real-world objects, configurations, and efficient data lookups.