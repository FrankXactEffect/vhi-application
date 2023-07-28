import React from 'react'
import './leftSignup.css'
// import { Link } from 'react-router-dom'
import IMAGES from '../../../images/index.js';
import SignupInput from './signupInputs/SignupInput';

function LeftSignup() {
    return (
        <div className='leftloginContainer'>
            <div className='left-login-topitems'>
                <h1>Register and renew your plate<br />number today.</h1>
                <div className='leftlogin-imgitems'>
                    <img src={IMAGES.imgFive} alt="" />
                    <img src={IMAGES.imgSix} alt="" />
                    <img src={IMAGES.imgSeven} alt="" />
                </div>
            </div>
            <SignupInput />
        </div>
    )
}

export default LeftSignup