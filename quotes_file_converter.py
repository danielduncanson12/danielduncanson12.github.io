import json
import pandas as pd

df = pd.read_excel('quotes.xlsx', header=None, names=['quote', 'author', 'type'])

quotes_list = df.to_dict(orient='records')

#Rewrite the .json file
with open('quotes.json', 'w', encoding='utf-8') as f:
    json.dump(quotes_list, f, indent=4, ensure_ascii=False)

