import React from 'react'
import './rightSignup.css'
import { Link } from 'react-router-dom'
import IMAGES from '../../../images/index.js';

function RightSignup() {
    return (
        <div className='right-login-container'>
            <div className='right-login-subdiv'>
                <Link to={'/'} className='navLogo-right'>
                    <img src={IMAGES.imgOne} alt="#" />
                </Link>
                <div className='createAcccount'>
                    <h1>Create Account</h1>
                    <p>Register and renew your plate<br />number today</p>
                </div>
                <img className='side-image' src={IMAGES.imgFour} alt="" />
            </div>
        </div>
    )
}

export default RightSignup