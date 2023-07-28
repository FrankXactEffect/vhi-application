import React from 'react'
import './vhiRegistration.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Vhi_footer from '../vhi_footer/Vhi_footer'
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom'
function Vhi_registration() {
    return (
        <div className='vhi_registration-container'>

            <div className='banner__title'>
                <h1>New Car Registration</h1>
                <p>Vehicle Identification</p>
            </div>
            <form>
                {/* input filed */}
                <div className='input__over_all__container'>
                    {/* first row */}
                    <div className='level-one' id='level-one'>
                        <label for="First Name">Vehicle Identification Number</label>
                        <input type="text" className="first__row" />
                    </div>
                    <div className='level-one' id='level-one'>
                        <label for="First Name">License Identification Number</label>
                        <input type="text" className="first__row" />
                    </div>

                </div>






                {/* upload */}
                <div className='traced-upload-container'>
                    {/* <p className='sub__caption'>Vehicle Identification</p> */}
                    <div className='box-container'>

                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Owner Passport</p>
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Attestation Letter</p>
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Purchase Reciept</p>
                        </div>
                    </div>


                    <div className='box-container-two'>

                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Delivery Note</p>
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Proof of ownership</p>
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Driver's License</p>
                        </div>
                    </div>
                </div>

                <div className='vhi_button_container'>
                    <button type="submit">REGISTER</button>
                </div>
            </form>
            <Vhi_footer />
            <Link to={""}>
                <div className='ques-con'>
                    <HelpIcon className='question-icon' />
                </div>
            </Link>

            {/* Navbar */}
            {/* banner title */}
            {/* input fields */}
            {/* upload fields */}
            {/* button */}
            {/* footer */}
        </div>
    )
}

export default Vhi_registration