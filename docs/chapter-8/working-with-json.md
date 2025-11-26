--- 
id: working-with-json
title: 8.4 Working with JSON Data
sidebar_position: 5
---

**JSON** (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. JSON is widely used for data transmission between a server and web application, and it maps very naturally to Python dictionaries and lists. Python has a built-in `json` module to handle JSON data.

### Python and JSON Equivalents

| JSON            | Python                  |
| :-------------- | :---------------------- |
| object          | dictionary              |
| array           | list                    |
| string          | string                  |
| number (integer)| int                     |
| number (real)   | float                   |
| true            | True                    |
| false           | False                   |
| null            | None                    |

### Encoding Python Objects to JSON (`json.dumps()` and `json.dump()`)

#### 1. `json.dumps()` (Dump String)

This function serializes a Python object (like a dictionary or list) into a JSON formatted string.

```python
import json

python_dict = {
    "name": "Alice",
    "age": 30,
    "isStudent": False,
    "courses": ["Math", "Science"]
}

json_string = json.dumps(python_dict, indent=4) # indent for pretty-printing
print("--- Python dictionary to JSON string ---")
print(json_string)

# Output:
# {
#     "name": "Alice",
#     "age": 30,
#     "isStudent": false,
#     "courses": [
#         "Math",
#         "Science"
#     ]
# }
print(type(json_string)) # Output: <class 'str'>
```

#### 2. `json.dump()` (Dump to File)

This function serializes a Python object and writes the JSON formatted string directly to a file-like object.

```python
import json

python_list = [
    {"item": "Laptop", "price": 1200},
    {"item": "Mouse", "price": 25}
]

with open('data.json', 'w') as json_file:
    json.dump(python_list, json_file, indent=4)

print("\n--- Python list written to data.json ---")
# Check 'data.json' file content
```

### Decoding JSON to Python Objects (`json.loads()` and `json.load()`)

#### 1. `json.loads()` (Load String)

This function deserializes a JSON formatted string into a Python object (typically a dictionary or list).

```python
import json

json_data_string = """
{
    "product": "Keyboard",
    "manufacturer": "XYZ Inc.",
    "price": 75.50,
    "available": true
}
"""

python_object = json.loads(json_data_string)
print("\n--- JSON string to Python dictionary ---")
print(python_object)
print(type(python_object)) # Output: <class 'dict'>
print(f"Product: {python_object['product']}") # Accessing data
```

#### 2. `json.load()` (Load from File)

This function deserializes a JSON document from a file-like object into a Python object.

```python
import json

# Assuming 'data.json' from previous example exists
with open('data.json', 'r') as json_file:
    loaded_python_list = json.load(json_file)

print("\n--- JSON data loaded from data.json to Python list ---")
print(loaded_python_list)
print(type(loaded_python_list)) # Output: <class 'list'>
print(f"First item: {loaded_python_list[0]['item']}")
```

### Key Considerations

*   **Error Handling:** When parsing JSON, always be prepared for `json.JSONDecodeError` if the input string is not valid JSON.
*   **Indentation:** The `indent` parameter in `json.dumps()` and `json.dump()` is crucial for making the output JSON human-readable (pretty-printing). For compact JSON, omit it.
*   **Dates and Custom Objects:** The `json` module natively handles basic Python types. For more complex types like `datetime` objects or custom class instances, you'll need to provide custom serialization/deserialization functions (e.g., using `default` parameter in `dumps`/`dump` and `object_hook` in `loads`/`load`). 

```mermaid
graph TD
    A[Working with JSON] --> B[Serialization (Python to JSON)];
    B --> B1[json.dumps() -> String];
    B1 --> B1a[indent for pretty print];
    B --> B2[json.dump() -> File];
    B2 --> B2a[Needs file object];

    A --> C[Deserialization (JSON to Python)];
    C --> C1[json.loads() -> Object from String];
    C --> C2[json.load() -> Object from File];
    C2 --> C2a[Needs file object];

    D[JSON <--> Python Equivalents];
    D --> D1[JSON Object <--> Python Dictionary];
    D --> D2[JSON Array <--> Python List];
    D --> D3[JSON String <--> Python String];
    D --> D4[JSON Number <--> Python int/float];
    D --> D5[JSON true/false <--> Python True/False];
    D --> D6[JSON null <--> Python None];
```
The `json` module is indispensable for applications that interact with web services or need to store structured configuration data, making it a critical tool for modern Python development.
