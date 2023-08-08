import React from 'react'
import './faqItems.css'
import { motion } from 'framer-motion'

function FaqItems() {
    return (
        <motion.div className='faq_text_container'>

            <h1>Frequently Asked Questions</h1>
            <p>Stuck on something? we are here to help with all your question and answers</p>

        </motion.div>
    )
}

export default FaqItems