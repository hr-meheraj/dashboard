import React from 'react'

function Footer() {
    return (
        <footer className='mt-[40px]'>
            <FooterTop />
            <FooterBottom />
        </footer>
    )
}

export default Footer

const FooterTop = () => {
    return (
        <div className='px-4 grid grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-8 py-8 bg-[#F5F6F7]'>

            <div className=''>
                <h2 className='common mb-3'>About</h2>
                <ul>
                    <li className='common-gray-light'>How it works</li>
                    <li className='common-gray-light'>Careers</li>
                    <li className='common-gray-light'>About us</li>
                    <li className='common-gray-light'>Media</li>
                </ul>
            </div>

            <div className=''>
                <h2 className='common mb-3'>Community</h2>
                <ul>
                    <li className='common-gray-light'> Against Discrimination</li>
                    <li className='common-gray-light'>Invite friends</li>
                    <li className='common-gray-light'>Gift cards</li>
                </ul>
            </div>

            <div className=''>
                <h2 className='common mb-3'>Become seller</h2>
                <ul>
                    <li className='common-gray-light'>Add your vehicle</li>
                    <li className='common-gray-light'>Business account</li>
                    <li className='common-gray-light'>Resource Center</li>
                    <li className='common-gray-light'>Community</li>
                </ul>
            </div>

            <div className=''>
                <h2 className='common mb-3'>Bookings support</h2>    <ul>
                    <li className='common-gray-light'>Updates for COVID-19</li>
                    <li className='common-gray-light'>Help Center</li>
                    <li className='common-gray-light'>Support</li>
                    <li className='common-gray-light'>Trust & Safety</li>
                </ul>
            </div>
        </div>
    )
}

const FooterBottom = () => {
    return (
        <div className='bg-white flex flex-wrap justify-between py-4  px-2 md:px-4 lg:px-[35px]'>
            <div className='flex gap-2 flex-wrap'>
                <span className='common'>Privacy Policy</span>
                <span className='common'>Term of Use</span>
                <span>&copy; {new Date().getFullYear()} All rights reserved</span>
            </div>
            <p className='flex items-center gap-2 '>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9297 11.543C12.9844 10.418 13.5117 9.07031 13.5117 7.5C13.5117 6.25781 13.1602 5.13281 12.457 4.125C11.7773 3.11719 10.875 2.39063 9.75 1.94531V2.26172C9.75 2.66016 9.59766 3.01172 9.29297 3.31641C8.98828 3.59766 8.63672 3.73828 8.23828 3.73828H6.76172V5.25C6.76172 5.46094 6.67969 5.63672 6.51562 5.77734C6.375 5.91797 6.19922 5.98828 5.98828 5.98828H4.51172V7.5H9.01172C9.22266 7.5 9.39844 7.57031 9.53906 7.71094C9.67969 7.85156 9.75 8.02734 9.75 8.23828V10.4883H10.4883C11.1914 10.4883 11.6719 10.8398 11.9297 11.543ZM6.76172 13.4414V12C6.36328 12 6.01172 11.8477 5.70703 11.543C5.40234 11.2383 5.25 10.8867 5.25 10.4883V9.75L1.66406 6.16406C1.54688 6.63281 1.48828 7.07812 1.48828 7.5C1.48828 9.02344 1.99219 10.3477 3 11.4727C4.03125 12.5977 5.28516 13.2539 6.76172 13.4414ZM2.19141 2.22656C3.66797 0.75 5.4375 0.0117188 7.5 0.0117188C9.5625 0.0117188 11.3203 0.75 12.7734 2.22656C14.25 3.67969 14.9883 5.4375 14.9883 7.5C14.9883 9.5625 14.25 11.332 12.7734 12.8086C11.3203 14.2617 9.5625 14.9883 7.5 14.9883C5.4375 14.9883 3.66797 14.2617 2.19141 12.8086C0.738281 11.332 0.0117188 9.5625 0.0117188 7.5C0.0117188 5.4375 0.738281 3.67969 2.19141 2.22656Z" fill="#9A9EA7" />
                </svg>
                <span className='font-normal text-[#9A9EA7] text-[14px]'>English {">>> US"}</span>
            </p>
        </div>
    )
}