import React from 'react'

import './vhiOldCom.css'


import OldFooter from './oldfooter/OldFooter'
import HelpIcon from '@mui/icons-material/Help';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { Link } from 'react-router-dom'


function VhiOldCom() {
    return (
        <div>

            <div className='banner__title'>
                <h1>Vehicle Plate Renewal</h1>
            </div>
            <form className='oldCommercial-form'>
                {/* input filed */}
                <div className='oldInputContainer'>
                    <div className='level-one-old' id='level-one-old'>
                        <label htmlFor="license order">License ID</label>
                        <input type="text" className="first__row" />
                    </div>
                    <div className='level-one-old' id='level-one-old'>
                        <label htmlFor="license order">Road Worthiness ID</label>
                        <input type="text" className="first__row" />
                    </div>
                    <div className='level-one-old' id='level-one-old'>
                        <label htmlFor="license order">Vehicle Identification Number</label>
                        <input type="text" className="first__row" />
                    </div>
                </div>


                {/* uploadfield */}
                <div className='oldpload-container'>
                    <div className='box-container-four'>
                        <div className='old-upload-box'>
                            <UploadFileIcon className='olduploadIcon ' />
                            <p>Car License</p>
                            <input type="file" />
                        </div>
                        <div className='old-upload-box'>
                            <UploadFileIcon className='olduploadIcon ' />
                            <p>Road Worthiness</p>
                            <input type="file" />
                        </div>
                        <div className='old-upload-box'>
                            <UploadFileIcon className='olduploadIcon ' />
                            <p>Insurance Letter</p>
                            <input type="file" />
                        </div>
                    </div>

                    <div className='box-container-three'>

                        <div className='old-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Heavy Goods Permit</p>
                            <input type="file" />
                        </div>
                        <div className='old-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Carrier Permit</p>
                            <input type="file" />
                        </div>
                    </div>
                </div>







                <div className='oldbuttonContainer'>
                    <button type="submit">Renew Plate</button>
                </div>
            </form>

            <OldFooter />
            <Link to={"VhiFQA"}>
                <div className='ques-con'>
                    <HelpIcon className='question-icon' />
                </div>
            </Link>
        </div>
    )
}

export default VhiOldCom