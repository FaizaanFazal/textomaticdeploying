from collections import Counter
import csv
import os
import sys
from preprocessing import preprocess_text

def calculate_tf(text):
    # Preprocessing
    # text = text.lower()
    # text = text.replace(",", "").replace(".", "").replace("!", "").replace("?", "")
    # Tokenization
    # tokens = text.split(" ")
    tokens=preprocess_text(text)
    # Calculating Term Frequency
    term_frequency = dict(Counter(tokens)) #Counter class from the collections library to calculate the frequency of each word in the text document.
    # Sorting and Ranking
    sorted_tf = dict(sorted(term_frequency.items(), key=lambda item: item[1], reverse=True))
    return sorted_tf

def save_to_csv(data, file_name):
    with open(file_name, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["Word", "Frequency"])
        for word, frequency in data.items():
            writer.writerow([word, frequency])

# --reading text file
file=sys.argv[1]
#file_name = os.path.basename(file)  
file_name = os.path.splitext(os.path.basename(file))[0] # without extension
location = os.path.dirname(file)
with open(file, "r") as f:
    text = f.read()

tf = calculate_tf(text)
newname="tfc"+file_name
newpath=location+'\\'+ newname+'.csv'
save_to_csv(tf, newpath)
print(newpath)
