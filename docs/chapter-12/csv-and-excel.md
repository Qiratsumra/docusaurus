---
id: csv-and-excel
title: CSV and Excel
sidebar_position: 4
---

# CSV and Excel

Spreadsheets are a common way to store data. Python has built-in support for CSV and powerful libraries for Excel.

## Working with CSV

The `csv` module handles Comma Separated Values files.

### Reading CSV

```python
import csv

with open('data.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(', '.join(row))
```

### Writing CSV

```python
import csv

with open('output.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Name', 'Age'])
    writer.writerow(['Alice', '30'])
    writer.writerow(['Bob', '25'])
```

## Working with Excel

For Excel files (`.xlsx`), the **pandas** library is highly recommended, though `openpyxl` is also used for lower-level control.

### Installing Pandas

```bash
pip install pandas openpyxl
```

### Reading Excel

```python
import pandas as pd

df = pd.read_excel('data.xlsx')
print(df.head())
```

### Writing Excel

```python
df.to_excel('output.xlsx', index=False)
```

## Recap

*   Use the built-in `csv` module for simple text-based data.
*   Use **pandas** for robust Excel manipulation and data analysis.
