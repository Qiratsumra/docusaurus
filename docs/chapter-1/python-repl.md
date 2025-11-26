---
id: python-repl
title: 1.4 Using the Python Interpreter (REPL)
sidebar_position: 5
---

Beyond running scripts, Python also provides an interactive shell, often referred to as the **REPL** (Read-Eval-Print Loop). The REPL is an invaluable tool for quickly testing code snippets, experimenting with new features, and debugging.

### What is REPL?

REPL stands for:

*   **Read:** It reads the input the user has typed.
*   **Eval:** It evaluates the input.
*   **Print:** It prints the result to the screen.
*   **Loop:** It then loops back to read the next input.

This interactive environment allows for immediate feedback, which is particularly useful for learning and quick prototyping.

### Starting the Python REPL

1.  **Open a Terminal/Command Prompt:**
    *   **Windows:** Search for "Command Prompt" or "CMD".
    *   **macOS/Linux:** Search for "Terminal".

2.  **Launch the Interpreter:**
    Simply type `python` (or `python3` on some systems) and press Enter.

    ```bash
    python
    ```

    You should see output similar to this, indicating that you are now in the Python REPL:

    ```
    Python 3.12.0 (main, Oct 24 2023, 13:20:00) [MSC v.1936 64 bit (AMD64)] on win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>>
    ```
    The `>>>` is the Python prompt, indicating it's ready for your input.

### Interacting with the REPL

You can now type Python code directly at the `>>>` prompt.

**Example 1: Basic Arithmetic**

```python
>>> 2 + 2
4
>>> 10 / 3
3.3333333333333335
>>> 5 * (2 + 3)
25
```

**Example 2: Variables and Strings**

```python
>>> name = "Alice"
>>> print("Hello, " + name + "!")
Hello, Alice!
>>> age = 30
>>> print(f"{name} is {age} years old.")
Alice is 30 years old.
```

**Example 3: Multi-line Statements**

For multi-line statements like `if` conditions or loops, the REPL will automatically indent for you and show `...` as a continuation prompt. Press Enter twice to execute the block.

```python
>>> if True:
...     print("Condition is true")
... else:
...     print("Condition is false")
...
Condition is true
```

### Exiting the REPL

To exit the Python REPL, you have a few options:

*   Type `exit()` and press Enter.
*   Type `quit()` and press Enter.
*   Press `Ctrl+Z` (on Windows) or `Ctrl+D` (on macOS/Linux) and then Enter.

The REPL is a fantastic tool for quick tests and learning. Don't hesitate to use it frequently as you explore new Python concepts.