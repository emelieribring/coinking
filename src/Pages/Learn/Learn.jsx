import React from 'react';
import './learn.css';

export default function Learn() {
  return (
    <div id="section1" className='learn'>
        <div className="learnBox"><span>How <blockquote></blockquote></span> it<span> <br /> works</span></div>
        <div className="cards">
            <div className="card">
                <p className='step'><span>Step</span>1</p>
                <p className='hoverText'><span>Choose your favourite coins</span> <br />Simply select your picks on your profile page</p>
            </div>
            <div className="card">
                <p className='step'><span>Step</span>2</p>
                <p className='hoverText'><span>Beat the market</span> <br /> We will track how you have performed</p>
            </div>
            <div className="card">
                <p className='step'><span>Step</span>3</p>
                <p className='hoverText'><span>Get invited to be a member of Coin Kings</span> <br /> Anyone who consistently outperforms the market will be invited to open up their profile.</p>
            </div>
        </div>
    </div>
  )
}
