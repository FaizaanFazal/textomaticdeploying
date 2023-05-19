import React from 'react'
import './styles/style.css'
import './styles/mobstyles.css'
import './styles/spinner.css'
import { BrowserRouter,
  Routes,
  Route,
  Navigate, } from "react-router-dom"

import Home from './pages/Home'
import AdminDashbaord from './pages/AdminDashbaord'
import Toolspage from './pages/Toolspage'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import AnalysisPage from './pages/AnalysisPage'
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import  Datacleaningpage  from './pages/Datacleaningpage'
import GrammarChecker from './pages/Grammarpage'
import Sentimentanalysis from './components/tools/Sentimentanalysis'
import UploadCorpus from './pages/UploadCorpus'
import FileManagement from './pages/FileManagement'
import ProfileUpdate from './pages/ProfileUpdate'
import Dashboard from './pages/Dashboard'

export default function App() {

  const ProtectedRoute=({children})=>{
    const {user} =useContext(AuthContext);
    if(!user){
      return <Navigate to="/userLogin"/>;
    }
    return children
  }
  const AdminProtectedRoute=({children})=>{
    const {user} =useContext(AuthContext);
    if(!user.isAdmin){
      return <Navigate to="/userLogin"/>;
    }
    return children
  }

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/adminDashboard' element={<AdminDashbaord/>} />
          <Route  path='/tools' element={<Toolspage/>} />
          <Route  path='/userLogin' element={<UserLogin/>} />
          <Route  path='/userSignup' element={<UserSignup/>} />
          <Route  path='/datacleaning' element={<Datacleaningpage/>} /> 
          <Route  path='/analysistool' element={<AnalysisPage/>} />  
          <Route  path='/grammar' element={<GrammarChecker/>} /> 
          <Route  path='/sentiment' element={<Sentimentanalysis/>} /> 
          <Route  path='/uploadcorpus' element={<UploadCorpus/>} /> 
          <Route  path='/filemanagement' element={<FileManagement/>} /> 
          <Route  path='/profileupdate' element={<ProfileUpdate/>} /> 
          <Route path='/userDashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />  

          <Route path="*" element={<Home/>}/>
           
        </Routes>
      
      </BrowserRouter>
    </>
  )
}
