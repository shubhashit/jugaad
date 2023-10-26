import React from 'react'
import Navbar from './Navbar'
import AddRequest from './AddRequest'
import MainFeed from './MainFeed'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className='h-[100dvh] w-[100vw] bg-[#e5e7eb] '>
      <Navbar/>
      <AddRequest/>
      <MainFeed/>
      <Footer/>
    </div>
  )
}
