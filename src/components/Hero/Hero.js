import React from 'react';
import './Hero.css'
import green from '../images/playstore.png'
import apple from '../images/apple.png'


export default function Hero() {

  return (
     <div className='hero'>
        <div className='hero-div'>
            <p className='p1'>Order <span>food</span> anytime,<br />anywhere</p>
            <p>Browse from our list of specials to place your order and have food <br /> delivered to you in no time. Affordable, tasty and fast!</p>

            <div className='quick-links'>

               <div className='playstore'>
                <img alt='' src={green} className='first'></img>
               <span>Get it on <br /> <span className='google'>Google Play</span></span>
               </div>

               <div className='appstore'>
                <img alt='' src={apple} className='first'></img>
               <span>Download on the <br /> <span className='google'>App Store</span></span>
               </div>

            </div>
        </div>
        
        <div className='hero-img'>

        </div>

     </div>

  );

}