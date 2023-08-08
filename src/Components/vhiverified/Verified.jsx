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

    const [randomContent, setRandomContent] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * randomContents.length);
        setRandomContent(randomContents[randomIndex]);
    }, []);



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
                </div>
            </div>

            <Vhi_footer />
        </motion.div>
    )
}

export default Verified