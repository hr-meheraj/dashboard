import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomSideLink({to, name, children}) {
    return (
        <li className='flex gap-2 mb-3'>
            <NavLink to={to}>
                {children}
                <span className=''>{name}</span>
            </NavLink>
        </li>
    )
}

export default CustomSideLink