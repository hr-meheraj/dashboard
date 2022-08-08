import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

function SalesChart() {
    const data = [
        {
          name: '15 Jan',
          sale : 42000
        },
        {
          name: '16 Jan',
          sale : 18000
        },
        {
          name: '17 Jan',
          sale : 52000
        },
        {
          name: '18 Jan',
          sale : 32890
        },
        {
          name: '19 Jan',
          sale : 8900 
        },
        {
          name: '20 Jan',
          sale : 25299 
        },
        {
          name: '21 Jan',
          sale : 26000
        },
      ];


    return (
        <ResponsiveContainer  width="100%" height={280}>
            <BarChart
                width={500}
                height={280}
                data={data}
                barSize={20}
            >
                <XAxis tickMargin={17} tickSize={0} tick={{strokeWidth: 2, fill: "#9A9EA7", fontWeight:"bold"}} dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <Tooltip  viewBox={{x:100}} separator=':  $' wrapperStyle={{color:"#9A9EA7", fontSize:"14px", fontWeight:400}} itemStyle={{color:'#0D0A19', fontSize:"14px", fontWeight:"bold"}} />
                {/* <Legend /> */}
                <Bar  dataKey="sale" fill="#EF8354" background={{ fill: '#eee' }}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SalesChart