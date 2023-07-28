import React from 'react'
import "./vhiNewReg.css"
import HelpIcon from '@mui/icons-material/Help';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { Link } from 'react-router-dom'
import NewRegtext from './newregtext/NewRegtext';




function Vhi_NewReg() {


    return (
        <div className='newRegistration-container'>
            <NewRegtext />
            <form>
                {/* inputs fields */}
                <div className='newregistrationContainer'>
                    <div className='rowOne-newregistration'>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">First Name</label>
                            <input type="text" className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Last Name</label>
                            <input type="text" className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Address</label>
                            <input type="text" className="first__row" />
                        </div>
                    </div>

                    <div className='rowTwo-newregistration'>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Date of Birth</label>
                            <input type="text" className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Identity Number</label>
                            <input type="text" className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Gender</label>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* upload field */}
                <div className='box-container'>

                    <div className='single-traced-upload-box'>
                        <UploadFileIcon className='uploadIcon' />
                        <p>Identity Card</p>
                    </div>

                </div>


                <Link to={'reg'} className='new-reg-button-container'>
                    <button type="submit">SUBMIT</button>
                </Link>
            </form>
            <Vhi_footer />
            <Link to={"VhiFQA"}>
                <div className='ques-con'>
                    <HelpIcon className='question-icon' />
                </div>
            </Link>

        </div>
    )
}

export default Vhi_NewReg