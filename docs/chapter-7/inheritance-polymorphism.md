---
id: inheritance-polymorphism
title: 7.3 Inheritance and Polymorphism
sidebar_position: 4
---

Inheritance and Polymorphism are two of the most powerful concepts in Object-Oriented Programming (OOP). They promote code reusability, extendability, and allow for more flexible and generic programming.

### Inheritance

**Inheritance** is a mechanism that allows a new class (the **child class** or **subclass**) to inherit attributes and methods from an existing class (the **parent class** or **superclass**). This means the child class can reuse code defined in the parent class and also add its own unique attributes and methods, or override inherited ones.

**Benefits of Inheritance:**

*   **Code Reusability:** Avoid writing the same code multiple times.
*   **Logical Organization:** Creates a clear "is-a" relationship (e.g., a Dog *is a* Animal).
*   **Extensibility:** Easily add new features or modify existing ones without altering the base class.

**Syntax:**

```python
class ParentClass:
    # ...

class ChildClass(ParentClass): # ChildClass inherits from ParentClass
    # ...
```

**Example:**

Let's define a `Vehicle` parent class and then a `Car` child class.

```python
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        return f"{self.year} {self.make} {self.model}"

    def start_engine(self):
        return "Engine started."

class Car(Vehicle): # Car inherits from Vehicle
    def __init__(self, make, model, year, num_doors):
        # Call the parent class's constructor
        super().__init__(make, model, year)
        self.num_doors = num_doors # Add a new attribute specific to Car

    def honk(self):
        return "Beep beep!"

    # Override a method from the parent class
    def start_engine(self):
        return "Car engine purrs to life."

# Create objects
my_vehicle = Vehicle("Generic", "ModelX", 2020)
my_car = Car("Toyota", "Camry", 2023, 4)

print(my_vehicle.display_info()) # Output: 2020 Generic ModelX
print(my_car.display_info())    # Output: 2023 Toyota Camry (inherited from Vehicle)
print(my_car.start_engine())    # Output: Car engine purrs to life. (Overridden method)
print(my_car.honk())           # Output: Beep beep! (New method)

# print(my_vehicle.honk()) # AttributeError: 'Vehicle' object has no attribute 'honk'
```

#### `super()` Function

The `super()` function is used to call methods from the parent class, especially the `__init__` method in a child class's constructor. This ensures that the parent's attributes are properly initialized.

### Polymorphism

**Polymorphism** (meaning "many forms") is the ability of different objects to respond to the same method call in their own specific ways. It allows you to write generic code that can work with objects of different classes, as long as those classes adhere to a common interface (i.e., they implement the same method names).

**Example:**

Consider a function that takes an `Animal` object and tells it to `make_sound()`. If we have `Dog` and `Cat` classes, both inheriting from `Animal` and both having a `make_sound()` method, the function can work with either without knowing their specific type.

```python
class Animal:
    def make_sound(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

class Duck(Animal):
    def make_sound(self):
        return "Quack!"

def animal_party(animals):
    for animal in animals:
        print(animal.make_sound())

pets = [Dog(), Cat(), Duck()]
animal_party(pets)

# Output:
# Woof!
# Meow!
# Quack!
```
In this example, `animal_party` doesn't care if `animal` is a `Dog`, `Cat`, or `Duck`, as long as it has a `make_sound()` method. This is polymorphism in action.

```mermaid
graph TD
    A[OOP Concepts] --> B[Inheritance];
    B --> B1[Parent Class (Superclass)];
    B1 -- is extended by --> B2[Child Class (Subclass)];
    B2 --> B3[Code Reusability];
    B2 --> B4[Method Overriding];
    B2 --> B5[super() to call parent methods];

    A --> C[Polymorphism];
    C --> C1[Many Forms];
    C1 --> C2[Different objects respond to same method call];
    C2 --> C3[Generic code working with various types];
    C3 --> C4[Requires common interface (same method names)];

    B & C --> D[Benefits: Extensibility, Flexibility, Maintainability];
```
Inheritance and polymorphism are cornerstones of designing robust and flexible object-oriented systems in Python, allowing you to build complex hierarchies and interact with them uniformly.