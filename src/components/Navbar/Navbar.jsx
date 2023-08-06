import React from 'react';
import './Navbar.css';
import {
  Link
} from 'react-router-dom';
import logo from '../images/logo.png'



export default function Navbar() {

  return (
    <div className='navbar-div mx-8 my-[1em] md:mx-[6em] py-5 px-3'>

        <div className='app-logo flex'>
        <img src={logo} alt='Logo' className='logo w-[20%]'></img>
        <span className='px-2 pt-4'>Lilies</span>
        </div>

        <div className='nav-div hidden md:block'>
          <nav>
             <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup' className='sign-up-link'>Sign Up</Link></li>
             </ul>
           </nav>
        </div>

    </div>
  );

}