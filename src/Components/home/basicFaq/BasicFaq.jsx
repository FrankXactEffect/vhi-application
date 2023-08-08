import React from 'react'
import HomeNavCom from '../homeNavComponent/HomeNavCom'
import Faq from '../../Pages/Faq'
import { motion } from 'framer-motion'


function BasicFaq() {
    return (
        <motion.div>
            <HomeNavCom />
            <Faq />
        </motion.div>
    )
}

export default BasicFaq