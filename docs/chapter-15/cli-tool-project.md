---
id: cli-tool-project
title: CLI Tool Project
sidebar_position: 2
---

# Project 1: CLI Task Manager

We will build a simple command-line task manager using the `argparse` library (or `click`/`typer` for more advanced users, but we'll stick to the standard library here).

## Requirements

1.  Add a task.
2.  List all tasks.
3.  Delete a task.
4.  Save tasks to a JSON file so they persist.

## Step 1: Project Setup

Create a folder `task_manager` and a file `main.py`.

## Step 2: Data Persistence

We need functions to load and save tasks.

```python
import json
import os

DATA_FILE = 'tasks.json'

def load_tasks():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

def save_tasks(tasks):
    with open(DATA_FILE, 'w') as f:
        json.dump(tasks, f, indent=4)
```

## Step 3: Implementing Features

```python
def add_task(title):
    tasks = load_tasks()
    tasks.append({"title": title, "completed": False})
    save_tasks(tasks)
    print(f"Task '{title}' added.")

def list_tasks():
    tasks = load_tasks()
    if not tasks:
        print("No tasks found.")
        return
    for i, task in enumerate(tasks):
        status = "[x]" if task["completed"] else "[ ]"
        print(f"{i + 1}. {status} {task['title']}")

def delete_task(index):
    tasks = load_tasks()
    if 0 <= index < len(tasks):
        removed = tasks.pop(index)
        save_tasks(tasks)
        print(f"Task '{removed['title']}' deleted.")
    else:
        print("Invalid task number.")
```

## Step 4: Argument Parsing

```python
import argparse

def main():
    parser = argparse.ArgumentParser(description="Simple Task Manager")
    subparsers = parser.add_subparsers(dest="command")

    # Add
    add_parser = subparsers.add_parser("add", help="Add a new task")
    add_parser.add_argument("title", help="Task title")

    # List
    subparsers.add_parser("list", help="List all tasks")

    # Delete
    delete_parser = subparsers.add_parser("delete", help="Delete a task")
    delete_parser.add_argument("index", type=int, help="Task number to delete")

    args = parser.parse_args()

    if args.command == "add":
        add_task(args.title)
    elif args.command == "list":
        list_tasks()
    elif args.command == "delete":
        delete_task(args.index - 1) # User input is 1-based
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
```

## Usage

```bash
python main.py add "Buy milk"
python main.py list
python main.py delete 1
```
