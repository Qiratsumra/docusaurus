---
id: web-scraper-project
title: Web Scraper Project
sidebar_position: 3
---

# Project 2: Web Scraper

We will build a script to scrape quotes from `http://quotes.toscrape.com`.

## Requirements

1.  Fetch the HTML content of the page.
2.  Parse the HTML to find quotes and authors.
3.  Save the data to a CSV file.

## Dependencies

```bash
pip install requests beautifulsoup4
```

## Implementation

```python
import requests
from bs4 import BeautifulSoup
import csv

URL = "http://quotes.toscrape.com"

def scrape_quotes():
    print(f"Fetching {URL}...")
    response = requests.get(URL)
    
    if response.status_code != 200:
        print("Failed to retrieve page")
        return []

    soup = BeautifulSoup(response.text, "html.parser")
    quotes_data = []

    for quote_div in soup.find_all("div", class_="quote"):
        text = quote_div.find("span", class_="text").get_text(strip=True)
        author = quote_div.find("small", class_="author").get_text(strip=True)
        quotes_data.append([text, author])

    return quotes_data

def save_to_csv(data, filename="quotes.csv"):
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Quote", "Author"]) # Header
        writer.writerows(data)
    print(f"Saved {len(data)} quotes to {filename}")

if __name__ == "__main__":
    data = scrape_quotes()
    if data:
        save_to_csv(data)
```

## Recap

You have now built:
1.  A **CLI tool** that interacts with the file system and user arguments.
2.  A **Web scraper** that fetches and parses external data.

These projects combine many of the skills you've learned throughout this book!
