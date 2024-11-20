import React, { useState } from 'react'
import JoinWaitlistbtn from '../../components/joinWaitlistbtn/JoinWaitlistbtn'
import sunImage from "../../assets/images/light-Item image.png"
import SunImageWithText from '../../components/imageWithText/SunImageWithText'
const Home = () => {
    const [sunImageData, setSunImageData] = useState([
        {
         image:sunImage,
         title:"Write a Title Here.",
         description:"This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about, and add an engaging image or video.",
        },
        {
            image:sunImage,
            title:"Write a Title Here.",
            description:"This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about, and add an engaging image or video.",
        },
        {
            image:sunImage,
            title:"Write a Title Here.",
            description:"This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about, and add an engaging image or video.",
        },

    ])
  return (
    <>
    <section className='hero-section'>
        <div className="container mx-auto">
            <div className="flex justify-center heading-text">
            <div className=" basis-4/5">
                <h1>Revolutionize <span>Your</span> Cloud Architecture with <span className='clouditecture-text'>Clouditecture</span></h1>
            </div>
            </div>
            <div className="flex justify-center">
            <div className="text-content">
                <p>Our innovative AI-powered platform empowers you to design, deploy, and optimize cloud architecture effortlessly.</p>
            </div>
            </div>
            <div className="join-btn text-center">
            <JoinWaitlistbtn/>
            </div>
        </div>
    </section>
    <section className='black-section'>
    </section>

    <section className='sun-image-withText-section'>
    <div className="container mx-auto">
            {
                sunImageData.map((item,index)=>{
                    return <>
                    <SunImageWithText data={item} key={index} />
                    </>
                })
            }
        </div>
    </section>
    <section className='black-section'>

    </section>
    <section className='wait-list-section'>
        <div className="container mx-auto">
            <div className="heading-text">
            <h1>1010+</h1>
            <h2>On Waitlist</h2>
            </div>
            <div className="text-content mx-auto">
                <h4>Why Choose Clouditecture?</h4>
                <p>With Clouditecture, you can simplify complex cloud processes, enhance collaboration among teams, and ensure your architecture evolves with your business needs. Our tool is designed for both seasoned professionals and those new to cloud management, making it accessible for everyone</p>
            </div>
            <JoinWaitlistbtn/>
        </div>
    </section>
    <section className='black-section'>

    </section>
    </>
  )
}

export default Home