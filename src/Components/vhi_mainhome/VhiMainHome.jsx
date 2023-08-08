import React from 'react'
import './vhiMainHome.css'
import HomeText from '../home/hometext/HomeText'
import HomeBanner from '../home/homeBanner/HomeBanner'
import { motion } from 'framer-motion'
import Vhi_footer from '../vhi_footer/Vhi_footer'

function VhiMainHome() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HomeText />
            <HomeBanner />
            <Vhi_footer />
        </motion.div>
    )
}

export default VhiMainHome