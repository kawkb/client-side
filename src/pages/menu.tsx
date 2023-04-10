import React from 'react'
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <div className='menu-container pattern-background green-pattern'>
        <div className='retro-border-box light-box menu-box copy-book-background'>
        <Link to="/home" className='menu-links'>home</Link>
        <Link to="/profil" className='menu-links'>profil</Link>
        <Link to="/chat" className='menu-links'>chat</Link>
        </div>
    </div>
  )
}

export default Menu