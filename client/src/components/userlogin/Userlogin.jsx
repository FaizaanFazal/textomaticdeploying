import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import { axiosInstance } from '../../config';


export default function Userlogin() {
  const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
  });
  const{loading,error,dispatch}=useContext(AuthContext)
  let name,value;

  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setCredentials({...credentials,[name]:value});
}
const navigate= useNavigate()

const handleClick=async (e)=>{
  e.preventDefault()
  dispatch({type:"LOGIN_START"});
  
    try {
      const res= await axiosInstance.post("/User/login",credentials);
      console.log(res.data.isAdmin);

      if(res.data.isAdmin ==true){
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
      navigate('/adminDashboard')
      }
      else if(res.data.isAdmin ==false || res.data.isAdmin===undefined){
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        navigate('/userDashboard')
        }
      else{
        dispatch({type:"LOGIN_FAILURE",payload:{message:"Wrong Credentials"}});
      }
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE",payload:error.response.data});
    }
  
}

  return (
    <>
    <br/><br/>
    <div class="ccontainerr mt-5 pt-5">
    <form action="#">
      <div class="title">SIGN IN TO TEXTOMATIC</div>
      <div class="input-box underline">
        <input type="text" placeholder="Enter Your Username"
        value={credentials.username}
        name="username"
      onChange={handleChange}
       required />
        <div class="underline"></div>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Enter Your Password" 
        value={credentials.password}
        name="password"
        onChange={handleChange} required />
        <div class="underline"></div>
      </div>

      <div className='input-box button'>
      <input type="submit" value="Login" disabled={loading} onClick={handleClick}  />
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
