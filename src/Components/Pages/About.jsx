import React from 'react'
import IMAGES from '../../images/index.js'
import '../Pages/About.css'
import Vhi_footer from '../vhi_footer/Vhi_footer.jsx'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div
      className='main_page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <h1 className='Header'>About Us</h1>

      <p className='text'>At Vehicle Registration Services, we understand the importance of hassle-free <br />
        vehicle registration and the value of your time. We are a dedicated team of professionals committed to <br />
        providing you with efficient and streamlined vehicle registration services. With years of experience in the industry, <br />
        we have gained comprehensive knowledge of the registration process, making us your go-to source for all your registration needs.</p>

      <img id='image' src={IMAGES.imgNine} alt="" />
      <Vhi_footer />
    </motion.div>


  )
}

export default About