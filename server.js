import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import UserRoute from "./routes/UserAuth.js"
import Datacleaningroute from "./routes/Datacleaningroutes.js"
import Downloadroute from './routes/Downloadroute.js'
import Countusersroute from './routes/Countusersroute.js'
import Grammarchecker from './routes/Grammarroute.js'
import  Analyze  from "./routes/Analysisroute.js"

import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser"
import path from 'path'
// import { fileURLToPath } from 'url';

const app=express()

dotenv.config()
const connect=async ()=>{
    try {
      await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
      } catch (error) {
        console.log(error)
      }
    };
    mongoose.connection.on("disconnected",()=>{
        console.log("mongoDb disconnected!")
    })
    
    if(process.env.NODE_ENV==='production'){
      app.use(express.static('client/build'))
    }

    app.use(cors())
    app.use(cookieParser())
    app.use(express.json())

    const _dirname= path.dirname("")
    const buildPath =path.join(_dirname,"/server/client/build");   
    app.use(express.static(buildPath))
    app.get("/*",function(req,res){
       res.sendFile(
        path.join(_dirname,"/server/client/build.html"),
        function(err){
          if(err){
            res.status(500).send(err);
          }
        }
       );
        })
       
    
   
    //middle ware
          //for admin
    app.use("/server/User",UserRoute)


    app.use("/server/countusers",Countusersroute)
    app.use("/server/Datacleaning",Datacleaningroute)
    app.use("/server/textanalysis",Analyze)
    app.use("/server/download",Downloadroute)
          //for grammar tool
    app.use("/server/grammar",Grammarchecker)

    //incase of routing error or authentication problem 
    app.use((err, req, res, next) => {
        const errorStatus = err.status || 500;
        const errorMessage = err.message || "Something went wrong!";
        return res.status(errorStatus).json({
          success: false,
          status: errorStatus,
          message: errorMessage,
          stack: err.stack,
        });
      });
    //   app.use(express.static(path.join(__dirname, "/client/build")));
    //   app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
    //   });

    //connecting and listening, we are not giving port in env so 8081 will be used
    const PORT = process.env.PORT || 8081;
    app.listen(PORT ,()=>{
        connect()
        console.log("Server running. listening on ",PORT)
    })