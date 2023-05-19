import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import GrammarChecker from '../components/tools/GrammarChecker'

export default function Grammarpage(){
  return (
    <div>
       <header className='navzero'>
        <Navbar/>
        </header>
        <br/>
        <GrammarChecker/>
        <Footer/>
    </div>
  )
}
