import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

function Views() {
    const data = [
        {
            name: '15 Jan',
            views: 3220
        },
        {
            name: '16 Jan',
            views: 4200
        },
        {
            name: '17 Jan',
            views: 3456
        },
        {
            name: '18 Jan',
            views: 4522
        },
        {
            name: '19 Jan',
            views: 3900
        },
        {
            name: '20 Jan',
            views: 2800
        },
        {
            name: '21 Jan',
            views: 4420
        },
    ];
    return (
        <div>
            {/* Title */}
            <div className="flex justify-between my-4 items-center">
                <h2 className='font-bold text-[16px] text-[#0D0A19] ml-[10px]'>Your listing views</h2>

                <div className='text-[#9A9EA7] flex gap-2 text-[12px] font-bold '>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.51172 10.0117V11.4883H3.23828V10.0117H8.51172ZM12.2383 13.7383V5.51172H1.76172V13.7383H12.2383ZM12.2383 1.75C12.6367 1.75 12.9883 1.90234 13.293 2.20703C13.5977 2.51172 13.75 2.86328 13.75 3.26172V13.7383C13.75 14.1367 13.5977 14.4883 13.293 14.793C12.9883 15.0977 12.6367 15.25 12.2383 15.25H1.76172C1.33984 15.25 0.976562 15.0977 0.671875 14.793C0.390625 14.4883 0.25 14.1367 0.25 13.7383V3.26172C0.25 2.86328 0.390625 2.51172 0.671875 2.20703C0.976562 1.90234 1.33984 1.75 1.76172 1.75H2.5V0.238281H4.01172V1.75H9.98828V0.238281H11.5V1.75H12.2383ZM10.7617 6.98828V8.5H3.23828V6.98828H10.7617Z" fill="#9A9EA7" />
                    </svg>
                    <span>Last 7 days</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    width="100%"
                    height={280}
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="name" tickMargin={17} tickSize={0} tick={{strokeWidth: 2, fill: "#9A9EA7", fontWeight:"bold"}}/>
                    <Tooltip separator=" - " itemStyle={{ fontWeight: 'bold', color: '#0D0A19' }} wrapperStyle={{ color: "#9A9EA7" }} />
                    <Area dataKey="views" stroke="#EF8354" fill="#fdf0eb"
                        strokeWidth={3}
                        viewBox={{ x: 100 }}
                        animationEasing="ease-in-out"
                        activeDot={{ stroke: '#fff', fill: '#EF8354', strokeWidth: 3, r: 7 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Views