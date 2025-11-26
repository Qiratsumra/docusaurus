--- 
id: file-system-operations
title: 8.5 Basic File System Operations (os and pathlib modules)
sidebar_position: 6
---

Beyond reading and writing file contents, Python provides powerful tools to interact with the file system itself: managing files and directories, checking paths, and manipulating them. The `os` module (Operating System) and the more modern `pathlib` module are your primary interfaces for these tasks.

### The `os` Module (Older but Widely Used)

The `os` module provides a portable way of using operating system dependent functionality. Many of its functions for path manipulation are found in `os.path`.

#### 1. Current Working Directory

*   `os.getcwd()`: Get the current working directory.
*   `os.chdir(path)`: Change the current working directory.

```python
import os

print(f"Current working directory: {os.getcwd()}")
# os.chdir("../") # Change to parent directory
# print(f"New working directory: {os.getcwd()}")
```

#### 2. Listing Directories and Files

*   `os.listdir(path='.')`: Returns a list containing the names of the entries in the directory given by `path`. Defaults to current directory.

```python
# Create some dummy files/dirs for listing
os.makedirs("temp_dir/sub_dir", exist_ok=True)
with open("temp_dir/file1.txt", "w") as f: f.write("test")
with open("temp_dir/file2.txt", "w") as f: f.write("test")

print(f"\nContents of temp_dir: {os.listdir('temp_dir')}")
# Output (order may vary): ['sub_dir', 'file1.txt', 'file2.txt']
```

#### 3. Creating and Deleting Directories

*   `os.mkdir(path)`: Create a single directory. Raises `FileExistsError` if the directory already exists.
*   `os.makedirs(path, exist_ok=False)`: Create all intermediate-level directories needed to contain the leaf directory. If `exist_ok` is `True`, no error is raised if the target directory already exists.
*   `os.rmdir(path)`: Remove an empty directory.
*   `os.removedirs(path)`: Recursively remove empty directories.

```python
# os.mkdir("my_new_dir") # Creates a single directory
# os.makedirs("path/to/nested/dir", exist_ok=True) # Creates nested directories
# os.rmdir("my_new_dir") # Removes an empty directory
```

#### 4. Renaming and Deleting Files

*   `os.rename(src, dst)`: Rename a file or directory `src` to `dst`.
*   `os.remove(path)` / `os.unlink(path)`: Delete a file.

```python
# Example: Rename a file
# with open("old_name.txt", "w") as f: f.write("content")
# os.rename("old_name.txt", "new_name.txt")

# Example: Delete a file
# os.remove("new_name.txt")
```

#### 5. Path Manipulation (`os.path`)

`os.path` provides functions for common pathname manipulations.

*   `os.path.join(path1, path2, ...)`: Join path components intelligently.
*   `os.path.exists(path)`: Check if a path exists.
*   `os.path.isfile(path)`: Check if a path is a regular file.
*   `os.path.isdir(path)`: Check if a path is a directory.
*   `os.path.split(path)`: Split a pathname into a pair `(head, tail)`.
*   `os.path.basename(path)`: Return the base name of pathname `path`.
*   `os.path.dirname(path)`: Return the directory name of pathname `path`.

```python
file_name = "report.pdf"
directory = "documents"
full_path = os.path.join(directory, file_name)
print(f"Joined path: {full_path}") # Output: Joined path: documents\report.pdf (on Windows)

print(f"Does {directory} exist? {os.path.exists(directory)}")
```

### The `pathlib` Module (Modern and Object-Oriented)

The `pathlib` module (introduced in Python 3.4) offers an object-oriented approach to file system paths, which is often more intuitive and less error-prone than the string-based `os` module.

#### 1. Creating Path Objects

Use `Path()` to create a path object.

```python
from pathlib import Path

current_dir = Path.cwd()
print(f"Current Pathlib Path: {current_dir}")
```

#### 2. Manipulating Paths

Path objects have methods for common operations.

```python
from pathlib import Path

# Define a path
data_dir = Path("my_data")
data_file = data_dir / "user_settings.txt" # Using '/' operator to join paths

# Create directory
data_dir.mkdir(exist_ok=True)

# Write to file
data_file.write_text("setting1=value1\nsetting2=value2")

# Read from file
content = data_file.read_text()
print(f"\nContent of {data_file}:\n{content}")

# Check properties
print(f"Is {data_file} a file? {data_file.is_file()}")
print(f"Does {data_dir} exist? {data_dir.exists()}")
print(f"Parent directory: {data_file.parent}")
print(f"File name: {data_file.name}")
print(f"File stem (name without suffix): {data_file.stem}")
print(f"File suffix: {data_file.suffix}")

# Rename file
new_file_name = data_dir / "user_config.txt"
data_file.rename(new_file_name)

# Delete file
new_file_name.unlink()

# Delete empty directory
data_dir.rmdir()
```
The `pathlib` module is generally preferred for new code due to its cleaner, object-oriented interface.

```mermaid
graph TD
    A[File System Operations] --> B[os Module];
    B --> B1[os.getcwd(), os.chdir()];
    B --> B2[os.listdir()];
    B --> B3[os.mkdir(), os.makedirs(), os.rmdir()];
    B --> B4[os.rename(), os.remove()];
    B --> B5[os.path.join(), os.path.exists(), os.path.isfile(), os.path.isdir()];

    A --> C[pathlib Module];
    C --> C1[Path.cwd(), Path("my_dir")];
    C --> C2[Path / "file.txt"];
    C --> C3[Path.mkdir(), Path.rmdir()];
    C --> C4[Path.rename(), Path.unlink()];
    C --> C5[Path.is_file(), Path.exists(), Path.parent, Path.name, Path.stem, Path.suffix];
```
Mastering these file system operations allows your Python programs to manage, organize, and interact with the underlying operating system environment effectively.
