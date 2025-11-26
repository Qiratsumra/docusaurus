---
id: pep8-and-linting
title: PEP 8 and Linting
sidebar_position: 2
---

# PEP 8 and Linting

PEP 8 is the official Style Guide for Python Code. Adhering to it ensures that your code is readable by other Python developers.

## Key PEP 8 Rules

*   **Indentation**: Use 4 spaces per indentation level. No tabs.
*   **Line Length**: Limit lines to 79 characters.
*   **Imports**: Imports should be on separate lines and at the top of the file.
*   **Whitespace**: Avoid extraneous whitespace.
    *   Yes: `spam(ham[1], {eggs: 2})`
    *   No:  `spam( ham[ 1 ], { eggs: 2 } )`
*   **Naming Conventions**:
    *   `snake_case` for functions and variables.
    *   `CamelCase` for classes.
    *   `UPPER_CASE` for constants.

## Linters

Linters are tools that automatically check your code against style guides and look for potential errors.

### Flake8

Combines `pycodestyle` (PEP 8 checks), `pyflakes` (error checks), and `mccabe` (complexity checks).

```bash
pip install flake8
flake8 my_script.py
```

### Black

"The Uncompromising Code Formatter". It automatically formats your code to be PEP 8 compliant.

```bash
pip install black
black my_script.py
```

## Recap

*   **PEP 8** is the standard style guide.
*   Use **Flake8** to check for violations.
*   Use **Black** to auto-format your code.
