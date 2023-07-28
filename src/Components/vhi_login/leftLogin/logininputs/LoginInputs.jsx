import React, { useState } from 'react'
import './loginInput.css'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function LoginInputs() {

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    };
    return (
        <div className='login-InputContainers'>
            <form>
                <div className="email-input-container">
                    <label htmlFor="Email">Email</label>
                    <input type="text" />
                </div>

                <div className="password-input-container">
                    <label for="password">Password</label>
                    <div className="input-icon-container" >
                        <input type={values.showPassword ? "text" : "password"} onChange={handlePasswordChange("password")} value={values.password} />
                        <span onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{values.showPassword ? <VisibilityIcon className='visibleIcon' /> : <VisibilityOffIcon className='visibleOffIcon' />}</span>
                    </div>
                    <Link to={'VhipasswordRecovery'}><p>Forgot Password?</p></Link>
                </div>
                <Link to={'VhiMainHome'} className='login-submit-button'>
                    <button type="submit">Login</button>
                </Link>
                <p className='login-optional-link'>Don't have an account?<Link to={'VhiSignup'}>SignUp</Link></p>

            </form>

        </div>
    )
}

export default LoginInputs