import React from 'react'
import './vhiForgtn.css'
import LoginRight from '../loginRight/LoginRight'
import ForgottenLeft from './forgtnLeft/ForgottenLeft'
function VhiForgtn() {
    return (
        <div className='forgotten-password-container'>
            <LoginRight />
            <ForgottenLeft />
        </div>
    )
}

export default VhiForgtn