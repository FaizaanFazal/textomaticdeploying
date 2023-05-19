from gingerit.gingerit import GingerIt
from nltk.tokenize import sent_tokenize
import sys
import os
# importing gingerit

# --reading text or file path and type if its text of path
inp =sys.argv[1]
typ =sys.argv[2]

parser = GingerIt()
if (typ=="text"): 
    sentences = sent_tokenize(inp) 
    res=""
    for s in sentences:  
        #print(s) do not print in shell as it wil be considered output
        sug= GingerIt().parse(s)['result']
        res=res+sug+" "
    print(res)
    
elif (typ=="file"):
    #file_name = os.path.basename(file)  
    file_name = os.path.splitext(os.path.basename(inp))[0] # without extension
    location = os.path.dirname(inp)
    with open(inp, "r") as f:
        text = f.read()
    sentences = sent_tokenize(text) #split int sentences to avoid 300 characters limit   
    res=""
    for s in sentences:  
        #print(s) do not print in shell as it wil be considered output
        sug= GingerIt().parse(s)['result']
        res=res+sug+" "

    newname="Corrected"+file_name
    newpath=location+'\\'+ newname+'.txt'
    with open(newpath, "w") as text_file: #saving text file
        text_file.write(res)
    print(newpath) # return path of a file to be downloaded

else:
    print("Wrong input")



