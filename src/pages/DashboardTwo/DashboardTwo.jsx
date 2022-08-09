import React from 'react'
import MainBanner from '../../components/MainBanner'
import Navbar from '../../components/Navbar'
import Footer from '../../components/shared/Footer'
import { ResponsiveContainer, AreaChart, Legend, Area, Tooltip, XAxis } from 'recharts'

function DashboardTwo() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className='md:col-span-7'>
                    <Banner />
                    <PerformanceReport />
                </div>
                <div className='md:col-span-5'>
                    <Profile />
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
            <PerformanceReportTitle />
            <PerformanceReportChart />
        </div>
    )
}



const PerformanceReportTitle = () => {
    return (
        <>
            {/* Title */}
            <div className="flex justify-between my-4 items-center">
                <h2 className='font-bold text-[16px] text-[#0D0A19] ml-[10px]'>Peformance report</h2>

                <div className='border-2 rounded-md p-2 text-[#9A9EA7] flex gap-2 text-[12px] font-bold '>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.51172 10.0117V11.4883H3.23828V10.0117H8.51172ZM12.2383 13.7383V5.51172H1.76172V13.7383H12.2383ZM12.2383 1.75C12.6367 1.75 12.9883 1.90234 13.293 2.20703C13.5977 2.51172 13.75 2.86328 13.75 3.26172V13.7383C13.75 14.1367 13.5977 14.4883 13.293 14.793C12.9883 15.0977 12.6367 15.25 12.2383 15.25H1.76172C1.33984 15.25 0.976562 15.0977 0.671875 14.793C0.390625 14.4883 0.25 14.1367 0.25 13.7383V3.26172C0.25 2.86328 0.390625 2.51172 0.671875 2.20703C0.976562 1.90234 1.33984 1.75 1.76172 1.75H2.5V0.238281H4.01172V1.75H9.98828V0.238281H11.5V1.75H12.2383ZM10.7617 6.98828V8.5H3.23828V6.98828H10.7617Z" fill="#9A9EA7" />
                    </svg>
                    <span>Last 6 Months</span>
                </div>
            </div>
        </>
    )
}


