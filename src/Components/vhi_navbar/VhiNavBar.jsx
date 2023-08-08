import React from 'react'
// Navbar.js
import './vhinavbar.css'; // You can style your Navbar using CSS
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IMAGES from '../../images/index.js'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { motion } from 'framer-motion';


function VhiNavBar() {

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
                <li className="dropdown">
                    <NavLink to={"OldCommercial"} >Renewal of plate</NavLink>
                    <span><ArrowDropDownCircleIcon className='green-arrow-icon' /></span>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="dropdown-content">
                        <NavLink to={"OldCommercial"}>Old Commercial</NavLink>
                        <NavLink className='drop-two' to={"oldprivate"}>Old Private</NavLink>
                    </motion.div>
                </li>
                <li><NavLink to={"VhiAbout"}>About</NavLink></li>
                <li><NavLink to={"VhiContact"}>Contact</NavLink></li>
                <li><NavLink to={"VhiFQA"}>FAQ</NavLink></li>
            </motion.ul>
        </motion.nav>
    )
}

export default VhiNavBar



