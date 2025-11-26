---
id: while-loops
title: 3.3 while Loops
sidebar_position: 4
---

The `while` loop in Python is used to repeatedly execute a block of code as long as a certain condition is `True`. It's ideal when you don't know beforehand how many times the loop needs to run, but rather depend on a condition.

### Basic `while` Loop Syntax

The `while` loop continues to execute its body until the condition becomes `False`.

**Syntax:**

```python
while condition:
    # Code to execute as long as the condition is True
```

**Important:** You must ensure that the condition eventually becomes `False` inside the loop; otherwise, you'll create an **infinite loop**.

**Example: Simple Counter**

```python
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1 # Increment count to eventually make the condition False

print("Loop finished.")

# Output:
# Count is: 0
# Count is: 1
# Count is: 2
# Count is: 3
# Count is: 4
# Loop finished.
```

### Infinite Loops

An infinite loop occurs when the condition of a `while` loop never becomes `False`. This will cause your program to run indefinitely.

```python
# DANGER: This is an infinite loop!
# while True:
#     print("This will print forever!")
```

If you accidentally run an infinite loop, you can usually stop it by pressing `Ctrl+C` in your terminal.

### `while` Loop with `else` Block

Similar to `for` loops, `while` loops can also have an optional `else` block. The `else` block executes *after* the `while` loop's condition becomes `False` (i.e., the loop finishes normally).

**Example:**

```python
num = 0
while num < 3:
    print(f"Num is {num}")
    num += 1
else:
    print(f"While loop ended. Final num is {num}")

# Output:
# Num is 0
# Num is 1
# Num is 2
# While loop ended. Final num is 3
```

If the loop is terminated by a `break` statement, the `else` block will *not* be executed.

```python
i = 0
while i < 5:
    print(i)
    if i == 2:
        print("Breaking loop at 2")
        break
    i += 1
else:
    print("This else block will not execute")

# Output:
# 0
# 1
# 2
# Breaking loop at 2
```

### `while True` and Conditional Breaks

A common pattern is to use `while True` to create a loop that runs indefinitely, and then use an `if` statement with a `break` to exit the loop based on a specific condition. This is often used for interactive input or process monitoring.

```python
secret_number = 7
guess = 0

while True:
    try:
        guess = int(input("Guess the number (0-9): "))
        if guess == secret_number:
            print("Congratulations! You guessed it.")
            break # Exit the loop
        elif guess < secret_number:
            print("Too low, try again.")
        else:
            print("Too high, try again.")
    except ValueError:
        print("Invalid input. Please enter a number.")

print("Game over.")
```
In this example, the loop continues until the user guesses the correct number, at which point `break` is used to terminate the loop.

```mermaid
graph TD
    A[Start] --> B{Condition is True?};
    B -- No --> D[Execute Else Block (Optional)];
    B -- Yes --> C[Execute Code Block];
    C -- Condition still True? --> B;
    C -- Condition becomes False --> D;
    D --> E[End];
    C -- Break statement --> E;
```
