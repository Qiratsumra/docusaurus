---
id: defining-classes-creating-objects
title: 7.2 Defining Classes and Creating Objects
sidebar_position: 3
---

In Python, a **class** serves as a blueprint for creating objects. It encapsulates data for the object (attributes) and methods to interact with that data (behavior). Let's explore how to define a class and then create instances (objects) from it.

### Defining a Class

You define a class using the `class` keyword, followed by the class name (conventionally CamelCase), and a colon.

**Syntax:**

```python
class ClassName:
    # Class attributes (optional)
    # Constructor method (__init__)
    # Other methods
```

**Example: Basic `Person` Class**

```python
class Person:
    # This is a class attribute, shared by all instances
    species = "Homo sapiens"

    # The constructor method
    def __init__(self, name, age):
        # These are instance attributes, unique to each object
        self.name = name
        self.age = age

    # An instance method
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

    # Another instance method
    def have_birthday(self):
        self.age += 1
        return f"Happy Birthday, {self.name}! You are now {self.age}."
```

#### The `__init__` Method (Constructor)

The `__init__` method is a special method in Python classes. It's automatically called when a new object (instance) of the class is created. Its primary purpose is to initialize the attributes of the newly created object.

*   The `self` parameter refers to the instance of the class itself. It must be the first parameter of any instance method, including `__init__`.
*   Any parameters after `self` (`name`, `age` in our example) are used to pass initial values to the object's attributes.

### Creating Objects (Instantiating a Class)

To create an object from a class, you call the class name followed by parentheses, just like calling a function. You pass any required arguments for the `__init__` method inside these parentheses.

```python
# Create an object (instance) of the Person class
person1 = Person("Alice", 30)

# Create another object
person2 = Person("Bob", 25)

print(type(person1)) # Output: <class '__main__.Person'>
```

### Accessing Attributes and Calling Methods

Once an object is created, you can access its attributes and call its methods using dot notation (`.`).

```python
# Access instance attributes
print(f"{person1.name} is {person1.age} years old.") # Output: Alice is 30 years old.
print(f"{person2.name} is {person2.age} years old.") # Output: Bob is 25 years old.

# Access class attribute
print(f"All persons are of species: {Person.species}") # Output: All persons are of species: Homo sapiens
print(f"{person1.name}'s species: {person1.species}") # Can also access class attribute via instance

# Call instance methods
print(person1.greet())       # Output: Hello, my name is Alice and I am 30 years old.
print(person2.have_birthday()) # Output: Happy Birthday, Bob! You are now 26.
print(f"{person2.name} is now {person2.age} years old.") # Output: Bob is now 26 years old.
```

```mermaid
graph TD
    A[Define Class Person] --> B[Class Attribute: species];
    A --> C[__init__(self, name, age)];
    C --> C1[Instance Attributes: self.name, self.age];
    A --> D[greet(self) Method];
    A --> E[have_birthday(self) Method];

    F[Create Object: person1 = Person("Alice", 30)] --> G[__init__ called];
    G --> H[person1.name = "Alice"];
    G --> I[person1.age = 30];
    H & I --> J[person1 object created];

    K[Create Object: person2 = Person("Bob", 25)] --> L[__init__ called];
    L --> M[person2.name = "Bob"];
    L --> N[person2.age = 25];
    M & N --> O[person2 object created];

    J --> P[Access person1.name, person1.age, person1.species];
    O --> Q[Call person2.greet(), person2.have_birthday()];
```
Defining classes and creating objects are the foundational steps in object-oriented programming. They allow you to structure your code around data and the actions that can be performed on that data, leading to more organized and scalable applications.