import React from 'react'
import './forgotInput.css'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function ForgotInput() {
    return (
        <div className='fogotInputContainer'>
            <form >
                <input type="text" placeholder='Enter you email' />
                <button type='submit'>Reset Password</button>
                <Link to={'VhiLogin'}><span><KeyboardBackspaceIcon /></span>Back to login</Link>
            </form>
        </div>
    )
}

export default ForgotInput