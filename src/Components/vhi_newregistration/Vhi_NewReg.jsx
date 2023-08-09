import React from 'react'
import "./vhiNewReg.css"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { Link } from 'react-router-dom'
import NewRegtext from './newregtext/NewRegtext';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';
import { motion } from "framer-motion"

function Vhi_NewReg() {
    const history = useHistory()
    const logged = () => {
        history.push("/reg");
    }



    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [address, setAddress] = useState("");
    const [identity_number, setIdentity_number] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [gender, setGender] = useState("");
    const [image, setImage] = useState(null);


    const handleGenderChange = (event) => {
        setGender(event.target.value); // Update the gender state with the selected value
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append("first_name", first_name);
            formData.append("last_name", last_name);
            formData.append("address", address);
            formData.append("identity_number", identity_number);
            formData.append("date_of_birth", date_of_birth);
            formData.append("gender", gender);
            formData.append("image", image);

            const accessToken = window.localStorage.getItem("accessToken");
            console.log(accessToken, "accessToken is here");

            const ENDPOINT_URL = "https://licence-reg-renewal-api.onrender.com/user/profile";
            const response = await axios.post(ENDPOINT_URL, formData, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.status !== 200) {
                throw new Error('Request failed');
            }
            toast.success('successful');
            logged();
        } catch (error) {
            console.error('Error fetching data:', error.message);
            toast.error('failed');
        }
    };



    return (
        <motion.div
            className='newRegistration-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NewRegtext />
            <form>
                {/* inputs fields */}
                <div className='newregistrationContainer'>
                    <div className='rowOne-newregistration'>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">First Name</label>
                            <input type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Last Name</label>
                            <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Address</label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="first__row" />
                        </div>
                    </div>

                    <div className='rowTwo-newregistration'>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Date of Birth</label>
                            <input type="text" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} className="first__row" />
                        </div>
                        <div className='level-one' id='level-one'>
                            <label for="First Name">Identity Number</label>
                            <input type="text" value={identity_number} onChange={(e) => setIdentity_number(e.target.value)} className="first__row" />
                        </div>

                        <div className='level-one' id='level-one'>
                            <label for="First Name">Gender</label>
                            <select value={gender} onChange={handleGenderChange}>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* upload field */}
                <div className='box-container'>

                    <div className='single-traced-upload-box'>
                        <UploadFileIcon className='uploadIcon-new' />
                        <p>Identity Card</p>
                        <input type="file" id="fileInput" accept=".png, .jpg, .jpeg, .gif" onChange={handleFileChange} />
                    </div>

                </div>


                <Link to={'reg'} className='new-reg-container'>
                    <button className='new-reg-button-container' type="submit" >SUBMIT</button>
                </Link>


                <ToastContainer />
            </form>
            <Vhi_footer />


        </motion.div>
    )
}

export default Vhi_NewReg