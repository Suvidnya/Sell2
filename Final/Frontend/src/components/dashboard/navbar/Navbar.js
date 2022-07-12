import React, { useEffect, useContext, useState } from 'react'
import AuthConext from '../../../pages/dashboard/AuthContext'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import search from '../images/search.png'
import './Navbar.css'




const Navbar = (user) => {

    const context = useContext(AuthConext)
    

return (
    <>
        <nav>
            <div className='nav-div'>
                <ul>
                    <li className='logo'> <img src={logo} alt="" /></li>
                    <li className='inputLi'>
                        <input type="search" placeholder='Search products to buy' name="search" id="" />
                        <img src={search} alt="" />
                    </li>
                    <li>
                        <div className='profile-sellbtn'>
                            <a href="/sell"><button>+Sell</button></a>
                            <a className='profileLogo' href="/profile"><img src={profile} alt="" /></a>
                            <p style={{ color: 'pink' }}>hi {!user ? "login" : user.name}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)
}

export default Navbar