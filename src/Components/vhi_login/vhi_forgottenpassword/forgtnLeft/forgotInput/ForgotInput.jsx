import React from 'react'
import './forgotInput.css'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import axios from 'axios';

function ForgotInput() {

    const [email, setEmail] = useState("")


    async function forgottenPassword(e) {
        e.preventDefault()

        try {
            let item = { email }
            console.warn(item)
            const response = await axios.post("https://license-registration.onrender.com/user/create", {
                email: email,
            })
            console.log(response)
            toast.success('successfully done, a message have been sent to your mail')
        } catch (err) {

            console.log(err)
            toast.error('failed, check your details')
        }
    }

    return (
        <>
            <motion.div className='fogotInputContainer'>
                <form >
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter you email' />
                    <button type='submit' onClick={forgottenPassword}>Reset Password</button>
                    <Link to={'VhiLogin'}><span><KeyboardBackspaceIcon /></span>Back to login</Link>
                </form>

            </motion.div>
            <ToastContainer />
        </>
    )
}

export default ForgotInput