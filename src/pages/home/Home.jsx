import React, { useState } from 'react'
import JoinWaitlistbtn from '../../components/joinWaitlistbtn/JoinWaitlistbtn'
import sunImage from "../../assets/images/light-Item image.png"
import SunImageWithText from '../../components/imageWithText/SunImageWithText'
import ceoImage from "../../assets/images/ceo-img.png"
import Accordion from '../../components/accordion/Accordion'
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
    <section className='founder-section'>
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 ">
                <div className="left-side">
                    <div className="box">
                        <h4>Founders Note</h4>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Eget interdum sagittis sit eu nulla eu sollicitudin urna. Tortor id turpis ut ullamcorper. Mi consectetur suscipit augue scelerisque vitae sed donec tortor interdum. Nisi nunc lacus sed cursus. Sem feugiat iaculis amet eget sed quis id. Scelerisque nunc enim sit leo in venenatis ac. Cras lorem mattis ac amet. Tincidunt cursus natoque sem maecenas neque tellus in. Amet viverra bibendum etiam purus ultricies diam. Etiam massa molestie viverra egestas morbi cras tortor aliquam pharetra. Vel gravida maecenas quis nisl. Amet at tellus scelerisque vulputate. Vulputate cursus sed vel facilisis. Est eu orci velit pulvinar tortor fringilla faucibus ultrices ante.  Etiam massa molestie viverra egestas morbi cras tortor aliquam pharetra. Vel gravida maecenas quis nisl.  Etiam massa molestie viverra egestas morbi cras tortor aliquam pharetra. Vel gravida maecenas quis nisl.  Etiam massa molestie viverra egestas morbi cras tortor aliquam pharetra. Vel gravida maecenas quis nisl.
                        </p>
                        <div className="ceo">
                            <div className="flex items-center ceo-box ">
                                <div className="image"><img src={ceoImage} alt={ceoImage} /></div>
                                <div className="text-content">
                                    <h6>Muhammad Zulqarnain Awan</h6>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="box">
                        <h4>Our Mission</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Eget interdum sagittis sit eu nulla eu sollicitudin urna. Tortor id turpis ut ullamcorper. Mi consectetur suscipit augue scelerisque vitae sed donec tortor interdum. Nisi nunc lacus sed cursus. Sem feugiat iaculis amet eget sed quis id. Scelerisque nunc enim sit leo in venenatis ac. Cras lorem mattis ac amet. Tincidunt cursus natoque sem maecenas neque tellus in. Amet viverra bibendum etiam purus ultricies diam.</p>
                    </div>
                    <div className="box">
                        <h4>Our Vission</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Eget interdum sagittis sit eu nulla eu sollicitudin urna. Tortor id turpis ut ullamcorper. Mi consectetur suscipit augue scelerisque vitae sed donec tortor interdum. Nisi nunc lacus sed cursus. Sem feugiat iaculis amet eget sed quis id. Scelerisque nunc enim sit leo in venenatis ac. Cras lorem mattis ac amet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='black-section'>
    </section>
    <section className='faq-section'>
        <div className="container mx-auto">
        <div className="accordion-heading">
                <h3>Frequently asked questions</h3>
            </div>
            <Accordion/>
        </div>
    </section>
    <section className='contact-us-section'>
        <div className="container mx-auto">
            <h3>Contact Us</h3>
            <form>
                    <div className="grid grid-cols-2 input-box">
                    <div className="left-side">
                        <label for="full-name">full name</label>
                        <input type="text" className='input' placeholder='Your Good Name' id='full-name' name="fullName" />
                    </div>
                    <div className="right-side">
                    <label for="email">mail</label>
                    <input type="email" placeholder='example@mail.com' id='email' name="email" />
                    </div>
                    </div>
                    <div className="comment-box">
                    <label for="comment ">comment</label>
                    <textarea name="comment" placeholder='comment' id="comment"></textarea>
                    </div>
            </form>
        </div>
    </section>

    </>
  )
}

export default Home