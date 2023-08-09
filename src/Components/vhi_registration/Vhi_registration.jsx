import React from 'react'
import './vhiRegistration.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Vhi_footer from '../vhi_footer/Vhi_footer'
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';


function Vhi_registration() {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className='vhi_registration-container'>

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
                            <input type="file" />
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Attestation Letter</p>
                            <input type="file" />
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Purchase Reciept</p>
                            <input type="file" />
                        </div>
                    </div>




                    <div className='box-container-two'>

                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Delivery Note</p>
                            <input type="file" />
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Proof of ownership</p>
                            <input type="file" />
                        </div>
                        <div className='traced-upload-box'>
                            <UploadFileIcon className='uploadIcon' />
                            <p>Driver's License</p>
                            <input type="file" />
                        </div>
                    </div>

                </div>

                <Link to={'recieved'} className='vhi_button_container'>
                    <button type="submit">REGISTER</button>
                </Link>
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
        </motion.div>
    )
}

export default Vhi_registration