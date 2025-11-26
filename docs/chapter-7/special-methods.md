---
id: special-methods
title: 7.5 Special Methods (Dunder Methods)
sidebar_position: 6
---

In Python, classes can implement certain operations that are invoked by special method names. These methods have double underscores both at the beginning and end of their names (e.g., `__init__`, `__str__`). They are often referred to as "**dunder methods**" (for "double underscore methods") or "magic methods."

Dunder methods allow you to define how objects of your class behave with built-in operations, functions, and syntax. This is how Python achieves operator overloading, custom string representations, iteration behavior, and much more.

### Common Dunder Methods

Let's explore some of the most commonly used special methods:

#### 1. `__init__(self, ...)`: The Constructor

*   **Purpose:** Initializes a newly created object.
*   **Called when:** An instance of the class is created.

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

my_book = Book("The Python Handbook", "J. Doe", 300)
print(my_book.title) # Output: The Python Handbook
```

#### 2. `__str__(self)`: String Representation for Users

*   **Purpose:** Returns a "nice" string representation of an object, intended for end-users.
*   **Called when:** `str()` is called on an object, or `print()` is used on an object.

#### 3. `__repr__(self)`: String Representation for Developers

*   **Purpose:** Returns an "official" string representation of an object, intended for developers (should ideally be unambiguous and allow recreation of the object).
*   **Called when:** `repr()` is called on an object, or in interactive console if `__str__` is not defined.

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

p = Point(1, 2)
print(p)       # Output: (1, 2) (calls __str__)
print(str(p))  # Output: (1, 2)
print(repr(p)) # Output: Point(x=1, y=2)
```

#### 4. `__len__(self)`: Length of an Object

*   **Purpose:** Defines the behavior for the built-in `len()` function.
*   **Called when:** `len(object)` is used.

```python
class MyCollection:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

c = MyCollection([1, 2, 3, 4, 5])
print(len(c)) # Output: 5
```

#### 5. `__add__(self, other)`: Operator Overloading for `+`

*   **Purpose:** Defines the behavior for the `+` operator.
*   **Called when:** `object1 + object2` is used.

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(5, 7)
v3 = v1 + v2 # Calls v1.__add__(v2)
print(v3) # Output: Vector(7, 10)
```

#### 6. Comparison Operators (`__eq__`, `__ne__`, `__lt__`, `__le__`, `__gt__`, `__ge__`)

These methods allow you to define how objects are compared using operators like `==`, `!=`, `<`, etc.

*   `__eq__(self, other)`: `==` operator
*   `__ne__(self, other)`: `!=` operator
*   `__lt__(self, other)`: `<` operator
*   `__gt__(self, other)`: `>` operator
*   `__le__(self, other)`: `<=` operator
*   `__ge__(self, other)`: `>=` operator

```python
class Wallet:
    def __init__(self, amount):
        self.amount = amount

    def __eq__(self, other):
        return self.amount == other.amount

    def __lt__(self, other):
        return self.amount < other.amount

w1 = Wallet(100)
w2 = Wallet(100)
w3 = Wallet(150)

print(f"w1 == w2: {w1 == w2}") # Output: w1 == w2: True (calls __eq__)
print(f"w1 < w3: {w1 < w3}")   # Output: w1 < w3: True (calls __lt__)
```

### The Power of Dunder Methods

By implementing these special methods, you can make your custom objects behave like built-in types, making them more intuitive and Pythonic to use. They are crucial for creating powerful and expressive classes.

```mermaid
graph TD
    A[Special Methods (Dunder)] --> B[Purpose];
    B --> B1[Customize built-in behavior];
    B --> B2[Operator Overloading];
    B --> B3[Custom String Repr];
    B --> B4[Iteration Behavior];

    A --> C[Common Dunder Methods];
    C --> C1[__init__(self, ...)];
    C1 --> C1a[Constructor, Initializes object];

    C --> C2[__str__(self)];
    C2 --> C2a[User-friendly string representation];

    C --> C3[__repr__(self)];
    C3 --> C3a[Developer-friendly string representation];

    C --> C4[__len__(self)];
    C4 --> C4a[Defines len(obj) behavior];

    C --> C5[__add__(self, other)];
    C5 --> C5a[Defines + operator behavior];

    C --> C6[Comparison Operators];
    C6 --> C6a[__eq__, __ne__, __lt__, __le__, __gt__, __ge__];
```
Understanding and effectively using dunder methods is a hallmark of advanced Python programming, allowing you to craft classes that seamlessly integrate with the language's core features.