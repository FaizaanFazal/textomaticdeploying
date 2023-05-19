import os
import sys
import csv
from sklearn.feature_extraction.text import CountVectorizer


def calculate_binary(text):
# Create a list of dictionaries containing the data
  data = []
  for i in range(X.shape[0]):
    row = {}
    for j in range(X.shape[1]):
        row[feature_names[j]] = X[i, j]
    data.append(row)
  return data

# Save the data to a CSV 
def save_to_csv(data, file_name):
  with open(file_name, "w", newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=feature_names)
    writer.writeheader()
    for row in data:
        writer.writerow(row)


# --reading text file
file=sys.argv[1]
#file_name = os.path.basename(file)  
file_name = os.path.splitext(os.path.basename(file))[0] # without extension
location = os.path.dirname(file)

with open(file, "r") as f:
    text = f.read()
vectorizer = CountVectorizer(binary=True)
X = vectorizer.fit_transform([text])
# Get the feature names
feature_names = vectorizer.get_feature_names_out()

matrix_b = calculate_binary(text)
# Saving LTC scores to CSV
new_file_name = 'binary_{}'.format(file_name)
new_file_path = os.path.join(location, new_file_name)
save_to_csv(matrix_b, new_file_path)

# Printing file path as output
print(new_file_path)
