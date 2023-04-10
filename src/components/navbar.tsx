import React from 'react'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='nav-container'>
            <nav>
                <Link to="/menu" className='nav-links'>Menu</Link>
                <Link to='/' className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/Bell" className='nav-links'>Bell</Link>
            </nav>
        </div>
    )
}

export default Navbar