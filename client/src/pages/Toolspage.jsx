import React from 'react'
import Footer from '../components/footer/Footer'
import Toolsheader from '../components/headers/Toolsheader'
import Navbar from '../components/navbar/Navbar'
import Toolsoverview from '../components/tools/Toolsoverview'


export default function Toolspage() {
  return (
    <>
      <header className='navzero'>
        <Navbar/>
        </header>
      
        <Toolsheader/>
        <Toolsoverview/>
        <Footer/>
    </>
  )
}
