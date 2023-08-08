import React from 'react'
import HomeNavCom from './homeNavComponent/HomeNavCom'
import HomeText from './hometext/HomeText'
import HomeBanner from './homeBanner/HomeBanner'
import { motion } from 'framer-motion'

function VhiHome() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HomeNavCom />
            <HomeText />
            <HomeBanner />
        </motion.div>
    )
}

export default VhiHome