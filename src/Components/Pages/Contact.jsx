import React from 'react'

import '../Pages/Contact.css'
import IMAGES from '../../images/index.js'


const Contact = () => {
  return (
    <div className='Full_page'>

      <div>
        <h1 className='contact-us-txt'>Contact Us</h1>
        <p className='text'>We're here to help! Reach out to Us.</p>


        <form className='inputs'>
          <label htmlFor="">Name</label> <br />
          <input type="text" name="" id="box" />  <br />

          <label htmlFor="">E-mail</label> <br />
          <input type="text" name="" id="box" /> <br />

          <label htmlFor="">Text</label>  <br />
          <input type="text" name="" id="box2" />

          <button className='Submit'>Submit</button>
        </form>
      </div>

      <div>
        <img className='contact_img' src={IMAGES.imgTen} alt="" />
      </div>

    </div>






  )

}

export default Contact