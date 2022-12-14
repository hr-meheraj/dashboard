import React from 'react'
import SalesInsight from './SalesInsight'
import UpcomingAuctions from './UpcomingAuctions'

function PerformanceSecond() {
    return (
        <div className='mb-[35px] mx-auto mt-[20px]  lg:max-w-[1046px] w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4'>
          <UpcomingAuctions/>
          <SalesInsight/>
        </div>
    )
}

export default PerformanceSecond