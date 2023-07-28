import React from 'react'
import './vhiSignup.css'

// import LeftLogin from './leftSignup/LeftSignup'
import LeftSignup from './leftSignup/LeftSignup'
import RightSignup from './rightSignup/RightSignup'
function VhiSignup() {
    return (
        <div className='vhiloginContainer'>
            <RightSignup />
            <LeftSignup />
        </div>
    )
}

export default VhiSignup