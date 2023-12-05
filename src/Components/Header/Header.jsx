import React from 'react';
import './header.css';
import king from '../../Images/coinking.png';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Header() {
  return (
    <div className='header'>
        <img className='kingImg' src={king} alt="king" />
        <h1 className='headerTitle'>Coin Kings</h1>
        <h3 className='headerUnderTitle'>Know your Coins?</h3>
        <ul className='headerUl'>
            <li className='headerLi'>Make Picks</li>
            <li className='headerLi'>Outperform</li>
            <li className='headerLi'>Monetise</li>
            <li className='headerLi'>Can you become a Coin King?</li>
        </ul>
        <div className="btns">
          <button className='learnBtn'>Play Now</button>
          <Link to="section1" spy={true} smooth={true} duration={500}><button className='learnBtn'>Learn More</button></Link>
        </div>
    </div>
  )
}