const PerformanceReportChart = () => {
    const data = [
        {
            month: "January",
            views: 16939,
            bids: 8900,
            order: 1210
        },
        {
            month: "February",
            views: 18900,
            bids: 8000,
            order: 1310
        },
        {
            month: "March",
            views: 12990,
            bids: 5269,
            order: 489
        },
        {
            month: "April",
            views: 29000,
            bids: 16090,
            order: 2934
        },
        {
            month: "May",
            views: 22000,
            bids: 19000,
            order: 4020
        },
        {
            month: "June",
            views: 9500,
            bids: 5300,
            order: 380
        },
        {
            month: "July",
            views: 12599,
            bids: 7000,
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
                <XAxis dataKey="month" tickMargin={17} tickSize={0} tick={{ strokeWidth: 2, fill: "#9A9EA7", fontWeight: "bold", fontSize: '12px' }} />
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


const Profile = () => {
    return (
        <div className='pl-2 md:pl-5 border-l-2 '>
            <img src="https://i.ibb.co/5crdhq8/image-5.png" className='w-[114px] h-[114px] mt-[23px] mb-3 ' />
            <h4 className='text-[#0D0A19] text-[16px] font-light mb-1'>Hello,</h4>
            <h1 className='text-[#0D0A19] font-[22px] font-bold mb-1'>Mathew Lina </h1>
            <p className='text-[14px] font-normal text-[#919ea7] '>Check these stats below in <br />case you have missed something</p>

            <div className="mt-4 p-4 rounded-md shadow-md grid grid-cols-1 gap-5">

                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='common'>Turnover</h2>
                        <p className='common-gray-light'>Amount of funds</p>
                    </div>
                    <div>
                        <h2 className='common'>$210.345</h2>
                        <span className=' block w-full  rounded-full badge badge-xs h-1 border-none bg-[#a2f3d9]'></span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='common'>Income</h2>
                        <p className='common-gray-light'>Amount minus fees</p>
                    </div>
                    <div>
                        <h2 className='common'>$174.840</h2>
                        <span className=' block w-full  rounded-full badge badge-xs h-1 border-none bg-[#EF8354]'></span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='common'>Bids</h2>
                        <p className='common-gray-light'>Amount of auction bids</p>
                    </div>
                    <div>
                        <h2 className='common'>256</h2>
                        <span className=' block w-full  rounded-full badge badge-xs h-1 border-none bg-[#FBB0BF]'></span>
                    </div>
                </div>

            </div>

            <div className='mt-[30px]'>
                <h3 className='common-gray-light'>Upcoming auctions</h3>
                <h2 className='common text-[16px]'>Thurday, 14 January 2021</h2>
                <br />

                <div className="flex justify-between p-4 items-center">
                    <div className='flex gap-2 items-center'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#EEEEEE" />
                        </svg>
                        <span>
                            Bakersfield
                        </span>
                    </div>
                    <div className='flex gap-2 common items-center'>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.76172 4.76172H12.2383L11.1133 1.38672H2.88672L1.76172 4.76172ZM10.3047 8.17188C10.5391 8.38281 10.8086 8.48828 11.1133 8.48828C11.418 8.48828 11.6758 8.38281 11.8867 8.17188C12.1211 7.9375 12.2383 7.66797 12.2383 7.36328C12.2383 7.05859 12.1211 6.80078 11.8867 6.58984C11.6758 6.35547 11.418 6.23828 11.1133 6.23828C10.8086 6.23828 10.5391 6.35547 10.3047 6.58984C10.0938 6.80078 9.98828 7.05859 9.98828 7.36328C9.98828 7.66797 10.0938 7.9375 10.3047 8.17188ZM2.07812 8.17188C2.3125 8.38281 2.58203 8.48828 2.88672 8.48828C3.19141 8.48828 3.44922 8.38281 3.66016 8.17188C3.89453 7.9375 4.01172 7.66797 4.01172 7.36328C4.01172 7.05859 3.89453 6.80078 3.66016 6.58984C3.44922 6.35547 3.19141 6.23828 2.88672 6.23828C2.58203 6.23828 2.3125 6.35547 2.07812 6.58984C1.86719 6.80078 1.76172 7.05859 1.76172 7.36328C1.76172 7.66797 1.86719 7.9375 2.07812 8.17188ZM12.2031 1L13.75 5.5V11.5117C13.75 11.7227 13.6797 11.8984 13.5391 12.0391C13.3984 12.1797 13.2227 12.25 13.0117 12.25H12.2383C12.0273 12.25 11.8516 12.1797 11.7109 12.0391C11.5703 11.8984 11.5 11.7227 11.5 11.5117V10.7383H2.5V11.5117C2.5 11.7227 2.42969 11.8984 2.28906 12.0391C2.14844 12.1797 1.97266 12.25 1.76172 12.25H0.988281C0.777344 12.25 0.601562 12.1797 0.460938 12.0391C0.320312 11.8984 0.25 11.7227 0.25 11.5117V5.5L1.79688 1C1.9375 0.507812 2.30078 0.261719 2.88672 0.261719H11.1133C11.6992 0.261719 12.0625 0.507812 12.2031 1Z" fill="#9A9EA7" />
                        </svg>
                        <span className='text-[14px] font-light text-gray-500'>
                            1.356 Vehicles
                        </span>
                    </div>
                </div>
                <hr className='px-4 mr-2' />

                <div className="flex justify-between p-4 items-center">
                    <div className='flex gap-2 items-center'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#EEEEEE" />
                        </svg>
                        <span>
                            Long Beach
                        </span>
                    </div>
                    <div className='flex gap-2 common items-center'>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.76172 4.76172H12.2383L11.1133 1.38672H2.88672L1.76172 4.76172ZM10.3047 8.17188C10.5391 8.38281 10.8086 8.48828 11.1133 8.48828C11.418 8.48828 11.6758 8.38281 11.8867 8.17188C12.1211 7.9375 12.2383 7.66797 12.2383 7.36328C12.2383 7.05859 12.1211 6.80078 11.8867 6.58984C11.6758 6.35547 11.418 6.23828 11.1133 6.23828C10.8086 6.23828 10.5391 6.35547 10.3047 6.58984C10.0938 6.80078 9.98828 7.05859 9.98828 7.36328C9.98828 7.66797 10.0938 7.9375 10.3047 8.17188ZM2.07812 8.17188C2.3125 8.38281 2.58203 8.48828 2.88672 8.48828C3.19141 8.48828 3.44922 8.38281 3.66016 8.17188C3.89453 7.9375 4.01172 7.66797 4.01172 7.36328C4.01172 7.05859 3.89453 6.80078 3.66016 6.58984C3.44922 6.35547 3.19141 6.23828 2.88672 6.23828C2.58203 6.23828 2.3125 6.35547 2.07812 6.58984C1.86719 6.80078 1.76172 7.05859 1.76172 7.36328C1.76172 7.66797 1.86719 7.9375 2.07812 8.17188ZM12.2031 1L13.75 5.5V11.5117C13.75 11.7227 13.6797 11.8984 13.5391 12.0391C13.3984 12.1797 13.2227 12.25 13.0117 12.25H12.2383C12.0273 12.25 11.8516 12.1797 11.7109 12.0391C11.5703 11.8984 11.5 11.7227 11.5 11.5117V10.7383H2.5V11.5117C2.5 11.7227 2.42969 11.8984 2.28906 12.0391C2.14844 12.1797 1.97266 12.25 1.76172 12.25H0.988281C0.777344 12.25 0.601562 12.1797 0.460938 12.0391C0.320312 11.8984 0.25 11.7227 0.25 11.5117V5.5L1.79688 1C1.9375 0.507812 2.30078 0.261719 2.88672 0.261719H11.1133C11.6992 0.261719 12.0625 0.507812 12.2031 1Z" fill="#9A9EA7" />
                        </svg>
                        <span className='text-[14px] font-light text-gray-500'>
                            2.050 Vehicles
                        </span>
                    </div>
                </div>
                <hr className='px-4 mr-2' />

                <div className="flex justify-between p-4 items-center">
                    <div className='flex gap-2 items-center'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#EEEEEE" />
                        </svg>
                        <span>
                            Redding
                        </span>
                    </div>
                    <div className='flex gap-2 common items-center'>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.76172 4.76172H12.2383L11.1133 1.38672H2.88672L1.76172 4.76172ZM10.3047 8.17188C10.5391 8.38281 10.8086 8.48828 11.1133 8.48828C11.418 8.48828 11.6758 8.38281 11.8867 8.17188C12.1211 7.9375 12.2383 7.66797 12.2383 7.36328C12.2383 7.05859 12.1211 6.80078 11.8867 6.58984C11.6758 6.35547 11.418 6.23828 11.1133 6.23828C10.8086 6.23828 10.5391 6.35547 10.3047 6.58984C10.0938 6.80078 9.98828 7.05859 9.98828 7.36328C9.98828 7.66797 10.0938 7.9375 10.3047 8.17188ZM2.07812 8.17188C2.3125 8.38281 2.58203 8.48828 2.88672 8.48828C3.19141 8.48828 3.44922 8.38281 3.66016 8.17188C3.89453 7.9375 4.01172 7.66797 4.01172 7.36328C4.01172 7.05859 3.89453 6.80078 3.66016 6.58984C3.44922 6.35547 3.19141 6.23828 2.88672 6.23828C2.58203 6.23828 2.3125 6.35547 2.07812 6.58984C1.86719 6.80078 1.76172 7.05859 1.76172 7.36328C1.76172 7.66797 1.86719 7.9375 2.07812 8.17188ZM12.2031 1L13.75 5.5V11.5117C13.75 11.7227 13.6797 11.8984 13.5391 12.0391C13.3984 12.1797 13.2227 12.25 13.0117 12.25H12.2383C12.0273 12.25 11.8516 12.1797 11.7109 12.0391C11.5703 11.8984 11.5 11.7227 11.5 11.5117V10.7383H2.5V11.5117C2.5 11.7227 2.42969 11.8984 2.28906 12.0391C2.14844 12.1797 1.97266 12.25 1.76172 12.25H0.988281C0.777344 12.25 0.601562 12.1797 0.460938 12.0391C0.320312 11.8984 0.25 11.7227 0.25 11.5117V5.5L1.79688 1C1.9375 0.507812 2.30078 0.261719 2.88672 0.261719H11.1133C11.6992 0.261719 12.0625 0.507812 12.2031 1Z" fill="#9A9EA7" />
                        </svg>
                        <span className='text-[14px] font-light text-gray-500'>

                            1.530 Vehicles                        </span>
                    </div>
                </div>
                <hr className='px-4 mr-2' />


            </div>
        </div>
    )
}