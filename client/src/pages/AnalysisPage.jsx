import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Analyzertool from '../components/tools/Analyzertool'


export default function AnalysisPage() {
  return (
    <div>
       <header className='navzero'>
        <Navbar/>
        </header>
        <br/>
        <Analyzertool/>
        <Footer/>
    </div>
  )
}