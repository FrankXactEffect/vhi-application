import React from 'react'
import './homeText.css'
import { Fade, Flip, Reveal, Slide } from 'react-awesome-reveal'


function HomeText() {
    return (
        <div className='homeTextContainer'>
            <Fade>
                <h1>Register and renew your<br />plate number today.</h1>
            </Fade>
            <Slide>
                <p class>Register and renew your plate number today.</p>
            </Slide>
        </div>
    )
}

export default HomeText