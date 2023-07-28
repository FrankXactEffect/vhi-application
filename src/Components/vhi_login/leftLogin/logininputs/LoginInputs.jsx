import React, { useState } from 'react'
import './loginInput.css'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useHistory } from "react-router-dom"


function LoginInputs() {
    const history = useHistory()
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("");

    const logged = () => {
        history.push("/VhiMainHome");
    }

    async function logIn(e) {
        e.preventDefault()

        try {
            let item = { email, password }
            console.warn(item)
            const response = await axios.post("https://licence-reg-renewal-api.onrender.com/user/login", {

                email: email,
                password: password,

            })
            window.localStorage.setItem("token", response.data.accessToken)
            console.log(response)
            alert('welcome!')
            logged();
        } catch (err) {
            console.log(err)
            alert('failed, check your details')

        }
    }




    return (
        <div className='login-InputContainers'>
            <form>
                <div className="email-input-container">
                    <label htmlFor="Email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="first-row-text" />
                </div>

                <div className="password-input-container">
                    <label for="password">Password</label>
                    <div className="input-icon-container" >
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        {/* <span onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{password.showPassword ? <VisibilityIcon className='visibleIcon' /> : <VisibilityOffIcon className='visibleOffIcon' />}</span> */}
                    </div>
                    <Link to={'VhipasswordRecovery'}><p>Forgot Password?</p></Link>
                </div>
                <Link to={'VhiMainHome'} className='login-submit-button'>
                    <button type="submit" onClick={logIn}>Login</button>
                </Link>
                <p className='login-optional-link'>Don't have an account?<Link to={'VhiSignup'}>SignUp</Link></p>

            </form>




        </div>
    )
}

export default LoginInputs