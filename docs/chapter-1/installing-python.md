---
id: installing-python
title: 1.2 Installing Python and Pip
sidebar_position: 3
---

Before you can start programming in Python, you need to install the Python interpreter and `pip`, the package installer for Python. Python 3.12 is the latest stable version, and we will focus on that.

### Step-by-Step Installation Guide

The installation process varies slightly depending on your operating system.

#### Windows

1.  **Download Python:** Go to the [official Python website](https://www.python.org/downloads/windows/) and download the latest stable version of Python 3 (e.g., Python 3.12). Choose the appropriate installer for your system (e.g., "Windows installer (64-bit)").
2.  **Run the Installer:**
    *   Double-click the downloaded `.exe` file to start the installer.
    *   **CRITICAL STEP:** On the first screen, make sure to check the box that says "**Add Python.exe to PATH**". This is essential for running Python from the command line.
    *   Select "Install Now" for the recommended installation.
    *   Follow the prompts to complete the installation.
3.  **Verify Installation:**
    *   Open Command Prompt (search for `cmd`).
    *   Type `python --version` and press Enter. You should see the installed Python version (e.g., `Python 3.12.0`).
    *   Type `pip --version` and press Enter. You should see the pip version.

#### macOS

1.  **Download Python:** Go to the [official Python website](https://www.python.org/downloads/macos/) and download the latest stable version of Python 3 (e.g., Python 3.12). Choose the appropriate macOS installer.
2.  **Run the Installer:**
    *   Double-click the downloaded `.pkg` file.
    *   Follow the on-screen instructions. The installer will guide you through the process, and Python will be installed in `/Library/Frameworks/Python.framework/Versions/3.12`.
3.  **Verify Installation:**
    *   Open Terminal (Applications > Utilities > Terminal).
    *   Type `python3 --version` and press Enter. You should see the installed Python version (e.g., `Python 3.12.0`). macOS often has an older Python 2 pre-installed, so use `python3`.
    *   Type `pip3 --version` and press Enter. You should see the pip version.

#### Linux (Ubuntu/Debian)

Python 3 is usually pre-installed on most modern Linux distributions. If not, or if you need a specific version, you can install it via your package manager.

1.  **Update Package List:**
    ```bash
    sudo apt update
    ```
2.  **Install Python 3 and Pip:**
    ```bash
    sudo apt install python3.12 python3-pip
    ```
3.  **Verify Installation:**
    *   Open Terminal.
    *   Type `python3 --version` and press Enter.
    *   Type `pip3 --version` and press Enter.

### What is Pip?

**Pip** (stands for "Pip Installs Packages") is the standard package-management system used to install and manage software packages written in Python. Many packages are available through the Python Package Index (PyPI).

When you install Python using the official installers, `pip` is usually included automatically.

**Basic Pip Commands:**

*   **Install a package:** `pip install package_name` (or `pip3 install package_name` on Linux/macOS)
*   **Uninstall a package:** `pip uninstall package_name`
*   **List installed packages:** `pip list`
*   **Show package details:** `pip show package_name`

:::tip
It's highly recommended to use Python within a virtual environment for your projects. We will cover virtual environments in detail in a later chapter, but for now, you can install Python system-wide.
:::