import React from 'react'
import AuctionsPerformacne from './AuctionsPerformacne'
import Views from './Views'

function Performance() {
    return (
        <div className='mx-auto mt-[20px]  lg:max-w-[1046px] w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Views />
            <AuctionsPerformacne />
        </div>
    )
}

export default Performance