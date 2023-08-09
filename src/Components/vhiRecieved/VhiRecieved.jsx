import React from 'react'
import './vhiRecieved.css'
import Vhi_footer from '../vhi_footer/Vhi_footer'

import IMAGES from '../../images'

function VhiRecieved() {
    return (
        <div className='recieved-container'>
            <div className='mid-content'>
                <h1>Registration Confirmed</h1>
                <img src={IMAGES.imgFifteen} alt="" />
                <p class>Your Registration has been Recieved!</p>
            </div>
            <Vhi_footer />
        </div>


    )
}

export default VhiRecieved