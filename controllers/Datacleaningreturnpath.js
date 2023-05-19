export const fileuploads = (req, res) => {

 
  let scriptOutput =  req.file.path;
  console.log(req.file.path)
    try {res.send(scriptOutput);
        
    } catch (error) {
        res.send(error);
    }
    
};
