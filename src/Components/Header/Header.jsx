import React from 'react';
import './header.css';
import king from '../../Images/coinking.png';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Header() {
  return (
    <div className='header'>
        <div className='headerFonts'>
          <h1 className='headerTitle'>Coin Kings</h1>
          <h3 className='headerUnderTitle'>Know your Coins?</h3>
          <p className='headerSubline'>Make Picks. Outperform. Monetise.</p>
          <div className="btns">
            <button className='learnBtn'>Play Now</button>
            <Link to="section1" spy={true} smooth={true} duration={500}><button className='learnBtn'>Learn More</button></Link>
          </div>
        </div>
        <img className='kingImg' src={king} alt="king" />
    </div>
  )
}
