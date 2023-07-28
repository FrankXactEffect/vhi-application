import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ControlNavBar({ children }) {

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false);


    useEffect(() => {
        console.log('this is location', location)
        if (location.pathname === '/') {
            setShowNavBar(false)
        } else if (location.pathname === '/VhiSignup') {
            setShowNavBar(false)
        } else if (location.pathname === '/VhiLogin') {
            setShowNavBar(false)
        } else if (location.pathname === '/VhipasswordRecovery') {
            setShowNavBar(false)
        } else if (location.pathname === '/basicAboutus') {
            setShowNavBar(false)
        } else if (location.pathname === '/basicFaq') {
            setShowNavBar(false)
        } else if (location.pathname === '/basicContact') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])


    return (
        <div>{showNavBar && children}</div>
    )
}

export default ControlNavBar