import React from 'react'

import FaqItems from './fQAItems/FaqItems.jsx'
import FqaList from './fQAItems/fqaList/FqaList.jsx'
import Vhi_footer from '../vhi_footer/Vhi_footer.jsx'
import { motion } from 'framer-motion'



const Faq = () => {
    return (

        <motion.div>
            <FaqItems />
            <FqaList />
            <Vhi_footer />
        </motion.div>

    )

}

export default Faq