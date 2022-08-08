import React from 'react'
import MainBanner from '../../components/MainBanner'
import Navbar from '../../components/Navbar'
import Performance from '../../components/Performance'
import PerformanceSecond from '../../components/PerformanceSecond'

function MainPage() {
  return (
    <div>
        <Navbar/> 
        <MainBanner/>
        <Performance/>
        <PerformanceSecond/>
    </div>
  )
}

export default MainPage