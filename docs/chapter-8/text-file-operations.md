---
id: text-file-operations
title: 8.1 Opening, Reading, and Writing Text Files
sidebar_position: 2
---

Interacting with files is a fundamental part of many applications, allowing programs to store data permanently. Python makes file handling straightforward with built-in functions and methods. This section covers the basics of opening, reading, and writing text files.

### The `open()` Function

To interact with a file, you first need to open it using the `open()` built-in function.

**Syntax:**

```python
file_object = open(filename, mode, encoding)
```

*   **`filename`**: The path to the file you want to open (e.g., `"data.txt"`, `"path/to/my_file.log"`).
*   **`mode`**: A string indicating the purpose of opening the file.
    *   `"r"`: Read mode (default). Opens file for reading. File pointer is at the beginning.
    *   `"w"`: Write mode. Opens file for writing. Creates a new file if it doesn't exist, or truncates (empties) the file if it exists. File pointer is at the beginning.
    *   `"a"`: Append mode. Opens file for writing. Creates a new file if it doesn't exist. If the file exists, the file pointer is at the end, so new data is appended.
    *   `"x"`: Exclusive creation mode. Creates a new file, but raises an error if the file already exists.
    *   `"b"`: Binary mode. Used for non-text files (images, audio, executables). Combine with `r`, `w`, `a`, `x` (e.g., `"rb"`, `"wb"`).
    *   `"t"`: Text mode (default). Used for text files. Combine with `r`, `w`, `a`, `x` (e.g., `"rt"`, `"wt"`).
    *   `"+"`: Update mode. Opens a file for both reading and writing. Combine with `r`, `w`, `a`, `x` (e.g., `"r+"`, `"w+"`).
*   **`encoding`**: (Optional) Specifies the encoding of the file (e.g., `"utf-8"`, `"latin-1"`). `utf-8` is recommended for text files.

### Reading from a File

After opening a file in read mode (`"r"`), you can use several methods to read its content:

*   **`read(size)`**: Reads at most `size` bytes/characters from the file. If `size` is omitted or negative, it reads the entire content of the file. Returns a string.
*   **`readline()`**: Reads a single line from the file. Returns an empty string at EOF (end-of-file).
*   **`readlines()`**: Reads all the lines into a list of strings. Each string in the list represents a line, including the newline character `\n`.

**Example:**

```python
# First, create a dummy file for reading example
with open("my_story.txt", "w") as f:
    f.write("Chapter 1: The Beginning\n")
    f.write("Once upon a time, in a land far, far away...\n")
    f.write("The end.")

# Reading the entire file
file_path = "my_story.txt"
file_object = open(file_path, "r")
content = file_object.read()
print("---" Entire content ---")
print(content)
file_object.close()

# Reading line by line
file_object = open(file_path, "r")
print("\n--- Line by line ---")
print(file_object.readline(), end='') # Use end='' to avoid double newlines
print(file_object.readline(), end='')
file_object.close()

# Reading all lines into a list
file_object = open(file_path, "r")
print("\n--- All lines in a list ---")
lines = file_object.readlines()
for line in lines:
    print(line, end='') # Use end='' to avoid double newlines
file_object.close()

# Iterating over file object (memory efficient for large files)
print("\n--- Iterating over file object ---")
file_object = open(file_path, "r")
for line in file_object:
    print(line, end='')
file_object.close()
```

### Writing to a File

After opening a file in write (`"w"`) or append (`"a"`) mode, you can use the `write()` or `writelines()` methods.

*   **`write(string)`**: Writes the given `string` to the file. Returns the number of characters written.
*   **`writelines(iterable_of_strings)`**: Writes all strings from an iterable (e.g., a list of strings) to the file. It does *not* add newline characters automatically.

**Example:**

```python
# Writing to a new file (or overwriting an existing one)
with open("output.txt", "w") as f:
    f.write("This is the first line.\n")
    f.write("This is the second line.\n")

# Appending to a file
with open("output.txt", "a") as f:
    f.write("This is a new appended line.\n")

# Using writelines
data_lines = ["Line A\n", "Line B\n", "Line C\n"]
with open("lines.txt", "w") as f:
    f.writelines(data_lines)
```

### Closing Files

It is **crucial** to close a file after you are done with it using the `close()` method. This frees up system resources and ensures that all buffered data is written to the file. If you forget to close a file, it can lead to data loss or resource leaks.

```python
file_object = open("temp.txt", "w")
file_object.write("Temporary content.")
file_object.close() # Always close your files!
```
However, manually closing files can be error-prone (e.g., forgetting to close, or an error occurring before `close()` is called). This is where the `with` statement comes in, which we will cover next.

```mermaid
graph TD
    A[File Handling] --> B[open(filename, mode, encoding)];
    B --> C{Mode?};
    C -- r (read) --> D[Read Operations];
    D --> D1[read() -> whole content];
    D --> D2[readline() -> single line];
    D --> D3[readlines() -> list of lines];
    D --> D4[Iterate over file object];

    C -- w (write) / a (append) / x (exclusive) --> E[Write Operations];
    E --> E1[write(string)];
    E --> E2[writelines(list_of_strings)];

    F[After Operations] --> G[Always close() file];
    G --> H[Resource management];
    H --> I[Data integrity];
```
Mastering these basic text file operations is the first step towards enabling your Python programs to store, retrieve, and process information from your system.
