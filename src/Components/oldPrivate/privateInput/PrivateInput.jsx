import React from 'react'
import './privateInput.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';

import Vhi_footer from '../../vhi_footer/Vhi_footer';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';

function PrivateInput() {
    return (
        <>
            <form className='privateInputContainer'>
                <div className='privateSubdiv'>
                    <div className='level-one-private' id='level-one-private'>
                        <label htmlFor="license order">Driver's Licence</label>
                        <input type="text" className="first__row__private" />
                    </div>
                    <div className='level-one-private' id='level-one-private'>
                        <label htmlFor="license order">Road Worthiness ID</label>
                        <input type="text" className="first__row__private" />
                    </div>
                    <div className='level-one-private' id='level-one-private'>
                        <label htmlFor="license order">Vehicle Identification Number</label>
                        <input type="text" className="first__row__private" />
                    </div>
                </div>




                <div className='private-box-container'>
                    <div className='private-upload-box'>
                        <UploadFileIcon className='privateuploadIcon ' />
                        <p>Car License</p>
                    </div>
                    <div className='private-upload-box'>
                        <UploadFileIcon className='privateuploadIcon ' />
                        <p>Road Worthiness</p>
                    </div>
                    <div className='private-upload-box'>
                        <UploadFileIcon className='privateuploadIcon ' />
                        <p>Insurance Letter</p>
                    </div>
                </div>

                <div className='private_button_container'>
                    <button type="submit">Renew Plate</button>
                </div>

            </form>
            <Vhi_footer />
            <Link to={"VhiFQA"}>
                <div className='ques-con-private'>
                    <HelpIcon className='question-icon-private' />
                </div>
            </Link>
        </>
    )
}

export default PrivateInput