from textblob import TextBlob
import sys
import os
import pickle 
import nltk
from nltk.corpus import stopwords
from string import punctuation




###########------------1*Sentiment Analysis*------------###########
def setimentanalysis(text):
    blob = TextBlob(text)
    # Get the sentiment polarity and subjectivity
    polarity = blob.sentiment.polarity
    return polarity
# ------------------reading text file------------------
file=sys.argv[1]
#file_name = os.path.basename(file)  
file_name = os.path.splitext(os.path.basename(file))[0] # without extension
location = os.path.dirname(file)
# Open the text file
with open(file, 'r', errors='ignore') as file:
    text = file.read()

print(setimentanalysis(text))


###########------------2*Intent Categorization*------------###########

#Loading the SVM model and vectorizer
with open('scripts/trainedModels/svm_model.pkl', 'rb') as f:
    model = pickle.load(f)
with open('scripts/trainedModels/vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

stop_words = set(stopwords.words('english'))
def preprocess_text(text):
    tokens = nltk.word_tokenize(text.lower())
    tokens = [t for t in tokens if t not in stop_words and t not in punctuation]
    return ' '.join(tokens)

text=preprocess_text(text)
X_test = [text]
# Transform test data using vectorizer
X_test_transformed = vectorizer.transform(X_test)
# Predict category using model
y_pred = model.predict(X_test)
print('Category:', y_pred[0])