import React from 'react'
import IMAGES from '../../images/index.js'
import '../Pages/About.css'
import Vhi_footer from '../vhi_footer/Vhi_footer.jsx'


const About = () => {
  return (
    <div className='main_page'>

      <h1 className='Header'>About Us</h1>

      <p className='text'>At Vehicle Registration Services, we understand the importance of hassle-free <br />
        vehicle registration and the value of your time. We are a dedicated team of professionals committed to <br />
        providing you with efficient and streamlined vehicle registration services. With years of experience in the industry, <br />
        we have gained comprehensive knowledge of the registration process, making us your go-to source for all your registration needs.</p>

      <img id='image' src={IMAGES.imgNine} alt="" />
      <Vhi_footer />
    </div>


  )
}

export default About