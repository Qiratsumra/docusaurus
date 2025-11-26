---
id: encapsulation-access-modifiers
title: 7.4 Encapsulation and Access Modifiers (Convention)
sidebar_position: 5
---

**Encapsulation** is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, or class. It also involves restricting direct access to some of an object's components, typically for data hiding and protecting the integrity of the object's state.

In simpler terms, encapsulation means keeping the internal state of an object hidden from the outside world and only exposing controlled access through public methods.

### Why Encapsulation?

*   **Data Hiding:** Prevents external code from directly manipulating an object's internal data, which could lead to an inconsistent state.
*   **Modularity:** Objects become self-contained units, making code easier to understand and maintain.
*   **Flexibility:** Allows the internal implementation of a class to change without affecting the external code that uses the class.
*   **Abstraction:** Simplifies the interface of an object, presenting only what's necessary to the user.

### Access Modifiers in Python (by Convention)

Unlike some other languages (like Java or C++) that have explicit keywords for public, private, and protected access, Python relies on **naming conventions** to indicate the intended visibility of attributes and methods. All members in a Python class are public by default.

#### 1. Public Members (`variable`, `method()`)

By default, all attributes and methods in Python are public. They can be accessed from anywhere (inside or outside the class).

```python
class MyClass:
    def __init__(self):
        self.public_attribute = "I am public"

    def public_method(self):
        return "This is a public method."

obj = MyClass()
print(obj.public_attribute)  # Output: I am public
print(obj.public_method())   # Output: This is a public method.
```

#### 2. Protected Members (`_variable`, `_method()`)

A single leading underscore (`_`) before an attribute or method name indicates that it is a "protected" member. This is a **convention** suggesting that it should not be accessed directly from outside the class or its subclasses, but it *can* still be accessed. It's a hint to other developers.

```python
class MyClass:
    def __init__(self):
        self._protected_attribute = "I am protected"

    def _protected_method(self):
        return "This is a protected method."

obj = MyClass()
print(obj._protected_attribute) # Output: I am protected (but should avoid direct access)
print(obj._protected_method())  # Output: This is a protected method.
```

#### 3. Private Members (`__variable`, `__method()`)

A double leading underscore (`__`) (without trailing underscores) indicates a "private" member. Python performs a process called "name mangling" for these members. It internally renames them to `_ClassName__attributeName` to make them *harder* to access directly from outside the class, but not impossible. This offers a stronger form of encapsulation than a single underscore.

```python
class MyClass:
    def __init__(self):
        self.__private_attribute = "I am private"

    def __private_method(self):
        return "This is a private method."

    def get_private(self):
        return self.__private_attribute + " accessed via public method"

obj = MyClass()
# print(obj.__private_attribute) # AttributeError: 'MyClass' object has no attribute '__private_attribute'
# print(obj.__private_method())  # AttributeError: 'MyClass' object has no attribute '__private_method'

print(obj.get_private()) # Output: I am private accessed via public method

# Name mangling allows access, but it's not recommended:
print(obj._MyClass__private_attribute) # Output: I am private
```

### Getters and Setters (Properties)

To control access to attributes and enforce encapsulation, it's common to use "getter" and "setter" methods. Python provides a more elegant way to do this using the `@property` decorator.

**Example using `@property`:**

```python
class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature # Calls the setter

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    @property # This makes 'temperature' act like an attribute
    def temperature(self):
        print("Getting value...")
        return self._temperature # Access the protected internal variable

    @temperature.setter # This defines the setter for 'temperature'
    def temperature(self, value):
        print("Setting value...")
        if value < -273.15: # Absolute zero
            raise ValueError("Temperature below absolute zero is not possible.")
        self._temperature = value # Set the protected internal variable

# Create an object
c = Celsius(25)
print(c.temperature) # Output: Getting value... 25

c.temperature = 30 # Calls the setter
print(c.to_fahrenheit()) # Output: 86.0

try:
    c.temperature = -300 # This will raise a ValueError
except ValueError as e:
    print(e) # Output: Temperature below absolute zero is not possible.
```
In this example, `temperature` looks like a regular attribute, but accessing or modifying it triggers the `getter` or `setter` methods, respectively, allowing us to add validation logic.

```mermaid
graph TD
    A[Encapsulation] --> B[Bundling Data & Methods];
    A --> C[Data Hiding];
    C --> C1[Control access to internal state];

    A --> D[Access Modifiers (Python Convention)];
    D --> D1[Public (no underscore): `attribute`, `method()`];
    D1 --> D1a[Directly accessible];

    D --> D2[Protected (single underscore): `_attribute`, `_method()`];
    D2 --> D2a[Convention: Don't access directly];

    D --> D3[Private (double underscore): `__attribute`, `__method()`];
    D3 --> D3a[Name Mangling: `_Class__attribute` (harder to access)];
    D3 --> D3b[Enforces stronger encapsulation];

    E[Getters/Setters] --> F[@property decorator];
    F --> F1[Control read access];
    F --> F2[@attribute.setter decorator];
    F2 --> F3[Control write access & validation];
```
Encapsulation is key to designing robust and maintainable classes, allowing you to define clear interfaces while protecting the internal workings of your objects. While Python's approach is convention-based, understanding and adhering to these conventions is vital for writing Pythonic code.