import React from 'react'
import './loginRight.css'
import { Link } from 'react-router-dom'
import IMAGES from '../../../images/index.js';


function LoginRight() {
    return (
        <div className='loginRightContainer'>
            <div className='login-right-subdiv'>
                <Link to={'/'} className='navLogo-right-login'>
                    <img src={IMAGES.imgOne} alt="#" />
                </Link>
                <div className='createAcccount-right'>
                    <h1>Welcome!</h1>
                    <p>Register and renew your plate<br />number today</p>
                </div>
                <img className='side-image-right' src={IMAGES.imgFour} alt="" />
            </div>
        </div>
    )
}

export default LoginRight