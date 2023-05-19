import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Usersignup() {

  const toastId = React.useRef(null);
  const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
    email:undefined,
  });
  const{loading,error,dispatch}=useContext(AuthContext)
  let name,value;

  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setCredentials({...credentials,[name]:value});
}
const navigate= useNavigate() // to navigate to login page after signing up

const handleClick= async (e)=>{
  e.preventDefault();
  if(!credentials.username || !credentials.email || !credentials.password ){
 
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.warning("Please Fill the required fields", {position: toast.POSITION.TOP_CENTER});
    }
    
  }
  else{
    // const {coverphotox,namex,locationx,datex,chapterx,fundsx,photosx,projectManagerx,descriptionx}=data;
   try {
   await axiosInstance.post("/User/register",credentials);
    if(!toast.isActive(toastId.current)) {
      toastId.current = toast.success("Resgistration Successful", {position: toast.POSITION.TOP_CENTER});
      navigate('/userLogin')
    }
   } catch (error) {
    console.log(error)
   }  
  }
}


  return (
    <> 
    <br/><br/>
    <ToastContainer/>
    <div class="ccontainerr mt-5 pt-5">
    <form action="#">
      <div class="title">REGISTER YOURSELF WITH TEXTOMATIC</div>
      <div class="input-box underline">
        <input type="text" placeholder="Enter Your Username"
        name="username"
      value={credentials.username}
      onChange={handleChange}
       required />
        <div class="underline"></div>
      </div>
      <div class="input-box underline">
        <input type="email" placeholder="Enter Your Email"
        name="email"
      value={credentials.email}
      onChange={handleChange}
        required />
        <div class="underline"></div>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Enter Your Password"
        name="password"
      value={credentials.password}
      onChange={handleChange}
       required />
        <div class="underline"></div>
      </div>
      <div className="input-box button">
    <input type="submit" value="Sign Up" disabled={loading} onClick={handleClick}  />
    <br></br>
    {error && <span className='text-danger'>{error.message}</span>}
    </div>
      
    </form>
      <div class="option">or Connect With Social Media</div>
      <div class="twitter">
        <Link to="#"><i class="fab fa-twitter"></i>Sign in With Twitter</Link>
      </div>
      <div class="facebook">
        <Link to="#"><i class="fab fa-facebook-f"></i>Sign in With Facebook</Link>
      </div>
  </div>
  </>
  )
}
