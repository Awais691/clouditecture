import React, { useState } from 'react'
import siteLogo from "../../assets/images/siteLogo.png"
import JoinWaitlistbtn from '../joinWaitlistbtn/JoinWaitlistbtn'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
<header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="site-logo">
            <a href="#"><img src={siteLogo} alt="Site Logo" /></a>
          </div>
          {/* Toggle Button for Small Screens */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✖' : '☰'}</div>
          {/* Menu Section */}
          <div className={`menu flex ${menuOpen ? 'active' : ''}`}>
            <ul className="flex items-center">
              <li><a href="#">Feature</a></li>
              <li><a href="#">Why Us</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="join-waitlist-wrapper">
              <JoinWaitlistbtn />
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header