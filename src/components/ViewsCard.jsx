import React from 'react'

function ViewsCard({imgURL, titleOne, titleTwo, views, bids}) {
    return (
        <div className='grid grid-cols-12 gap-5 mx-auto w-[95%]'>
            <div className="col-span-7 flex gap-3">
                <img className=' rounded-[4px] w-[56px] h-[44px]' src={imgURL} alt={titleOne}/>
                <p className='text-[#0d0a19] text-[14px] font-normal'>{titleOne} <br /> {titleTwo}</p>
            </div>

            <div className="col-span-5 grid gap-4 grid-cols-2">
                <div className="flex flex-col items-center gap-2">
                    <h3 className='text-[14px] font-bold text-[#0D0A19]'>{views}</h3>
                    <p className=' text-[#9A9EA7] text-[12px]'>Views</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h3 className='text-[14px] font-bold text-[#0D0A19]'>{bids}</h3>
                    <p className=' text-[#9A9EA7] text-[12px]'>Last Bid</p>
                </div>
            </div>
        </div>
    )
}

export default ViewsCard