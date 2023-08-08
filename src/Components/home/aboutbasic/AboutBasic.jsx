import React from 'react'
import HomeNavCom from '../homeNavComponent/HomeNavCom'
import About from '../../Pages/About'
import { motion } from 'framer-motion'

function AboutBasic() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <HomeNavCom />
            <About />
        </motion.div>
    )
}

export default AboutBasic