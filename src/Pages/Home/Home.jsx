import React from 'react';
import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Learn from '../Learn/Learn';

export default function Home() {
  return (
    <>
    <div className='home'>
        <Navbar/>
        <Header/>
        <div className='overlap'></div>
    </div>
    <Learn/>
    </>
  )
}
