---
id: security-basics
title: Security Basics
sidebar_position: 4
---

# Security Basics

Security should be a priority, not an afterthought. Here are some common pitfalls in Python and how to avoid them.

## SQL Injection

Never construct SQL queries by string concatenation.

**Vulnerable:**
```python
# BAD
query = "SELECT * FROM users WHERE name = '" + user_input + "'"
cursor.execute(query)
```

**Secure:**
Use parameterized queries.
```python
# GOOD
query = "SELECT * FROM users WHERE name = %s"
cursor.execute(query, (user_input,))
```

## Input Validation

Never trust user input. Always validate and sanitize data coming from external sources (web forms, APIs, files).

## Secrets Management

Never hardcode passwords, API keys, or tokens in your source code.

**Vulnerable:**
```python
# BAD
API_KEY = "12345-secret-key"
```

**Secure:**
Use environment variables.
```python
# GOOD
import os
API_KEY = os.getenv("API_KEY")
```

## `eval()` and `exec()`

Avoid using `eval()` or `exec()` on untrusted input. They can execute arbitrary code.

**Vulnerable:**
```python
# BAD
user_input = "__import__('os').system('rm -rf /')"
eval(user_input)
```

## Recap

*   **Sanitize** all inputs.
*   Use **parameterized queries** for databases.
*   Store secrets in **environment variables**.
*   Avoid `eval()`.
