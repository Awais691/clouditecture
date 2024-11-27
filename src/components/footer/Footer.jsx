import React from 'react'
import siteLogo from "../../assets/images/siteLogo.png"
import linkedIn from "../../assets/images/linkedin-icone.png"
import instaghram from "../../assets/images/instaghram-icone.png"
import facebook from "../../assets/images/facebook-icone.png"
import discord from "../../assets/images/discord-icone.png"
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-between main-box ">
                <div className="box  md:basis-2/4 basis-full">
                    <div className="site-logo md:text-start text-center">
                        <a href="#" className='flex md:justify-start justify-center'><img className='' src={siteLogo} alt={siteLogo} /></a>
                        <p>Transforming visions into cloud reality</p>
                    </div>
                    <div className="social-icone">
                        <ul className='flex md:justify-start justify-center'>
                            <li><a href="#"><img src={linkedIn} alt={linkedIn} /></a></li>
                            <li><a href="#"><img src={instaghram} alt={instaghram} /></a></li>
                            <li><a href="#"><img src={facebook} alt={facebook} /></a></li>
                            <li><a href="#"><img src={discord} alt={discord} /></a></li>
                        </ul>
                    </div>
                    <div className="text-content md:text-start text-center">
                        <p>@ 2024 Clouditecture, Inc. All rights reserved.</p>
                    </div>
                </div>
                <div className="box basis-1/4">
                    <h5>Location</h5>
                    <p>PTCL Training center,University Rd, near BISE,Canal Town Peshawar,Khyber Pakhtunkhwa 25000</p>
                </div>
                <div className="box basis-1/4">
                <h5>legal</h5>
                <ul>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li className='mt-5'><a href="#">Clouditecture@gmail.com</a></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer