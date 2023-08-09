import React from 'react'
// Navbar.js
import './vhinavbar.css'; // You can style your Navbar using CSS
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IMAGES from '../../images/index.js'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { motion } from 'framer-motion';
import { useState } from 'react';


function VhiNavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false); // Track dropdown visibility

    // const toggleDropdown = () => {
    //     setDropdownVisible(!dropdownVisible);
    // };
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="navbar">
            <div className="logo">
                <Link to={"/"}><img src={IMAGES.imgOne} alt="Logo" /></Link>
            </div>
            <motion.ul className="nav-links">
                <li><NavLink to={"VhiMainHome"}>Home</NavLink></li>
                <li><NavLink to={"newregistration"}>Register vehicle</NavLink></li>
                <li
                    className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <NavLink
                        to={''}
                        className={dropdownVisible ? 'green-highlight' : ''}
                        onClick={(e) => e.preventDefault()} // Prevent navigation
                        isActive={(match, location) => {
                            return (
                                (match && dropdownVisible) || // Active when dropdownVisible is true
                                location.pathname === '/OldCommercial' ||
                                location.pathname === '/oldprivate'
                            );
                        }}
                    >
                        Renewal of plate
                    </NavLink>
                    <span>
                        <ArrowDropDownCircleIcon className="green-arrow-icon" />
                    </span>
                    {dropdownVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="dropdown-content"
                        >
                            <NavLink to={'OldCommercial'}>Old Commercial</NavLink>
                            <NavLink className="drop-two" to={'oldprivate'}>
                                Old Private
                            </NavLink>
                        </motion.div>
                    )}
                </li>

                <li><NavLink to={"VhiAbout"}>About</NavLink></li>
                <li><NavLink to={"VhiContact"}>Contact</NavLink></li>
                <li><NavLink to={"VhiFQA"}>FAQ</NavLink></li>
            </motion.ul>
        </motion.nav>
    )
}

export default VhiNavBar



