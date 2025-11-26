---
id: numeric-data-types
title: 2.2 Numeric Data Types
sidebar_position: 3
---

Numbers are fundamental in programming, used for everything from counting to complex mathematical calculations. Python offers several built-in numeric data types to handle different kinds of numbers.

### Integers (`int`)

Integers are whole numbers, positive or negative, without a decimal point. They can be of arbitrary size in Python 3.x, limited only by the available memory.

**Examples:**

```python
age = 25
temperature = -10
big_number = 12345678901234567890
print(type(age))          # Output: <class 'int'>
print(type(big_number))   # Output: <class 'int'>
```

### Floating-Point Numbers (`float`)

Floating-point numbers (floats) are numbers that have a decimal point. They are used to represent real numbers and are stored with a fixed precision.

**Examples:**

```python
pi = 3.14159
price = 99.99
average = 75.5
print(type(pi))           # Output: <class 'float'>
print(type(price))        # Output: <class 'float'>
```

**Precision Issues:**
Due to the way floating-point numbers are stored in computers (binary fractions), some decimal numbers cannot be represented exactly. This can lead to small precision errors in calculations.

```python
0.1 + 0.2
# Output: 0.30000000000000004
```
For high-precision calculations, consider using the `decimal` module.

### Complex Numbers (`complex`)

Complex numbers are numbers that have a real and an imaginary part. In Python, they are represented as `a + bj`, where `a` is the real part, `b` is the imaginary part, and `j` is the imaginary unit.

**Examples:**

```python
c1 = 2 + 3j
c2 = -1j
print(type(c1))           # Output: <class 'complex'>
print(c1.real)            # Output: 2.0
print(c1.imag)            # Output: 3.0
print(c1 + c2)            # Output: (2+2j)
```

### Numeric Operations

Python supports standard arithmetic operations for numeric types:

| Operator | Description    | Example       | Result |
| :------- | :------------- | :------------ | :----- |
| `+`      | Addition       | `10 + 5`      | `15`   |
| `-`      | Subtraction    | `10 - 5`      | `5`    |
| `*`      | Multiplication | `10 * 5`      | `50`   |
| `/`      | Division       | `10 / 3`      | `3.33` |
| `//`     | Floor Division | `10 // 3`     | `3`    |
| `%`      | Modulus        | `10 % 3`      | `1`    |
| `**`     | Exponentiation | `2 ** 3`      | `8`    |

**Example Usage:**

```python
x = 15
y = 4

print(f"Addition: {x + y}")        # Output: Addition: 19
print(f"Subtraction: {x - y}")     # Output: Subtraction: 11
print(f"Multiplication: {x * y}")  # Output: Multiplication: 60
print(f"Division: {x / y}")        # Output: Division: 3.75
print(f"Floor Division: {x // y}") # Output: Floor Division: 3
print(f"Modulus: {x % y}")         # Output: Modulus: 3
print(f"Exponentiation: {x ** 2}") # Output: Exponentiation: 225
```

```mermaid
graph TD
    A[Numeric Data Types] --> B[Integers (int)];
    A --> C[Floats (float)];
    A --> D[Complex Numbers (complex)];

    B --> B1[Whole numbers];
    B --> B2[Arbitrary size];

    C --> C1[Decimal point];
    C --> C2[Fixed precision];
    C --> C3[Precision issues];

    D --> D1[Real part + Imaginary part];
    D --> D2[a + bj format];

    E[Operations] --> O1[+ Addition];
    E --> O2[- Subtraction];
    E --> O3[* Multiplication];
    E --> O4[/ Division];
    E --> O5[// Floor Division];
    E --> O6[% Modulus];
    E --> O7[** Exponentiation];
```
