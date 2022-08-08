import React from 'react'

export default function MainBanner() {
    return (
        <div className='mx-auto  lg:max-w-[1046px] w-[95%] p-6 rounded-md main-banner '>
            <h2 className='text-[24px] font-bold leading-[32px] text-[#ffffff] mb-3'>We updated our cancelation <br/>
                policy to ensure the user experience </h2>

            <p className='mb-3 font-[14px] text-white leading-[21px]'>Learn more details on our latest blog post</p>
            <button className='py-2 hover:bg-black transition-all hover:shadow-md my-2 text-white bg-[#0d0a19] px-4 text-[14px] rounded-[10px]'>Explore updates</button>
        </div>
    )
}
