import React from 'react'
import './NavBarCss.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <nav>
                <Link to ='/' >
                    <li>Home</li>
                </Link>
                <Link to ='/about'>
                    <li>About</li>
                </Link>
                <Link to ='/contact'>
                    <li>Contact Us</li>
                </Link>
            </nav>
        </>
    )
}

export default NavBar