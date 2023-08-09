import React from 'react'
import './vhiMainHome.css'
import HomeText from '../home/hometext/HomeText'
import HomeBanner from '../home/homeBanner/HomeBanner'
import { motion } from 'framer-motion'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import InstructionsModal from '../instructionModal/InstructionsModal.jsx'; // Import the modal component
import { useState } from 'react'


function VhiMainHome() {

    const [isModalOpen, setIsModalOpen] = useState(true); // Set initial value to true for modal to show on page load

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HomeText />
            <HomeBanner />
            <Vhi_footer />
            <InstructionsModal isOpen={isModalOpen} closeModal={closeModal} /> {/* Add the modal component */}
        </motion.div>
    )
}

export default VhiMainHome