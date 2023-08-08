import React from 'react'
import './homeNavCom.css'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../../images/index.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function HomeNavCom() {
    return (
        <motion.nav
            className='homeNavComponent_Container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Link to={'/'} className='navLogo'>
                <img src={IMAGES.imgOne} alt="#" />
            </Link>
            <div className='nav-middle-links'>
                <NavLink to={'basicAboutus'}>About</NavLink>
                <NavLink to={'basicFaq'}>FAQ</NavLink>
                <NavLink to={'basicContact'}>Contact</NavLink>
            </div>
            <div className='navButtons'>

                <Link to={'VhiSignup'} >
                    <button className='navregister' type='submit'>REGISTER</button>
                </Link>

                <Link to={'VhiLogin'} className='loginlink'>
                    <button className='navlogin' type='submit'> LOGIN</button>
                </Link>

            </div>
        </motion.nav>
    )
}

export default HomeNavCom