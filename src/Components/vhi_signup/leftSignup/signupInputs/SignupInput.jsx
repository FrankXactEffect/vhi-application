import React, { useState } from 'react'
import './signupInput.css'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignupInput() {

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
    const [confirm, setConfirm] = useState({
        password: "",
        confirmPassword: false,
    })
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    };


    // handleConfirm passsword icon toggle
    const handleConfirmClickShowPassword = () => {
        setConfirm({ ...confirm, confirmPassword: !confirm.confirmPassword })
    }
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };
    const handleConfirmPasswordChange = (prop) => (event) => {
        setConfirm({ ...confirm, [prop]: event.target.value })
    };

    return (
        <div className='loginInputContainer'>
            <form>
                <div className='first-row-item'>
                    <div className='name-field' id='level-one'>
                        <label for="First Name">Name</label>
                        <input type="text" className="first-row-text" />
                    </div>
                    <div className='email-field' id='level-one'>
                        <label for="First Name">Email</label>
                        <input type="text" className="first-row-text" />
                    </div>
                </div>

                <div className='second-row-item'>
                    <div className='password-field' id='level-one'>
                        <label for="password">Password</label>
                        <div className="second-row-input-div" >
                            <input type={values.showPassword ? "text" : "password"} onChange={handlePasswordChange("password")} value={values.password} />
                            <span onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>{values.showPassword ? <VisibilityIcon className='visibleIcon' /> : <VisibilityOffIcon className='visibleOffIcon' />}</span>
                        </div>
                    </div>
                    <div className='confirm-password-field' id='level-one'>
                        <label for="confirm password">Confirm Password</label>
                        <div className="second-row-input-div">
                            <input type={confirm.confirmPassword ? "text" : "password"} onChange={handleConfirmPasswordChange("password")} value={confirm.password} />
                            <span onClick={handleConfirmClickShowPassword} onMouseDown={handleMouseDownConfirmPassword}>{confirm.confirmPassword ? <VisibilityIcon className='visibleIcon' /> : <VisibilityOffIcon className='visibleOffIcon' />}</span>
                        </div>

                    </div>
                </div>
                <div className='inputButtonContainer'>
                    <button type="submit">Sign Up</button>
                </div>
                <p className='optional-link'>Already have an account?<Link to={'VhiLogin'}>Login</Link></p>
            </form>

        </div>
    )
}

export default SignupInput