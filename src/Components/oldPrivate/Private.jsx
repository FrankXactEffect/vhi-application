import React from 'react'
import PrivateTxt from './privateTxt/PrivateTxt'
import PrivateInput from './privateInput/PrivateInput'
import { motion } from 'framer-motion'


function Private() {
    return (
        <motion.div>
            <PrivateTxt />
            <PrivateInput />

        </motion.div>
    )
}

export default Private