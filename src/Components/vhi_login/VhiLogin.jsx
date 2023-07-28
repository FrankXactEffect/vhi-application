import React from 'react'
import './vhiLogin.css'
import LeftLogin from './leftLogin/LeftLogin'
import LoginRight from './loginRight/LoginRight'



function VhiLogin() {
    return (
        <div className='vhilogin-Container'>
            <LoginRight />
            <LeftLogin />

        </div>
    )
}

export default VhiLogin