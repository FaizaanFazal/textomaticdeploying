import React from 'react'
import { Link } from "react-router-dom"

export default function UserDashboard() {
  return (
    <section class=" container-fluid text-center mt-5 mb-5 pt-5 pb-5">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <h1>USER DASHBOARD</h1>
        
      </div>
    </div>
    
    <div>
        <br/>
        <Link to="manageProfile.html">   <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
            MANAGE PROFILE
      </button></Link>
     
      <Link to="uploadFiles.html"><button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
        UPLOAD FILES
      </button></Link>
      
      <br/><br/>
      <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
        UPDATE FILES
      </button>

      <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
        DELETE FILES
      </button>
      </div>
<br/><br/>
<div>
      <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
        UPLOAD CORPUS
      </button></div>
       
  </section>
  )
}
