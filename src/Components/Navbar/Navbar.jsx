import React from 'react';
import './navbar.css';
import logo from '../../Images/4.png';

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="logo" />
        <div className='navBtn'>
            <button className='aboutBtn'>About</button>
            <button className='loginBtn'>Log In</button>
        </div>
    </div>
  )
}
