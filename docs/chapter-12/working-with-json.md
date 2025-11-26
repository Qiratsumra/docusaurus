---
id: working-with-json
title: Working with JSON
sidebar_position: 2
---

# Working with JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. Python has a built-in `json` module.

## Parsing JSON (Decoding)

Convert a JSON string into a Python dictionary.

```python
import json

json_string = '{"name": "Alice", "age": 30, "city": "New York"}'
data = json.loads(json_string)

print(data["name"]) # Output: Alice
```

## Generating JSON (Encoding)

Convert a Python object into a JSON string.

```python
import json

data = {
    "name": "Bob",
    "age": 25,
    "is_student": False
}

json_string = json.dumps(data, indent=4)
print(json_string)
```

**Output:**

```json
{
    "name": "Bob",
    "age": 25,
    "is_student": false
}
```

## Reading/Writing JSON Files

Use `json.dump()` and `json.load()` for files.

```python
# Writing to a file
with open('data.json', 'w') as f:
    json.dump(data, f)

# Reading from a file
with open('data.json', 'r') as f:
    data = json.load(f)
```

## Recap

*   **JSON** is ubiquitous in web development.
*   Use `json.loads()`/`json.dumps()` for strings.
*   Use `json.load()`/`json.dump()` for files.
