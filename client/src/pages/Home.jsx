import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Features  from '../components/hero/Features'
import Dowloadnow  from '../components/hero/Downloadnow'
import Testimonials from '../components/hero/Testimonials'
import Footer from '../components/footer/Footer'
import Homeheader from '../components/headers/Homeheader'

export default function Home() {
  return (
    <>    
    <header className='navstick '>
        <Navbar/>
        </header>
        <Homeheader/>
        <Features/>
        <Dowloadnow/>
        <Testimonials/>
        <Footer/>
    
    </>
  )
}
