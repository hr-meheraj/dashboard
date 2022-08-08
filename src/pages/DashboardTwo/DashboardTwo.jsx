import React from 'react'
import MainBanner from '../../components/MainBanner'
import Navbar from '../../components/Navbar'
import Footer from '../../components/shared/Footer'
import { ResponsiveContainer, AreaChart, Legend, Area, Tooltip, XAxis} from 'recharts'

function DashboardTwo() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className='md:col-span-7'>
                    <Banner />
                    <PerformanceReport />
                </div>
                <div className='md:cols-span-5'>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default DashboardTwo



const Banner = () => {
    return (
        <div className='mx-auto w-[95%] p-6 rounded-md main-banner  '>
            <h2 className='text-[24px] font-bold leading-[32px] text-[#ffffff] mb-3'>We updated our cancelation <br />
                policy to ensure the user experience </h2>

            <p className='mb-3 font-[14px] text-white leading-[21px]'>Learn more details on our latest blog post</p>
            <button className='py-2 hover:bg-black transition-all hover:shadow-md my-2 text-white bg-[#0d0a19] px-4 text-[14px] rounded-[10px]'>Explore updates</button>
        </div>
    )
}


const PerformanceReport = () => {
    return (
        <div className='mt-[30px] mb-[30px]'>
            {/* Title */}
            <div className="flex justify-between my-4 items-center">
                <h2 className='font-bold text-[16px] text-[#0D0A19] ml-[10px]'>Peformance report</h2>

                <div className='text-[#9A9EA7] flex gap-2 text-[12px] font-bold '>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.51172 10.0117V11.4883H3.23828V10.0117H8.51172ZM12.2383 13.7383V5.51172H1.76172V13.7383H12.2383ZM12.2383 1.75C12.6367 1.75 12.9883 1.90234 13.293 2.20703C13.5977 2.51172 13.75 2.86328 13.75 3.26172V13.7383C13.75 14.1367 13.5977 14.4883 13.293 14.793C12.9883 15.0977 12.6367 15.25 12.2383 15.25H1.76172C1.33984 15.25 0.976562 15.0977 0.671875 14.793C0.390625 14.4883 0.25 14.1367 0.25 13.7383V3.26172C0.25 2.86328 0.390625 2.51172 0.671875 2.20703C0.976562 1.90234 1.33984 1.75 1.76172 1.75H2.5V0.238281H4.01172V1.75H9.98828V0.238281H11.5V1.75H12.2383ZM10.7617 6.98828V8.5H3.23828V6.98828H10.7617Z" fill="#9A9EA7" />
                    </svg>
                    <span>Last 6 Months</span>
                </div>
            </div>
            <PerformanceReportChart />
        </div>
    )
}


const PerformanceReportChart = () => {
    const data = [
        { 
            month : "January",
            views : 16939,
            bids : 8900,
            order: 1210
        },
        { 
            month : "February",
            views : 18900,
            bids : 8000,
            order: 1310
        },
        { 
            month : "March",
            views : 12990,
            bids : 5269,
            order: 489
        },
        { 
            month : "April",
            views : 29000,
            bids : 16090,
            order: 2934
        },
        { 
            month : "May",
            views : 22000,
            bids : 19000,
            order: 4020
        },
        { 
            month : "June",
            views : 9500,
            bids : 5300,
            order: 380
        },
        { 
            month : "July",
            views : 12599,
            bids : 7000,
            order: 1500
        }
    ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart
                width="100%"
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 20,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="month" tickMargin={17} tickSize={0} tick={{ strokeWidth: 2, fill: "#9A9EA7", fontWeight: "bold", fontSize:'12px'}} />
                <Tooltip separator=" - " itemStyle={{ fontWeight: 'bold', color: '#0D0A19' }} wrapperStyle={{ color: "#9A9EA7" }} />
                <Legend iconType='circle' verticalAlign='top' align='left' />
                <Area dataKey="views" stroke="#A2F3D9" fill="#dafaf0"
                    strokeWidth={3}
                    viewBox={{ x: 100 }}
                    animationEasing="ease-in-out"
                    activeDot={{ stroke: '#fff', fill: '#A2F3D9', strokeWidth: 3, r: 7 }}
                />

                <Area dataKey="bids" stroke="#7963F0" fill="#e6e6fb"
                    strokeWidth={3}
                    viewBox={{ x: 100 }}
                    animationEasing="ease-in-out"
                    activeDot={{ stroke: '#fff', fill: '#7963F0', strokeWidth: 3, r: 7 }}
                />

                <Area dataKey="order" stroke="#EF8354" fill="#f8e3df"
                    strokeWidth={3}
                    viewBox={{ x: 100 }}
                    animationEasing="ease-in-out"
                    activeDot={{ stroke: '#fff', fill: '#EF8354', strokeWidth: 3, r: 7 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}