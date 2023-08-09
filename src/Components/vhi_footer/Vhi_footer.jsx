import React from 'react'
import './vhiFooter.css'
import IMAGES from '../../images/index.js';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';

function Vhi_footer() {
    return (
        <div className='vhi_footer_container'>
            <div className='icon-container'>
                <Link to={""}>
                    <AlternateEmailIcon className='social-handles' />
                </Link>
                <Link to={""}>
                    <FacebookIcon className='social-handles' />
                </Link>
                <Link to={""}>
                    <TwitterIcon className='social-handles' />
                </Link>
                <Link to={""}>
                    <GoogleIcon className='social-handles' />
                </Link>
            </div>
            <div className='footer-logo-file'><img src={IMAGES.imgTwo} alt="Foot_logo_Here" /></div>
            <div className='copy-right'><p>@2023 Vehi-renewal portal, All rights reserved</p></div>
        </div>
    )
}

export default Vhi_footer