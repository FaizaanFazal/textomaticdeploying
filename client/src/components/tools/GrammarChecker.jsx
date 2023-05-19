import React, { useState ,useEffect} from "react";
import axios from 'axios';
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GrammarChecker = () => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [filepath, setFilepath] = useState("");
  const [output, setOutput] = useState("");
  const [outputfile, setOutputfile] = useState("");// to store resultant path

  const [localpath,setLocalpath]=useState(outputfile)// to render the above path list by using useEffect
  let p='';

  const handleSubmit = () => {
    // Perform the grammar check on the input text and file
    setOutput(performGrammarCheck(input, file));
  };
//toast appearance
    // toast.success("", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
   const Apply = async (e) => {
    toast('Processing Please Wait...');
    let para="";
    let para2="";
      if(file){
        para="file";
        para2=filepath.replace(/\\/g, '/');
      }
      else{
        para="text"
        para2=input;
      }
          console.log("Applying on ",filepath)
          try {
            axiosInstance.post("/grammar?param1="+para2 +"&param2="+para).then(
              res=>{ p = res.data.toString();
              console.log("aya"+res.data)
             
              if(para=="text"){
                setOutput(p)
              }
              else{
                p=p.replace(/(\r\n|\n|\r)/gm, "");
                setOutputfile(p);
              }
             
          })         
          } catch (ex) {
            console.log(ex);
          }
              
      };

  const saveFile = async(e) => {
    console.log(e)
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      
   };

  
  const handleDownload = async (value) => {
    let downloadpath=value;
    axios({
      url: 'http://localhost:8081/server/download',
      method: 'GET',
      params: { downloadpath },
      responseType: 'blob',
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      console.log("response data is: ",response.data)
      console.log("response is: ",response)
      let name= "Corrected.txt"
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
    });

  };

  const performGrammarCheck = (text, file) => {
    return text;
  };
const UploadNow= async()=>{
  
  console.log("uploading")
  const formData2 = new FormData();
    formData2.append("file", file);
    formData2.append("fileName", fileName);
    try {
    const res=  await axiosInstance.post("/Datacleaning/upload",formData2)
        p = res.data.toString(); // file url
        p=p.replace(/(\r\n|\n|\r)/gm, "");
        p=p.replace(/\\/g, '/');
        console.log("response was :",p);
        toast('File uploaded succesfully.');
        setFilepath(p)
      
    } catch (ex) {
      console.log(ex);
      toast('Something went Wrong!!');
    }
    
}
  useEffect(()=>{
 
    setLocalpath(outputfile)

},[outputfile,output])

  return (
  <div className='container text-black mb-5 text-center'> 
    <br/>
    <ToastContainer />
  
      <h2 className='text-center mt-4 mb-5'>Grammar Checker</h2>
    <div className="row">
      <div className="col-md-6">
  
            <div class="form-outline">
              <textarea class="form-control" id="textarea" rows="7"
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write Text"
              ></textarea>
           
            </div>
     
      </div>
      <div className="col-md-6 hide">
          
         { output ? <div class="form-outline output position-relative">
              <textarea disabled class="form-control" id="textarea" rows="7"
              value={output}
              onChange={(e) => setInput(e.target.value)}
              text=""
              ></textarea>
              <button className="pos-rt btn rounded m-0 p-2 ">C</button>
           
            </div>:
            <div class="form-outline output position-relative">
              <textarea disabled class="form-control" id="textarea" rows="7"
              value="output here"
              onChange={(e) => setInput(e.target.value)}
              text=""
              ></textarea>
              <button className="pos-rt btn rounded m-0 p-2 ">C</button>
           
            </div>}
          </div>
      
    </div>
    
    <br/>
     <h5 className="text-center m-3">Or</h5>

      <div class="custom-file">
        <input type="file"  id="customFile" onChange={(e)=>saveFile(e)}/>
        <button disabled={!file} className="btn btn-outline-primary rounded-pill px-5" onClick={UploadNow}>Upload</button>   
   
        {/* <label class="custom-file-label" for="customFile">Choose file in txt format</label> */}
      </div>
      <button disabled={!filepath && !input} onClick={Apply} className="btn rounded-pill px-5 bg-gradient-purple">Apply</button>

        {/* download */}
      <div className='row m-2'>
        { localpath ? <div className="col-sm-12 py-5 text-center">
            <h3 className='text-center'>Download Suggested correction file </h3>
            <button className='btn btn-success rounded-pill px-5' 
            onClick={(e)=>handleDownload(e.target.value)} 
            value={localpath}
            > Result</button>
            </div>:<div></div>
        }
      </div>
      <br/>
     
    
  </div>
  );
};

export default GrammarChecker;