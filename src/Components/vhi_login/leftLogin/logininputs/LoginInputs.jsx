import React, { useState } from 'react'
import './loginInput.css'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

function LoginInputs() {
    const history = useHistory()
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Track password visibility

    const logged = () => {
        history.push("/VhiMainHome");
    }

    async function logIn(e) {
        e.preventDefault()

        try {
            let item = { email, password }
            console.warn(item)
            const response = await axios.post("https://license-registration.onrender.com/user/login", {

                email: email,
                password: password,

            })
            window.localStorage.setItem("accessToken", response.data.accessToken)
            console.log(response)
            toast.success('welcome!')
            logged();
        } catch (err) {
            console.log(err)
            toast.error('failed, check your details')

        }
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='login-InputContainers'>
            <form>
                <div className="email-input-container">
                    <label htmlFor="Email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="first-row-text" />
                </div>

                <div className="password-input-container">
                    <label for="password">Password</label>
                    <div className="input-icon-container" >
                        <input
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        {showPassword ? (
                            <VisibilityIcon id="visible-login-green" className='visible-login-icon' onClick={togglePasswordVisibility} />

                        ) : (
                            <VisibilityOffIcon className='visible-login-icon' onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <Link to={'VhipasswordRecovery'}><p>Forgot Password?</p></Link>
                </div>
                <Link to={'VhiMainHome'} className='login-submit-button'>
                    <button type="submit" onClick={logIn}>Login</button>
                </Link>
                <ToastContainer />

                <p className='login-optional-link'>Don't have an account?<Link to={'VhiSignup'}>SignUp</Link></p>

            </form>




        </motion.div>
    )
}

export default LoginInputs