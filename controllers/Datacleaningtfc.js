import {spawn} from 'child_process';
import * as fs from 'fs';

export const tfc = (req, res) => {
  // Pass the file to a Python script
  const filepath = req.query.param1;
  console.log(filepath)
  console.log()
  const pythonProcess =  spawn('python', ['./scripts/tfc.py', filepath]);
  let scriptOutput = '';
 
  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    scriptOutput += data;
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      //deleting original file from data directory
      console.log(`Python script exited with code ${code}`);
    //  fs.unlink(`${req.file.path}`, (err) => {
      //  if (err) throw err;
        //console.log(`${req.file.path} was deleted`);
     // });
      // send the file as output using pipe
      res.send(scriptOutput);
  
  } else {
      res.status(500).json({ error: 'Script failed with code: ' + code });
  }   
  });

};
