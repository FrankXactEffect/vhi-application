import Lottie from 'lottie-react'
import React, { useEffect, useState } from 'react'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import animationData from '../../images/animation_ll0uzdq0.json'
import './verified.css'
import { motion } from 'framer-motion'



function Verified() {


    const randomContents = [
        'LAG-256-348',
        'NYC-789-ABC',
        'SF-123-XYZ',
        'MIA-456-DEF',
        // Add more random content here
    ];

    const [randomContent, setRandomContent] = useState(
        localStorage.getItem('randomContent') || ''
    );

    const [countdown, setCountdown] = useState(null);


    useEffect(() => {
        if (!randomContent) {
            const randomIndex = Math.floor(Math.random() * randomContents.length);
            const newRandomContent = randomContents[randomIndex];
            setRandomContent(newRandomContent);
            localStorage.setItem('randomContent', newRandomContent);
        }

        const currentDate = new Date();
        const expirationDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate()); // Set your expiration date here
        const timeDifference = expirationDate - currentDate;

        setCountdown(timeDifference / 1000); // Convert milliseconds to seconds
    }, [randomContent]);

    useEffect(() => {
        if (countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        }
    }, [countdown]);

    const formatCountdown = () => {
        const days = Math.floor(countdown / 86400);
        const hours = Math.floor((countdown % 86400) / 3600);
        const minutes = Math.floor((countdown % 3600) / 60);
        const seconds = Math.floor(countdown % 60);

        return `${days} Days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    };





    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='verified-container'>
                <h1 className='banner_title'>Vehicle Plate Renewal</h1>
                <div className='size'>
                    <Lottie loop={true} animationData={animationData} />
                </div>
                <div className='Bottom_text'>
                    <h2>Your new plate number is <span>{randomContent}</span></h2>
                    <p className='expires'>Expires: {countdown ? <span>{formatCountdown()}</span> : 'Expired'}</p>
                </div>
            </div>

            <Vhi_footer />
        </motion.div>
    )
}

export default Verified