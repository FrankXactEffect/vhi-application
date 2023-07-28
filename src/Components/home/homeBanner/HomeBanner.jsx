import React from 'react'
import './homeBanner.css'
import IMAGES from '../../../images/index.js';

function HomeBanner() {
    return (
        <div className='homeBannerContainer'>
            <img src={IMAGES.imgThree} alt="" />
        </div>
    )
}

export default HomeBanner