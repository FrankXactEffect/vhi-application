import React from 'react'
import './vhiFooter.css'
import IMAGES from '../../images/index.js';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Vhi_footer() {
    return (
        <div className='vhi_footer_container'>
            <div className='icon-container'>
                <AlternateEmailIcon className='social-handles' />
                <FacebookIcon className='social-handles' />
                <TwitterIcon className='social-handles' />
                <GoogleIcon className='social-handles' />
            </div>
            <div className='footer-logo-file'><img src={IMAGES.imgTwo} alt="Foot_logo_Here" /></div>
            <div className='copy-right'><p>@2023 Vehi-renewal portal, All rights reserved</p></div>
        </div>
    )
}

export default Vhi_footer