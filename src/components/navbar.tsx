import React from 'react'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='nav-container'>
            <nav>
                <Link to="/chat" className='nav-links'>Chat</Link>
                <Link to='/' className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/game" className='nav-links'>Play</Link>
            </nav>
        </div>
    )
}

export default Navbar