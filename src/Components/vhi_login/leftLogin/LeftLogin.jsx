import React from 'react'
import './leftLogin.css'
import IMAGES from '../../../images/index.js';
import LoginInputs from './logininputs/LoginInputs';


function LeftLogin() {
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
            <LoginInputs />

        </div>
    )
}

export default LeftLogin