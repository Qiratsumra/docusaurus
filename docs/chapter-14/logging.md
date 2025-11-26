---
id: logging
title: Logging
sidebar_position: 3
---

# Logging

While `print()` is useful for simple debugging, it is not suitable for production applications. The `logging` module provides a flexible framework for emitting log messages.

## Why Use Logging?

*   **Levels**: Differentiate between informational messages, warnings, and errors.
*   **Destinations**: Send logs to files, email, or external services.
*   **Formatting**: Include timestamps, line numbers, and module names automatically.

## Basic Usage

```python
import logging

logging.basicConfig(level=logging.INFO)

logging.debug('This is a debug message')
logging.info('This is an info message')
logging.warning('This is a warning message')
logging.error('This is an error message')
logging.critical('This is a critical message')
```

**Output:**
```text
INFO:root:This is an info message
WARNING:root:This is a warning message
ERROR:root:This is an error message
CRITICAL:root:This is a critical message
```

## Logging to a File

```python
logging.basicConfig(filename='app.log', filemode='w', level=logging.INFO)
logging.info('Started the application')
```

## Recap

*   Stop using `print()` for application status.
*   Use `logging.debug()` for development info.
*   Use `logging.info()` for general events.
*   Use `logging.error()`/`logging.exception()` for errors.
