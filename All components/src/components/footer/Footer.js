import React from 'react'
import './Footer.css'
import fb from '../images/fb.png'
import logo from '../images/logo.png'
import insta from '../images/insta.png'
import twitter from '../images/twiter.png'
import yt from '../images/yt.png'


const Footer = () => {
  return (
    <>
        <footer>
            <div className='footerdiv1'>
                <div>
                    <h5>Campus Olx</h5>
                    <p>nsequat. Duis aute irure dolor in reprehenderit in voluptate velit. nsequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                </div>
                <div>
                    <h5>Browse Categories</h5>
                    <ul>
                        <li>Electronic</li>
                        <li>Books</li>
                        <li>Bycycle</li>
                        <li>Daily uses</li>
                    </ul>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <ul>
                        <li>Indian Institute of Tehcnology Guwahati, Guwahati, Assam </li>
                        <li>Department: Chemical Science and Technology</li>
                        <li>0123654789</li>
                    </ul>
                </div>
                <div>
                    <h5>Follow Us</h5>
                    <ul>
                    <li>Instagram <img src={insta} alt="" /></li>
                    <li>Facebook <img src={fb} alt="" /></li>
                    <li>Twitter <img src={twitter} alt="" /></li>
                    <li>Youtube <img src={yt} alt="" /></li>
                    </ul>
                </div>
                <div>
                    <h5>About Us</h5>
                    <p>nsequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                </div>
            </div>
            <div className='footerdiv2'>
                <p><img src={logo} alt="" />Campus OlX</p>
                <span></span>
                <p>Copyright © 2022 Campusolx.com</p>
            </div>
        </footer>
    </>
  )
}

export default Footer