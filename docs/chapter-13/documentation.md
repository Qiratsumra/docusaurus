---
id: documentation
title: Documentation
sidebar_position: 4
---

# Documentation

Code tells you *how*, comments tell you *why*. Documentation tells you *what*.

## Docstrings

Docstrings are string literals that occur as the first statement in a module, function, class, or method definition.

```python
def add(a, b):
    """
    Adds two numbers together.

    Args:
        a (int): The first number.
        b (int): The second number.

    Returns:
        int: The sum of a and b.
    """
    return a + b
```

You can access docstrings using the `__doc__` attribute or the `help()` function.

## Documentation Styles

*   **Google Style**: (Shown above) Clean and readable.
*   **NumPy Style**: Good for scientific projects.
*   **Sphinx/reStructuredText**: The traditional Python standard.

## README.md

Your project's landing page. It should include:
1.  **Project Name & Description**
2.  **Installation Instructions**
3.  **Usage Examples**
4.  **License**

## Tools

*   **Sphinx**: Generates beautiful HTML documentation from reStructuredText or Markdown.
*   **MkDocs**: A fast, simple static site generator that's geared towards building project documentation (often used with Material for MkDocs).

## Recap

*   Write **docstrings** for all public functions and classes.
*   Maintain a clear **README**.
*   Consider using tools like Sphinx or MkDocs for larger projects.
