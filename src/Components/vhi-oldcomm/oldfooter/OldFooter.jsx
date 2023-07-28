import React from 'react'
import './oldfooter.css'
import IMAGES from '../../../images/index';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


function OldFooter() {
    return (
        <div className='old_footer_container'>
            <div className='oldicon-container'>
                <AlternateEmailIcon className='old-social-handles' />
                <FacebookIcon className='old-social-handles' />
                <TwitterIcon className='old-social-handles' />
                <GoogleIcon className='old-social-handles' />
            </div>
            <div className='old-footer-logo-file'><img src={IMAGES.imgTwo} alt="Foot_logo_Here" /></div>
            <div className='old-copy-right'><p>@2023 Vehi-renewal portal, All rights reserved</p></div>
        </div>
    )
}

export default OldFooter