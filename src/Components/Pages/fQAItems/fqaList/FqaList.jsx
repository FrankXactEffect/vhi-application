import React from 'react'
import './fqaList.css'
import IMAGES from '../../../../images/index.js'
function FqaList() {
    return (
        <div className='faqList_container'>
            <div className='left'>
                <div className='Date_time'>
                    <img src={IMAGES.imgEleven} id='img1' alt="" />
                    <div className='flex'>
                        <h3>How long does it take for renewal of plate?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a yea</p>
                    </div>
                </div>


                <div className='car'>
                    <img src={IMAGES.imgTwelve} alt="" />
                    <div className='flex'>
                        <h3>Can i register multiple vehicles?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a year.</p>
                    </div>
                </div>



                <div className='file'>
                    <img src={IMAGES.imgThirteen} alt="" />
                    <div className='flex'>
                        <h3>Can i register without letter of attestation?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a year.</p>
                    </div>
                </div>

                <div className='file'>
                    <img src={IMAGES.imgEleven} alt="" />
                    <div className='flex'>
                        <h3>Can i register without letter of attestation?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a year.</p>
                    </div>
                </div>


                <div className='file'>
                    <img src={IMAGES.imgEleven} alt="" />
                    <div className='flex'>
                        <h3>Can i register without letter of attestation?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a year.</p>
                    </div>
                </div>
            </div>


            <div className='right'>
                <img src={IMAGES.imgFourteen} alt="" />
            </div>




        </div>
    )
}

export default FqaList