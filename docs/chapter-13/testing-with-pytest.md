---
id: testing-with-pytest
title: Testing with pytest
sidebar_position: 3
---

# Testing with pytest

Testing is crucial for ensuring your code works as expected and doesn't break when you make changes. `pytest` is the most popular testing framework for Python due to its simplicity and powerful features.

## Installing pytest

```bash
pip install pytest
```

## Writing a Simple Test

Create a file named `test_sample.py`.

```python
# content of test_sample.py
def func(x):
    return x + 1

def test_answer():
    assert func(3) == 5
```

## Running Tests

Run `pytest` in your terminal. It will automatically find files starting with `test_` or ending with `_test.py`.

```bash
$ pytest
============================= test session starts ==============================
...
test_sample.py F                                                         [100%]

================================== FAILURES ===================================
_________________________________ test_answer _________________________________

    def test_answer():
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_sample.py:5: AssertionError
=========================== 1 failed in 0.12 seconds ===========================
```

## Fixtures

Fixtures allow you to provide data or objects to your tests.

```python
import pytest

@pytest.fixture
def sample_data():
    return {"key": "value"}

def test_data(sample_data):
    assert sample_data["key"] == "value"
```

## Recap

*   **pytest** makes testing easy with simple `assert` statements.
*   Name your test files `test_*.py`.
*   Use **fixtures** for setup and teardown logic.
