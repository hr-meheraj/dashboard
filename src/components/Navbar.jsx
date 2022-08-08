import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div class="navbar lg:w-[1135px] mx-auto max-w-full w-[95%] lg:px-[40px] px-4 ">
            <div class="flex-1">
                <Link to='/' class="text-[28px] font-bold text-[#0D0A19]">Dashboard</Link>
            </div>
            <div class="flex gap-5 items-center">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span class="badge badge-xs border-none p-0 h-[7px] w-[7px]  bg-[#FBB0BF] indicator-item"></span>
                </div>

                <div>
                    <div class="w-10 rounded-full">
                        <img src="https://i.ibb.co/LPLcq5j/logo-dashboard-2.png" className='h-[40px] w-[40px]' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar