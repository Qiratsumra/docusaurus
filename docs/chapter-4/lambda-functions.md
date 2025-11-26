---
id: lambda-functions
title: 4.5 Anonymous Functions (Lambda)
sidebar_position: 6
---

In Python, an anonymous function is a function that is defined without a name. While regular functions are defined using the `def` keyword, anonymous functions are defined using the `lambda` keyword. For this reason, anonymous functions are also called **lambda functions**.

### Syntax of Lambda Functions

A lambda function can take any number of arguments, but it can only have one expression. The result of this expression is the return value of the lambda function.

**Syntax:**

```python
lambda arguments: expression
```

**Example:**

```python
# A regular function to add two numbers
def add(a, b):
    return a + b

print(add(2, 3)) # Output: 5

# The equivalent lambda function
add_lambda = lambda a, b: a + b
print(add_lambda(2, 3)) # Output: 5
```

### Characteristics of Lambda Functions

*   **Anonymous:** They do not have a name.
*   **Single Expression:** They can only contain one expression, which is implicitly returned.
*   **Concise:** They are typically used for small, simple operations.
*   **No Statements:** They cannot contain complex statements like `if`, `for`, `while`, `try-except`, etc.

### Use Cases for Lambda Functions

Lambda functions are most often used in situations where a small function is required for a short period of time, particularly as arguments to higher-order functions (functions that take other functions as arguments).

#### 1. With `filter()`

The `filter()` function constructs an iterator from elements of an iterable for which a function returns true.

```python
my_list = [1, 5, 4, 6, 8, 11, 3, 12]

# Filter out all even numbers using a lambda function
even_numbers = list(filter(lambda x: x % 2 == 0, my_list))
print(even_numbers) # Output: [4, 6, 8, 12]
```

#### 2. With `map()`

The `map()` function applies a given function to each item of an iterable and returns a map object (an iterator).

```python
my_list = [1, 5, 4, 6, 8, 11, 3, 12]

# Multiply each number by 2 using a lambda function
doubled_numbers = list(map(lambda x: x * 2, my_list))
print(doubled_numbers) # Output: [2, 10, 8, 12, 16, 22, 6, 24]
```

#### 3. With `sorted()`

The `sorted()` function returns a new sorted list from the items in an iterable. You can specify a `key` argument to customize the sorting order.

```python
students = [('Alice', 90), ('Bob', 75), ('Charlie', 95)]

# Sort students by their score (second element of the tuple)
sorted_students = sorted(students, key=lambda student: student[1])
print(sorted_students) # Output: [('Bob', 75), ('Alice', 90), ('Charlie', 95)]

# Sort by name (first element)
sorted_by_name = sorted(students, key=lambda student: student[0])
print(sorted_by_name) # Output: [('Alice', 90), ('Bob', 75), ('Charlie', 95)]
```

### Why use Lambda Functions?

*   **Conciseness:** For simple operations, lambda functions are more compact than full function definitions.
*   **Readability (for simple cases):** When a function is used only once and is very simple, a lambda can sometimes make the code more readable by keeping the logic inline.
*   **Functional Programming:** They fit well into functional programming paradigms, often used with `map()`, `filter()`, `reduce()`, and as sort keys.

### Limitations

*   **Single Expression:** This is the biggest limitation. If your logic requires multiple statements or complex control flow (e.g., `if-else` branching, loops), you must use a regular `def` function.
*   **No Docstrings:** Lambda functions cannot have docstrings, making them less self-documenting than regular functions.

```mermaid
graph TD
    A[Lambda Function] --> B{Anonymous};
    A --> C{Single Expression};
    A --> D{No Statements};
    A --> E{Syntax: lambda args: expression};

    E --> F[Use Cases];
    F --> G[With filter()];
    F --> H[With map()];
    F --> I[With sorted() (key)];

    F --> J[Benefits];
    J --> J1[Conciseness];
    J --> J2[Inline Logic];
    J --> J3[Functional Programming];

    F --> K[Limitations];
    K --> K1[Only one expression];
    K --> K2[Cannot contain statements];
    K --> K3[No docstrings];
```
Lambda functions are a powerful tool in your Python arsenal for quick, inline operations, but knowing when to use them versus a full `def` function is key to writing clean and maintainable code.