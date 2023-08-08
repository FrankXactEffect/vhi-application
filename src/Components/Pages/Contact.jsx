import React from 'react'

import '../Pages/Contact.css'
import IMAGES from '../../images/index.js'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { motion } from 'framer-motion'


const Contact = () => {


  return (
    <motion.div className='Full_page'>
      <div className='contact-us-txt'>
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out to Us.</p>
      </div>

      <div className='contact_components'>
        <form className='inputs'>
          <div className='con_input_field'>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="box" />
          </div>

          <div className='con_input_field'>
            <label htmlFor="">E-mail</label>
            <input type="text" name="" id="box" />
          </div>

          <div className='con_input_field'>
            <label htmlFor="">Text</label>
            <input className='textareatxt' type="text" name="" />
          </div>

          <button className='Submit'>Submit</button>
        </form>


        <div className='contact_img'>
          <img src={IMAGES.imgTen} alt="" />
        </div>
      </div>

      <Vhi_footer />

    </motion.div>


  )

}

export default Contact