import {spawn} from 'child_process';

export const grammarcheck = (req, res) => {
  // Pass the file to a Python script
  const filepath = req.query.param1;
  const typ=req.query.param2;
  console.log(filepath)
  console.log(typ)
  const pythonProcess =  spawn('python', ['./scripts/GrammarChecker.py', filepath,typ]);
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
      console.log(`Python script exited with code ${code}`);
      res.send(scriptOutput);
  
  } else {
      res.status(500).json({ error: 'Script failed with code: ' + code });
  }   
  });

};
