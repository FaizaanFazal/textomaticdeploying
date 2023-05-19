import string
from collections import Counter
from math import log2
import sys
import os


# --reading text file
file=sys.argv[1]
#file_name = os.path.basename(file)  
file_name = os.path.splitext(os.path.basename(file))[0] # without extension
location = os.path.dirname(file)

# Open the text file
with open(file, 'r', errors='ignore') as file:
    text = file.read()

# Remove punctuation
text = text.translate(str.maketrans('', '', string.punctuation))

# Convert to lowercase
text = text.lower()

# Split the text into a list of words
words = text.split()

# Count the occurrences of each word
word_counts = Counter(words)

# Calculate the entropy
total_words = len(words)
entropy = 0
for word, count in word_counts.items():
    p = count / total_words
    entropy += -p * log2(p)

print("Entropy:", entropy)