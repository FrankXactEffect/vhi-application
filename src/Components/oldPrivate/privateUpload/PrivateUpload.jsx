import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './privateUpload.css'

function PrivateUpload() {
    return (
        <div className='privateUpload'>

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
        </div>
    )
}

export default PrivateUpload