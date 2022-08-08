import React from 'react'
import { useParams } from 'react-router-dom'
function NotFound() {
    const useParam = useParams();
    console.log(useParam);
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='text-center'>
                <img src="https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg" className='max-w-[300px] w-[90%] mx-auto'/>
                <h2 className='text-2xl'>Comming soon.... </h2>
                <p>We are sorry for this moment.</p>
            </div>
        </div>
    )
}

export default NotFound