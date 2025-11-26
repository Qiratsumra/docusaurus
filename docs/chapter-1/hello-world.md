---
id: hello-world
title: 1.3 Your First Python Program - "Hello, World!"
sidebar_position: 4
---

Every programming journey often begins with a simple "Hello, World!" program. This tradition allows you to ensure your environment is set up correctly and gives you a taste of writing and executing code.

### Writing Your First Python Script

1.  **Open a Text Editor:** You can use any plain text editor (like Notepad on Windows, TextEdit on macOS, or Gedit on Linux), or a more advanced Integrated Development Environment (IDE) like VS Code, PyCharm, or Sublime Text. For now, a simple text editor is sufficient.

2.  **Create a New File:**
    *   Open your chosen text editor.
    *   Create a new file.
    *   Save the file as `hello_world.py` (the `.py` extension is crucial for Python files). Choose a convenient location, such as a new folder named `python_projects`.

3.  **Add the Code:**
    In the `hello_world.py` file, type the following single line of code:

    ```python
    print("Hello, World!")
    ```

    *   `print()` is a built-in Python function that outputs the specified message to the console.
    *   The text `"Hello, World!"` is a string literal, enclosed in double quotes.

### Running Your Python Script

1.  **Open a Terminal/Command Prompt:**
    *   **Windows:** Search for "Command Prompt" or "CMD".
    *   **macOS/Linux:** Search for "Terminal".

2.  **Navigate to Your Project Directory:**
    Use the `cd` command (change directory) to go to the folder where you saved `hello_world.py`. For example, if you saved it in `C:\Users\YourUser\python_projects`:

    ```bash
    cd C:\Users\YourUser\python_projects
    ```
    On macOS/Linux, it might be:
    ```bash
    cd ~/python_projects
    ```

3.  **Execute the Script:**
    Once you are in the correct directory, run your Python script using the Python interpreter:

    ```bash
    python hello_world.py
    ```
    (On some systems, especially macOS/Linux, you might need to use `python3 hello_world.py` if `python` defaults to an older version).

    You should see the output:

    ```
    Hello, World!
    ```

Congratulations! You've successfully written and executed your first Python program. This small step confirms that your Python installation is working correctly and you're ready to write more code.

```
Flowchart: Running Your First Python Program

+---------------------+     +--------------------------+     +--------------------------+     +--------------------------+
| Start               | --> | 1. Write Code            | --> | 2. Save as .py File      | --> | 3. Open Terminal         |
|                     |     |   (e.g., print("Hello")) |     |   (e.g., hello_world.py) |     |   (Command Prompt/Terminal)|
+---------------------+     +--------------------------+     +--------------------------+     +--------------------------+
      |                                                                                                       |
      |                                                                                                       V
      V                                                                                +--------------------------+
+---------------------+     +--------------------------+ <----------------------------- | 4. Navigate to Directory |
| Output "Hello, World!"| <-- | 5. Run Script            |                                 +--------------------------+
|                     |     |   (python hello_world.py) |
+---------------------+     +--------------------------+
```
