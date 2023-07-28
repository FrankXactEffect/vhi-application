import React, { useState } from 'react'
import './signupInput.css'
import { Link } from 'react-router-dom'
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useHistory } from "react-router-dom"


function SignupInput() {
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("")

    const logged = () => {
        history.push("/VhiLogin");
    }
    async function signUp(e) {
        e.preventDefault()

        try {
            let item = { name, email, password, confirmation }
            console.warn(item)
            const response = await axios.post("https://licence-reg-renewal-api.onrender.com/user/create", {
                name: name,
                email: email,
                password: password,
                repeat_password: confirmation
            })
            console.log(response)
            alert('successfully created, proceed!')
            logged();
        } catch (err) {
            console.log(err)
            alert('failed, check your details')
        }
    }



    return (
        <div className='loginInputContainer'>
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

                <div className='second-row-item'>
                    <div className='password-field' id='level-one'>
                        <label for="password">Password</label>
                        <div className="second-row-input-div" >
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            {/* <span onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{password.showValue ? <VisibilityIcon className='visibleIcon' /> : <VisibilityOffIcon className='visibleOffIcon' />}</span> */}
                        </div>
                    </div>
                    <div className='confirm-password-field' id='level-one'>
                        <label for="confirm password">Confirm Password</label>
                        <div className="second-row-input-div">
                            <input type="password" onChange={(e) => setConfirmation(e.target.value)} value={confirmation} />
                            {/* <span onClick={handleConfirmClickShowPassword} onMouseDown={handleMouseDownConfirmPassword}>{confirmation.confirmPassword ? <VisibilityIcon className='visibleIcon' /> : <VisibilityOffIcon className='visibleOffIcon' />}</span> */}
                        </div>

                    </div>
                </div>
                <div className='inputButtonContainer'>
                    <button type="submit" onClick={signUp}>Sign Up</button>
                </div>
                <p className='optional-link'>Already have an account?<Link to={'VhiLogin'}>Login</Link></p>
            </form>



        </div>
    )
}

export default SignupInput