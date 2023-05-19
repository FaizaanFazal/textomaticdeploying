import React, { useContext, useEffect, useState } from 'react'
import {VictoryChart,VictoryTheme,VictoryGroup,  VictoryBar,VictoryAxis,  VictoryPie } from "victory";
import axios from 'axios';
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Analyzertool() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [filepath, setFilepath] = useState("");
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [value, setValue] = useState(0.5); // The value from -1 to 1
  const [isLoading, setIsLoading] = useState(false);


  // Calculate the width and color of the filled part of the bar based on the value
  const updatevalue = () => {
    // Example: Update the value with a random number from -1 to 1
    var newValue = Number(result1) * 50 +50;
    setValue(newValue);
  };
  const filledWidth = `${result1 * 50 +50}%`; // Width in percentage
  let filledColor;
  if (value > 50) {
    filledColor = 'green';
  } else if (value < 50) {
    filledColor = 'red';
  } else {
    filledColor = 'yellow';
  }

  let p='';

  const saveFile = async(e) => {
    setFile(e.target.files[0]);
     setFileName(e.target.files[0].name);
   };

  const UploadNow=async()=>{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res= await axiosInstance.post("/Datacleaning/upload",formData)
      p = res.data.toString();
      p=p.replace(/(\r\n|\n|\r)/gm, "");
      p=p.replace(/\\/g, '/');
      console.log("response was :",p);
      toast('File uploaded succesfully');
      setFilepath(p)

    } catch (ex) {
      console.log(ex);
    }
  }
  const analyze=async(e)=>{
    setResult1(null);
    setIsLoading(true);
    try {
      axiosInstance.post("/textanalysis/analyze?param1="+ filepath.replace(/\\/g, '/'))
      .then(response => {
        const [result1, result2] = response.data.split('\r\n');
        // Update state variables with the received results
        console.log(result1)
        setResult1(Number(result1).toFixed(4));
        setResult2(result2.trim());
        updatevalue();
        setIsLoading(false);
      })   
    } catch (ex) {
      console.log(ex);
      setFilepath(ex) 
      setIsLoading(false);
    }
  
  }
  


  return (
    
    <div className='container text-black mb-5'>
    {isLoading && (
        <div  className='loadingback'>
          {/* Render your loading spinner or message here */}
          <div className="Loadingspinner"></div>
        </div>
      )}
    <br/>
    <br/>
    <br/>
    <ToastContainer />
           <h3 className='text-center mt-4 mb-5'>Text Analysis</h3>
          <div className='bordergraylight text-center'>
              <div>
              <input type="file" onChange={saveFile} />
              <button disabled={!file} className="btn btn-outline-primary rounded-pill px-5" onClick={UploadNow}>Upload</button>   
   
            
    {/* <div className='row m-2'>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Sentiment Analysis</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Keyword Frequency</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox">Topic Classification</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Urgency detection</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Intent Categorization</label>
               
            </div>
      </div>
    </div> */}
    <br/>
    <button onClick={analyze}>Analyze </button>
 </div>
 <br/>
 
     {result1 && (
        <div >
        <div className='w-50 mx-auto'>
        <h2>Sentiment</h2>
        <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: 'lightgray',
          position: 'relative',
          borderRadius:'25px',
        }}
      >
        <div
          style={{
            width: filledWidth,
            height: '100%',
            backgroundColor: filledColor,
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bolder',
            borderRadius:'25px',
          }}
        >{result1}</div>
      
      </div>
      </div>
        </div>
      )}

      {result2 && (
        <div>
          <h2>Category</h2>
          <p>{result2}</p>
        </div>
        
      )}
      

               {/* data visualization  here */}
              {/* <div className='row text-center'>
               
                 
                  <div className='col-sm-6 mx-auto'>
      <VictoryChart
        horizontal
        height={500}
        width={700}
        theme={VictoryTheme.material}
        domainPadding={50}
      >
        <VictoryAxis
          style={{
            axis: { stroke: "grey" },
            axisLabel: { fontSize: 20, padding: 40 },
            grid: { stroke: "none" },
            ticks: { stroke: "none", size: 0 },
            tickLabels: { fontSize: 15, padding: 10 }
          }}
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={[
            "0-9",
            "10-19",
            "20-29",
            "30-39",
            "40-49",
            "50-69",
            "80+"
          ]}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[0, 17.5, 35]}
          tickFormat={["0%", "17.5%", "35%"]}
        />
        <VictoryGroup>
          <VictoryBar data={data} x="x" y="y" />
        </VictoryGroup>
      </VictoryChart>
    </div>
    <div className='col-sm-6 mx-auto'>
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ y: 100 }}
      style={{
        data: { width: 40 },
        grid: { stroke: "red" }
      }}
      height="500"
      width="700"
    >
      <VictoryGroup
        theme={VictoryTheme.material}
        offset={60}
        tickValues={[2, 4, 6, 8]}
        style={{
          data: { width: 40 }
        }}
        colorScale={["green", "orange"]}
      >
        <VictoryBar />
        <VictoryBar />
      </VictoryGroup>
    </VictoryChart>
    </div>
    <div className='col-sm-6 mx-auto'>
    <VictoryPie
    animate={{
  duration: 2000
}}
    colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>
    
    </div>
              </div> */}       
          </div>
          <br></br>
    </div>
  )
}
