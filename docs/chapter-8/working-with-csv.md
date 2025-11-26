---
id: working-with-csv
title: 8.3 Working with CSV Files
sidebar_position: 4
---

CSV (Comma Separated Values) is a common, simple file format used to store tabular data. Each line in a CSV file typically represents a row, and commas (or other delimiters) separate the values within that row. Python's built-in `csv` module provides robust functionality for reading from and writing to CSV files.

### Reading CSV Files

The `csv` module's `reader` object allows you to iterate over lines in the CSV file, where each line is returned as a list of strings.

**Example: `data.csv` content**

```csv title="data.csv"
Name,Age,City
Alice,30,New York
Bob,24,London
Charlie,35,Paris
```

**Reading example:**

```python
import csv

# Create a dummy CSV file for demonstration
with open('data.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Name', 'Age', 'City'])
    writer.writerow(['Alice', '30', 'New York'])
    writer.writerow(['Bob', '24', 'London'])
    writer.writerow(['Charlie', '35', 'Paris'])

# Reading the CSV file
with open('data.csv', 'r', newline='') as csvfile:
    csv_reader = csv.reader(csvfile)

    # Read header row (optional)
    header = next(csv_reader)
    print(f"Header: {header}")

    # Read data rows
    print("Data:")
    for row in csv_reader:
        print(row)

# Output:
# Header: ['Name', 'Age', 'City']
# Data:
# ['Alice', '30', 'New York']
# ['Bob', '24', 'London']
# ['Charlie', '35', 'Paris']
```

#### Reading as Dictionaries (`csv.DictReader`)

For more convenient access to data by column name, use `csv.DictReader`. It reads each row as an ordered dictionary, where keys are the column headers.

```python
import csv

with open('data.csv', 'r', newline='') as csvfile:
    csv_dict_reader = csv.DictReader(csvfile)

    print("Data (as dictionaries):")
    for row in csv_dict_reader:
        print(row)
        print(f"{row['Name']} lives in {row['City']}")

# Output:
# Data (as dictionaries):
# {'Name': 'Alice', 'Age': '30', 'City': 'New York'}
# Alice lives in New York
# {'Name': 'Bob', 'Age': '24', 'City': 'London'}
# Bob lives in London
# {'Name': 'Charlie', 'Age': '35', 'City': 'Paris'}
# Charlie lives in Paris
```

### Writing CSV Files

The `csv` module's `writer` object is used for writing data to CSV files.

*   `writerow(list_of_values)`: Writes a single row.
*   `writerows(list_of_lists)`: Writes multiple rows.

**Example: `output.csv`**

```python
import csv

data_to_write = [
    ['Product', 'Price', 'Quantity'],
    ['Laptop', 1200, 10],
    ['Mouse', 25, 50],
    ['Keyboard', 75, 20]
]

with open('output.csv', 'w', newline='') as csvfile:
    csv_writer = csv.writer(csvfile)
    csv_writer.writerows(data_to_write)

print("Data written to output.csv")
# Check output.csv to verify:
# Product,Price,Quantity
# Laptop,1200,10
# Mouse,25,50
# Keyboard,75,20
```

#### Writing from Dictionaries (`csv.DictWriter`)

To write data from a list of dictionaries, where the dictionary keys correspond to column headers, use `csv.DictWriter`.

```python
import csv

data_dict_to_write = [
    {'Name': 'David', 'Age': 40, 'City': 'Berlin'},
    {'Name': 'Eve', 'Age': 28, 'City': 'Rome'}
]

fieldnames = ['Name', 'Age', 'City'] # Must specify header names

with open('output_dict.csv', 'w', newline='') as csvfile:
    csv_writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    csv_writer.writeheader() # Writes the header row
    csv_writer.writerows(data_dict_to_write)

print("Dictionary data written to output_dict.csv")
# Check output_dict.csv to verify:
# Name,Age,City
# David,40,Berlin
# Eve,28,Rome
```

### Important `newline=''` Parameter

When opening CSV files in Python, it's generally recommended to include the `newline=''` argument in the `open()` function. This prevents extra blank rows from appearing in the CSV file, which can happen due to the way different operating systems handle line endings.

```mermaid
graph TD
    A[Working with CSV Files] --> B[Reading CSV];
    B --> B1[csv.reader];
    B1 --> B1a[Iterates rows as lists];
    B1 --> B1b[next() for header];

    B --> B2[csv.DictReader];
    B2 --> B2a[Iterates rows as dictionaries];
    B2 --> B2b[Keys are column headers];

    A --> C[Writing CSV];
    C --> C1[csv.writer];
    C1 --> C1a[writerow(list)];
    C1 --> C1b[writerows(list_of_lists)];

    C --> C2[csv.DictWriter];
    C2 --> C2a[fieldnames (required)];
    C2 --> C2b[writeheader()];
    C2 --> C2c[writerow(dict)];
    C2 --> C2d[writerows(list_of_dicts)];

    D[Best Practice] --> D1[open(..., newline='')];
    D1 --> D1a[Prevents blank rows];
```
The `csv` module simplifies working with tabular data, making it easy to integrate spreadsheet-like data into your Python applications.