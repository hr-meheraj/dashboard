import React from 'react'
import MainBanner from '../../components/MainBanner'
import Navbar from '../../components/Navbar'
import Performance from '../../components/Performance'

function MainPage() {
  return (
    <div>
        <Navbar/> 
        <MainBanner/>
        <Performance/>
    </div>
  )
}

export default MainPage