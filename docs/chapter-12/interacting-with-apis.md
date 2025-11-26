---
id: interacting-with-apis
title: Interacting with APIs
sidebar_position: 3
---

# Interacting with APIs

Application Programming Interfaces (APIs) allow different software systems to communicate. The most common way to interact with web APIs in Python is using the `requests` library.

## Installing `requests`

```bash
pip install requests
```

## Making a GET Request

```python
import requests

response = requests.get('https://api.github.com/events')

if response.status_code == 200:
    print("Success!")
    data = response.json() # Parse JSON response
    print(data[0]['id'])
else:
    print("An error occurred.")
```

## Making a POST Request

Sending data to an API.

```python
payload = {'key1': 'value1', 'key2': 'value2'}
response = requests.post('https://httpbin.org/post', data=payload)

print(response.text)
```

## Handling Errors

Always check for errors.

```python
try:
    response = requests.get('https://api.github.com/invalid-url')
    response.raise_for_status() # Raises an HTTPError for bad responses
except requests.exceptions.HTTPError as err:
    print(f"HTTP Error: {err}")
except Exception as err:
    print(f"Other Error: {err}")
```

## Recap

*   **`requests`** is the de facto standard for HTTP requests in Python.
*   Use `.get()`, `.post()`, `.put()`, `.delete()` for different HTTP methods.
*   Always handle potential exceptions.
