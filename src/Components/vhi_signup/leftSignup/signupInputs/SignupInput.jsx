import React, { useState } from 'react'
import './signupInput.css'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

function SignupInput() {
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("")
    const [showPassword, setShowPassword] = useState(false); // Track password visibility
    const [showconfirmPassword, setConfirmShowPassword] = useState(false);

    const logged = () => {
        history.push("/VhiLogin");
    }
    async function signUp(e) {
        e.preventDefault()

        try {
            let item = { name, email, password, confirmation }
            console.warn(item)
            const response = await axios.post("https://license-registration.onrender.com/user/create", {
                name: name,
                email: email,
                password: password,
                repeat_password: confirmation
            })
            console.log(response)
            toast.success('successfully created, proceed!')
            logged();
        } catch (err) {

            console.log(err)
            toast.error('failed, check your details')
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConPasswordVisibility = () => {
        setConfirmShowPassword(!showconfirmPassword);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='loginInputContainer'>
            <form>
                <div className='first-row-item'>
                    <div className='name-field' id='level-one'>
                        <label for="First Name">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="first-row-text" />
                    </div>
                    <div className='email-field' id='level-one'>
                        <label for="First Name">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="first-row-text" />
                    </div>
                </div>



                <div className="second-row-item">
                    {/* Password Field */}
                    <div className="password-field" id="level-one">
                        <label htmlFor="password">Password</label>
                        <div className="second-row-input-div">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            {showPassword ? (
                                <VisibilityIcon id="visible-green" className='visible-icon' onClick={togglePasswordVisibility} />

                            ) : (
                                <VisibilityOffIcon className='visible-icon' onClick={togglePasswordVisibility} />
                            )}
                        </div>
                    </div>
                    {/* Confirm Password Field */}
                    <div className="confirm-password-field" id="level-one">
                        <label htmlFor="confirm password">Confirm Password</label>
                        <div className="second-row-input-div">
                            <input
                                type={showconfirmPassword ? 'text' : 'password'}
                                onChange={(e) => setConfirmation(e.target.value)}
                                value={confirmation}
                            />
                            {showconfirmPassword ? (
                                <VisibilityIcon id="visible-green-two" className='visible-icon-two' onClick={toggleConPasswordVisibility} />
                            ) : (
                                <VisibilityOffIcon className='visible-icon-two' onClick={toggleConPasswordVisibility} />
                            )}
                        </div>
                    </div>
                </div>




                <div className='inputButtonContainer'>
                    <button type="submit" onClick={signUp}>Sign Up</button>
                </div>
                <ToastContainer />
                <p className='optional-link'>Already have an account?<Link to={'VhiLogin'}>Login</Link></p>
            </form>



        </motion.div>
    )
}

export default SignupInput