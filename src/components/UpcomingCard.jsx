import React from 'react'

export default function UpcomingCard({ date, day, states, vehicles }) {
    return (
        <div className='grid grid-cols-12 gap-5 mx-auto w-[95%] shadow-md rounded-[6px] p-4 content-center'>
            <div className="col-span-7 flex gap-3  items-center">
                <div className='w-[44px] h-[44px] bg-[#F5F6F7] p-2 rounded-[6px] flex justify-center itmes-center'>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4023 17.3477V7.25H2.59766V17.3477H15.4023ZM15.4023 2.65234C15.8893 2.65234 16.319 2.83854 16.6914 3.21094C17.0638 3.58333 17.25 4.01302 17.25 4.5V17.3477C17.25 17.8346 17.0638 18.2643 16.6914 18.6367C16.319 18.9805 15.8893 19.1523 15.4023 19.1523H2.59766C2.08203 19.1523 1.63802 18.9805 1.26562 18.6367C0.921875 18.2643 0.75 17.8346 0.75 17.3477V4.5C0.75 4.01302 0.921875 3.58333 1.26562 3.21094C1.63802 2.83854 2.08203 2.65234 2.59766 2.65234H3.5V0.847656H5.34766V2.65234H12.6523V0.847656H14.5V2.65234H15.4023ZM13.5977 9.09766V10.9023H11.75V9.09766H13.5977ZM9.90234 9.09766V10.9023H8.09766V9.09766H9.90234ZM6.25 9.09766V10.9023H4.40234V9.09766H6.25Z" fill="#9A9EA7" />
                    </svg>
                </div>
                <div>
                    <p className='text-[#0d0a19] mb-2 text-[14px] font-normal'>{date}</p>
                    <p className=' text-[#9A9EA7] text-[12px]'>{day}</p>
                </div>
            </div>

            <div className="col-span-5 grid gap-4 grid-cols-2 items-center">
                <div className="flex flex-col items-center gap-2">
                    <h3 className='text-[14px] font-bold text-[#0D0A19]'>{states}</h3>
                    <p className=' text-[#9A9EA7] text-[12px]'>States</p>
                </div>
                <div className="flex flex-col items-center gap-2 items-center">
                    <h3 className='text-[14px] font-bold text-[#0D0A19]'>{vehicles}</h3>
                    <p className=' text-[#9A9EA7] text-[12px]'>Vehicles</p>
                </div>
            </div>
        </div>
    )
}
