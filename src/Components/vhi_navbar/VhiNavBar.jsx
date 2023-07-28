import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IMAGES from '../../images/index.js';
import './vhinavbar.css'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { navItems } from "./navItems/NavItems.jsx"
import Dropdown from './dropdown/Dropdown.jsx';
import { NavLink } from 'react-router-dom';


function VhiNavBar() {
    const [dropdown, setDropdown] = useState(true);


    return (
        <>
            <nav className='vhi__navbarContainer'>
                <Link to={"/"} className='navbar-logo'>
                    <img className='vpr_logo_file' src={IMAGES.imgOne} alt="" />
                </Link>

                <ul className='nav-items'>
                    {navItems.map(item => {
                        if (item.id === 3) {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >

                                    <NavLink to={item.path}><span>{item.title}</span><ArrowDropDownCircleIcon className='drop-icon' /></NavLink>
                                    {dropdown && <Dropdown />}
                                </li>)
                        } else if (item.id === 2) {
                            return (
                                <li key={item.id} id={item.styleid} className={item.cName}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        } else if (item.id === 5) {
                            return (
                                <li key={item.id} id={item.contactStyle} className={item.cName}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        } else if (item.id === 1) {
                            return (
                                <li key={item.id} id={item.styleHome} className={item.cName}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )

                        } else if (item.id === 6) {
                            return (
                                <li key={item.id} id={item.fqaStyle} className={item.cName}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        } else if (item.id === 4) {
                            return (
                                <li key={item.id} id={item.styleAbt} className={item.cName}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        } else {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        }
                    })}
                </ul>

                {/* <p>Supposed userProfileIcon pending</p> */}


            </nav>

        </>
    );
}

export default VhiNavBar