# we use the open function to read the contents of the text file.
# Then we create an instance of the TfidfVectorizer class and use the fit_transform method to calculate the TF-IDF values for the text.
# The get_feature_names method is used to get the words from the vocabulary, and then we use pd.DataFrame(tfidf_matrix.todense(), columns=words) 
#to create a dataframe from the tf-idf matrix, where the columns are the words and the rows are the documents.
#--------imports
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
import os
import sys

# --reading text file
file=sys.argv[1]
#file_name = os.path.basename(file)  
file_name = os.path.splitext(os.path.basename(file))[0] # without extension
location = os.path.dirname(file)

with open(file, "r") as f:
    text = f.read()

# create an instance of the TfidfVectorizer
#vectorizer = TfidfVectorizer()
vectorizer = TfidfVectorizer(stop_words = 'english') ## filtering out stop words

# calculate the tf-idf values for the text
tfidf_matrix = vectorizer.fit_transform([text])

# get the words from the vocabulary
words = vectorizer.get_feature_names_out()

# create a dataframe from the tf-idf matrix
df = pd.DataFrame(tfidf_matrix.todense(), columns=words) # for large files will remove to dense becuase 
        #we can work with sparse matrix than (todense has performace issues when files are large)
# print the dataframe
newname="tfidf"+file_name
newpath=location+'\\'+ newname+'.csv'
## saving reuslts in csv file
df.to_csv(newpath)

#send file path as output
print(newpath)