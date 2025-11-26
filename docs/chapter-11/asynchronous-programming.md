---
id: asynchronous-programming
title: Asynchronous Programming
sidebar_position: 4
---

# Asynchronous Programming

Asynchronous programming allows your program to handle multiple tasks concurrently. This is particularly useful for I/O-bound operations (like network requests or file operations) where the program would otherwise be waiting.

## `async` and `await`

Python uses the `async` and `await` keywords (introduced in Python 3.5) and the `asyncio` library.

*   `async def`: Defines a coroutine.
*   `await`: Pauses the coroutine until the awaited task is complete.

## Basic Example

```python
import asyncio

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    print(f"started at {time.strftime('%X')}")

    await say_after(1, 'hello')
    await say_after(2, 'world')

    print(f"finished at {time.strftime('%X')}")

import time
asyncio.run(main())
```

## Running Concurrently

To run tasks concurrently, use `asyncio.gather()`.

```python
async def main():
    print(f"started at {time.strftime('%X')}")

    await asyncio.gather(
        say_after(1, 'hello'),
        say_after(2, 'world')
    )

    print(f"finished at {time.strftime('%X')}")
```

In the concurrent version, the total time will be around 2 seconds (the longest task), rather than 3 seconds (sum of tasks).

## Recap

*   **AsyncIO** is Python's library for writing concurrent code.
*   Use `async def` to define coroutines.
*   Use `await` to call coroutines.
*   It significantly improves performance for I/O-heavy applications.
