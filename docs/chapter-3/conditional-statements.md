---
id: conditional-statements
title: 3.1 Conditional Statements (if, elif, else)
sidebar_position: 2
---

Conditional statements are fundamental to programming logic. They allow your program to make decisions based on whether certain conditions are met. In Python, the `if`, `elif` (else if), and `else` keywords are used for this purpose.

### The `if` Statement

The `if` statement is used to execute a block of code only if a specified condition is `True`.

**Syntax:**

```python
if condition:
    # Code to execute if condition is True
    # (Indentation is crucial in Python)
```

**Example:**

```python
age = 20

if age >= 18:
    print("You are an adult.")

# Output: You are an adult.
```

### The `if-else` Statement

The `if-else` statement provides an alternative block of code to execute if the `if` condition is `False`.

**Syntax:**

```python
if condition:
    # Code to execute if condition is True
else:
    # Code to execute if condition is False
```

**Example:**

```python
age = 15

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")

# Output: You are a minor.
```

### The `if-elif-else` Statement

When you have multiple conditions to check, the `if-elif-else` chain is used. Python evaluates conditions from top to bottom, executing the code block of the first `True` condition and then skipping the rest of the chain.

**Syntax:**

```python
if condition1:
    # Code to execute if condition1 is True
elif condition2:
    # Code to execute if condition2 is True
elif condition3:
    # Code to execute if condition3 is True
else:
    # Code to execute if none of the above conditions are True
```

**Example:**

```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# Output: Grade: B
```

### Nested `if` Statements

You can also have `if` statements inside other `if` (or `elif`, `else`) blocks. This is known as nesting.

**Example:**

```python
temperature = 25
is_sunny = True

if temperature > 20:
    if is_sunny:
        print("It's a warm and sunny day! Perfect for outdoors.")
    else:
        print("It's warm, but not sunny.")
else:
    print("It's a bit chilly.")

# Output: It's a warm and sunny day! Perfect for outdoors.
```

### Important Considerations: Indentation

In Python, **indentation is crucial**. It defines the blocks of code that belong to an `if`, `elif`, or `else` statement. A consistent level of indentation (usually 4 spaces) is required. Incorrect indentation will lead to `IndentationError`.

```mermaid
graph TD
    A[Start] --> B{Condition 1 is True?};
    B -- Yes --> C[Execute Code Block 1];
    B -- No --> D{Condition 2 is True?};
    D -- Yes --> E[Execute Code Block 2];
    D -- No --> F{Condition N is True?};
    F -- Yes --> G[Execute Code Block N];
    F -- No --> H[Execute Else Block (Optional)];
    C --> I[End];
    E --> I;
    G --> I;
    H --> I;
```
