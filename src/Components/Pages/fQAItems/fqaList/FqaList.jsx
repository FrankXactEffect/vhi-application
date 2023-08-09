import React from 'react'
import './fqaList.css'
import IMAGES from '../../../../images/index.js'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'


function FqaList() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='faqList_container'>
            <motion.div className='left'>
                <Fade>
                    <div className='Date_time'>
                        <img src={IMAGES.imgEleven} id='img1' alt="" />
                        <div className='flex'>
                            <h3>How long does it take for renewal of plate?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                                number will lbe assigned to you for a yea</p>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className='car'>
                        <img src={IMAGES.imgTwelve} alt="" />
                        <div className='flex'>
                            <h3>Can i register multiple vehicles?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                                number will lbe assigned to you for a year.</p>
                        </div>
                    </div>
                </Fade>


                <Fade>
                    <div className='file'>
                        <img src={IMAGES.imgThirteen} alt="" />
                        <div className='flex'>
                            <h3>Can i register without letter of attestation?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                                number will lbe assigned to you for a year.</p>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className='file'>
                        <img src={IMAGES.imgEleven} alt="" />
                        <div className='flex'>
                            <h3>Can i register without letter of attestation?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                                number will lbe assigned to you for a year.</p>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className='file'>
                        <img src={IMAGES.imgEleven} alt="" />
                        <div className='flex'>
                            <h3>Can i register without letter of attestation?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                                number will lbe assigned to you for a year.</p>
                        </div>
                    </div>
                </Fade>
            </motion.div>


            <motion.div className='right'>
                <img src={IMAGES.imgFourteen} alt="" />
            </motion.div>




        </motion.div>
    )
}

export default FqaList