import sys
import re
import json
import os

file=sys.argv[1]
file_name = os.path.basename(file )  
location = os.path.dirname(file )

list1=[]
with open(file, 'r', errors='ignore') as file:
    contents = file.read()
    #print(contents)

wordList = re.sub("[^a-zA-Z0-9]", " ",  contents).split()
#print(wordList,end="")
checkdic={}
for word in wordList:
 checkdic[word] = checkdic.get(word, 0) + 1

newname="resultb"+file_name
newpath=location+'\\'+ newname
with open(newpath, 'w') as convert_file:
     convert_file.write(json.dumps(checkdic))
print(newpath) #sending resultant file path in response
