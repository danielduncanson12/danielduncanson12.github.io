#Converts pdf to JSON file with page numbers labelled.

import pymupdf
import json

doc = pymupdf.open('flashcards/harry_potter_dois.pdf')
pages_data = []

for page in doc:
    pages_data.append(page.get_text())

with open('book_pages.json', 'w', encoding='utf-8') as f:
    json.dump(pages_data, f)

print(f"Successfully exported {len(pages_data)} pages to book_pages.json!")