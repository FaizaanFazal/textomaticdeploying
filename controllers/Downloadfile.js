import * as fs from 'fs';
import { fileURLToPath } from 'url';
import {dirname } from 'path';
import path from 'path'


export const Download=(req,res)=>{
    try {
         
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filepath = req.query.downloadpath;
    const pathadded="../"+filepath
    const filePath = path.join(__dirname, pathadded);
    
    console.log(filePath); // "path/to/file.txt"

    const file = fs.createReadStream(filePath);
    const filename = "file.csv"
    const fileSize = fs.statSync(filePath).size;
  
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=file.csv',
      'Content-Length': fileSize
    });
   
    file.pipe(res);
    } catch (error) {
        res.send(error)
    }
   
}