import React from 'react';
import './Hero.css'
import playstore from '../images/Badges.png'


export default function Hero() {

  return (
     <div className='hero my-3 mx-8 md:mx-[6em] md:my-[4em]'>
        <div className='hero-div mt-[3.8em] text-center md:text-left'>
            <p className='p1'>Order <span>food</span> anytime,<br />anywhere</p>
            <p className='py-5 hidden md:block'>Browse from our list of specials to place your order and have food <br /> delivered to you in no time. Affordable, tasty and fast!</p>
            <p className='py-8 px-4 block md:hidden'>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>

            <div className='quick-link flex flex-col items-center justify-center md:justify-start md:items-start'>
                <img alt='' src={playstore} className=''></img>
            </div>

        </div>
        
        <div className='hero-img hidden md:block'>

        </div>

     </div>

  );

}