---
id: virtual-environments
title: Virtual Environments
sidebar_position: 2
---

# Virtual Environments

A virtual environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages.

## Why Use Virtual Environments?

*   **Dependency Management**: Different projects might need different versions of the same library.
*   **Isolation**: Keeps your global Python installation clean.
*   **Reproducibility**: Makes it easier to share your project setup with others.

## Using `venv`

Python 3 comes with the `venv` module built-in.

### Creating a Virtual Environment

```bash
python -m venv myenv
```

This creates a directory named `myenv`.

### Activating the Environment

**Windows:**

```bash
myenv\Scripts\activate
```

**macOS/Linux:**

```bash
source myenv/bin/activate
```

Once activated, your command prompt will usually change to show the name of the environment.

### Installing Packages

With the environment active, use `pip` to install packages:

```bash
pip install requests
```

### Deactivating

To leave the virtual environment:

```bash
deactivate
```

## Managing Dependencies

To save the list of installed packages:

```bash
pip freeze > requirements.txt
```

To install dependencies from a file:

```bash
pip install -r requirements.txt
```

## Recap

*   Always use virtual environments for your projects.
*   `venv` is the standard tool included with Python.
*   Use `requirements.txt` to track dependencies.
