import React from 'react'
import './forgottenLeft.css'
import IMAGES from '../../../../images/index.js';
import ForgotInput from './forgotInput/ForgotInput';

function ForgottenLeft() {
    return (
        <div className='leftForgotten-container'>
            <div className='forgotten-banner-container'>
                <img className='forgotten-img' src={IMAGES.imgEight} alt="" />
                <div className='forgotten-banner-text'>
                    <h3>Forgot Password?</h3>
                    <p>No worries, we'll send you reset instructions</p>
                </div>
            </div>
            <ForgotInput />
        </div>
    )
}

export default ForgottenLeft