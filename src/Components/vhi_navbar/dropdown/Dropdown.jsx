import React, { useState } from 'react'
import './dropDown.css'
import { serviceDropdown } from '../navItems/NavItems'
import { Link } from 'react-router-dom'


function Dropdown() {
    const [dropdown, setDropdown] = useState(false);


    return (
        <ul className={!dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
            {serviceDropdown.map(item => {

                if (item.id === 2) {

                    return (
                        <li key={item.id} id={item.styleOld}>
                            <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                        </li>
                    )
                } else if (item.id === 1) {
                    return (
                        <li key={item.id} id={item.styleCommercial}>
                            <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                        </li>
                    )
                }
                return (

                    <li key={item.id}>
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                    </li>

                )
            })}
        </ul>
    )
}

export default Dropdown