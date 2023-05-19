import React from 'react'
import { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../../context/AuthContext"

export default function Navbar() {

  const {user} =useContext(AuthContext);
  const logout=()=>{
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    
      <div className="container-fluid p-0 ">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="index.html"> TEXTOMATIC</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-right text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item active">
                <Link className="nav-link" to="/"
                  >HOME
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tools">TOOLS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#purchaseplan">PLANS</Link>
              </li>
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <Link to="#testimonials" className="nav-link">TESTIMONIALS</Link>
                </div>
              </li>
              
             { //conditional redenring here
               !user ? <li className="nav-item dropdown">
                <span className="dropdown">
                  <Link to="/userLogin" className="nav-link btn btn-light px-3 primary-btn">
                    LOGIN
                 </Link>
                </span>
              </li>:
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link to="userSignup" className="nav-link">  <button className="btn btn-light px-3 primary-btn">
                  {user.details.username}
                </button></Link>
              </div>
            </li>
           }
            {  !user ?  <li className="nav-item dropdown text-center">
                <span className="dropdown ">
                  <Link to="userSignup" className="nav-link btn btn-light px-3  primary-btn">  
                    SIGNUP
                  </Link>
                </span>
              </li> :  
              
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link to="userSignup" className="nav-link">  <button  onClick={logout} className="btn btn-light px-3 primary-btn" > Logout</button>
                 </Link>
              </div>
            </li>
          
            }
            </ul>
          </div>
        </nav>
      </div>
      
   
  )
}
