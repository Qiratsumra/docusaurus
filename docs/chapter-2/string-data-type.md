---
id: string-data-type
title: 2.3 String Data Type
sidebar_position: 4
---

Strings are sequences of characters, used to represent text in Python. They are immutable, meaning once created, their content cannot be changed.

### Creating Strings

Strings can be created by enclosing characters in single quotes (`'...'`), double quotes (`"..."`), or triple quotes (`'''...'''` or `"""..."""`). Triple quotes are useful for multi-line strings.

```python
single_quote_string = 'Hello, Python!'
double_quote_string = "Hello, World!"
multi_line_string = """This is a
multi-line
string."""

print(single_quote_string)
print(double_quote_string)
print(multi_line_string)
```

### String Concatenation and Repetition

*   **Concatenation (`+`):** Joins two or more strings together.
*   **Repetition (`*`):** Repeats a string a specified number of times.

```python
greeting = "Hello"
name = "Alice"
full_message = greeting + ", " + name + "!"
print(full_message) # Output: Hello, Alice!

repeated_string = "Python " * 3
print(repeated_string) # Output: Python Python Python
```

### String Indexing and Slicing

Strings are ordered sequences, so you can access individual characters using **indexing** and extract substrings using **slicing**.

*   **Indexing:** Uses square brackets `[]` with an integer representing the position. Python uses 0-based indexing (the first character is at index 0). Negative indices count from the end of the string (`-1` is the last character).
*   **Slicing:** Extracts a portion of the string. `[start:end:step]`. `end` is exclusive.

```python
my_string = "Docusaurus"

# Indexing
print(my_string[0])   # Output: D
print(my_string[4])   # Output: s
print(my_string[-1])  # Output: s (last character)

# Slicing
print(my_string[0:5])   # Output: Docua
print(my_string[5:])    # Output: saurus
print(my_string[:5])    # Output: Docua
print(my_string[::2])   # Output: Dcuau (every second character)
print(my_string[::-1])  # Output: suruacoD (reversed string)
```

### Common String Methods

Strings have many built-in methods for manipulation:

| Method      | Description                                         | Example                | Result               |
| :---------- | :-------------------------------------------------- | :--------------------- | :------------------- |
| `len()`     | Returns the length of the string (built-in function)| `len("hello")`         | `5`                  |
| `.upper()`  | Converts string to uppercase                        | `"hello".upper()`      | `'HELLO'`            |
| `.lower()`  | Converts string to lowercase                        | `"WORLD".lower()`      | `'world'`            |
| `.strip()`  | Removes leading/trailing whitespace                 | `"  abc ".strip()`     | `'abc'`              |
| `.replace()`| Replaces occurrences of a substring                 | `"hello".replace("l", "x")` | `'hexxo'`            |
| `.split()`  | Splits string into a list of substrings             | `"a,b,c".split(",")`   | `['a', 'b', 'c']`    |
| `.join()`   | Joins elements of an iterable with the string       | `",".join(['a','b'])`  | `'a,b'`              |
| `.find()`   | Returns the lowest index of substring (or -1)       | `"apple".find("pl")`   | `2`                  |
| `.count()`  | Returns the number of occurrences of a substring    | `"banana".count("a")`  | `3`                  |

**Example Usage:**

```python
text = "  Python Programming  "

print(text.strip())        # Output: "Python Programming"
print(text.upper())        # Output: "  PYTHON PROGRAMMING  "
print(text.replace("o", "0")) # Output: "  Pyth0n Pr0gramming  "

words = "apple,banana,cherry".split(',')
print(words)               # Output: ['apple', 'banana', 'cherry']

joined_words = "-".join(["alpha", "beta", "gamma"])
print(joined_words)        # Output: "alpha-beta-gamma"
```

### Formatted String Literals (f-strings)

Introduced in Python 3.6, f-strings provide a concise and readable way to embed expressions inside string literals. Prefix the string with `f` or `F`.

```python
name = "Bob"
age = 25
job = "Developer"

# Using f-string
message = f"Hello, my name is {name} and I am {age} years old. I work as a {job}."
print(message)
# Output: Hello, my name is Bob and I am 25 years old. I work as a Developer.

# You can embed expressions and function calls
pi = 3.14159
print(f"Pi to two decimal places: {pi:.2f}") # Output: Pi to two decimal places: 3.14

# You can even do calculations directly
x = 10
y = 3
print(f"{x} divided by {y} is {x / y:.2f}") # Output: 10 divided by 3 is 3.33
```

f-strings are generally recommended for string formatting due to their readability and performance.

```mermaid
graph TD
    A[String Data Type] --> B[Creation];
    A --> C[Manipulation];
    A --> D[f-strings];

    B --> B1[Single/Double Quotes];
    B --> B2[Triple Quotes (Multi-line)];

    C --> C1[Concatenation (+)];
    C --> C2[Repetition (*)];
    C --> C3[Indexing (my_string[0])];
    C --> C4[Slicing (my_string[1:5])];
    C --> C5[Common Methods (upper, lower, strip, replace, split, join, len)];

    D --> D1[Embedding Expressions];
    D --> D2[Formatting (:.2f)];
    D2 --> D3[Clarity & Performance];
```
