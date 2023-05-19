import os
import sys
import csv
from collections import Counter
from preprocessing import preprocess_text

def calculate_ltc(text):
    # Preprocessing
    tokens = preprocess_text(text)
    # Counting term frequency
    term_frequency = Counter(tokens)
    # Counting document frequency
    document_frequency = Counter(set(tokens))
    # Calculating LTC scores
    ltc_scores = {}
    for term, frequency in term_frequency.items():
        ltc_scores[term] = frequency * (1 / document_frequency[term])
    return ltc_scores


def save_ltc_scores_to_csv(ltc_scores, file_path):
    with open(file_path, 'w', newline='') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(['Term', 'LTC Score'])
        for term, score in ltc_scores.items():
            writer.writerow([term, score])


# Reading text file
file_path = sys.argv[1]
file_name = os.path.splitext(os.path.basename(file_path))[0]  # Without extension
location = os.path.dirname(file_path)
with open(file_path, 'r') as f:
    text = f.read()

# Calculating LTC scores
ltc_scores = calculate_ltc(text)
# Saving LTC scores to CSV
new_file_name = 'ltc_scores_{}'.format(file_name)
new_file_path = os.path.join(location, new_file_name)
save_ltc_scores_to_csv(ltc_scores, new_file_path)

# Printing file path as output
print(new_file_path)
