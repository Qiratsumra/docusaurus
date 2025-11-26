---
id: function-arguments
title: 4.2 Function Arguments
sidebar_position: 3
---

Functions are most powerful when you can pass data into them to perform operations. This data is passed via **arguments** (also called parameters). Python supports several types of arguments, each with its own use case.

### Positional Arguments

Positional arguments are the most straightforward type. Their values are matched to parameters based on their position in the function call.

**Example:**

```python
def describe_pet(animal_type, pet_name):
    """Displays information about a pet."""
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name}.")

# Calling with positional arguments
describe_pet('hamster', 'Harry')
describe_pet('dog', 'Willie')

# Output:
# I have a hamster.
# My hamster's name is Harry.
# I have a dog.
# My dog's name is Willie.
```

The order matters: if you swap the arguments, the meaning changes.

```python
describe_pet('Harry', 'hamster') # Incorrect output
# Output:
# I have a Harry.
# My Harry's name is hamster.
```

### Keyword Arguments

Keyword arguments are name-value pairs that you pass to a function. This allows you to pass arguments in any order, as long as you specify the parameter name.

**Example:**

```python
def describe_pet(animal_type, pet_name):
    """Displays information about a pet."""
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name}.")

# Calling with keyword arguments (order does not matter)
describe_pet(animal_type='hamster', pet_name='Harry')
describe_pet(pet_name='Willie', animal_type='dog') # Order swapped, but still correct

# Output is the same as positional for these calls.
```

### Default Arguments

You can provide a default value for an argument. If a value for that argument is provided in the function call, it overrides the default; otherwise, the default value is used. Default arguments must come after any non-default arguments.

**Example:**

```python
def describe_pet(pet_name, animal_type='dog'): # 'dog' is the default
    """Displays information about a pet with a default animal type."""
    print(f"I have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name}.")

# Using default value for animal_type
describe_pet('Willie')
# Output:
# I have a dog.
# My dog's name is Willie.

# Overriding default value
describe_pet('Harry', animal_type='hamster')
# Output:
# I have a hamster.
# My hamster's name is Harry.
```

### Arbitrary Arguments (`*args` and `**kwargs`)

Sometimes, you don't know how many arguments will be passed to your function. Python allows you to handle an arbitrary number of arguments.

*   **`*args` (Arbitrary Positional Arguments):** Collects an arbitrary number of positional arguments into a tuple.

    ```python
    def make_pizza(size, *toppings):
        """Summarize the pizza we are about to make."""
        print(f"\nMaking a {size}-inch pizza with the following toppings:")
        for topping in toppings:
            print(f"- {topping}")

    make_pizza(16, 'pepperoni')
    make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')

    # Output:
    # Making a 16-inch pizza with the following toppings:
    # - pepperoni
    # 
    # Making a 12-inch pizza with the following toppings:
    # - mushrooms
    # - green peppers
    # - extra cheese
    ```

*   **`**kwargs` (Arbitrary Keyword Arguments):** Collects an arbitrary number of keyword arguments into a dictionary.

    ```python
    def build_profile(first, last, **user_info):
        """Build a dictionary containing everything we know about a user."""
        user_info['first_name'] = first
        user_info['last_name'] = last
        return user_info

    user_profile = build_profile('albert', 'einstein',
                                 location='princeton',
                                 field='physics')
    print(user_profile)
    # Output: {'location': 'princeton', 'field': 'physics', 'first_name': 'albert', 'last_name': 'einstein'}
    ```

### Argument Order

When defining a function, arguments must appear in a specific order:

1.  Positional-only parameters (Python 3.8+ for `/` syntax)
2.  Positional or keyword arguments
3.  `*args`
4.  Keyword-only arguments (after `*args` or a bare `*`)
5.  `**kwargs`

Most commonly, you'll use: `def function(positional_args, default_args=value, *args, **kwargs):`

```mermaid
graph TD
    A[Function Arguments] --> B[Positional Arguments];
    A --> C[Keyword Arguments];
    A --> D[Default Arguments];
    A --> E[Arbitrary Arguments];

    B --> B1[Order matters];
    C --> C1[Name-value pairs];
    C --> C2[Order doesn't matter];
    D --> D1[Default value used if not provided];
    D --> D2[Must follow non-default args];
    E --> E1[*args (tuple of positional)];
    E --> E2[**kwargs (dictionary of keyword)];
```

