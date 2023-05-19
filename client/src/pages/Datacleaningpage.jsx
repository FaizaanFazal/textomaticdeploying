import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Datacleaning } from '../components/tools/Datacleaning'


export default function Datacleaningpage() {
  return (
    <div>
       <header className='navzero'>
        <Navbar/>
        </header>
        <br/>
        <Datacleaning/>
        <Footer/>
    </div>
  )
}
