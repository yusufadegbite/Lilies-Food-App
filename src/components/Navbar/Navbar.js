import React from 'react';
import './Navbar.css';
import {
  Link
} from 'react-router-dom';
import logo1 from '../images/logo-below.png'
import logo2 from '../images/logo-above.png'


export default function Navbar() {

  return (
    <div className='navbar-div'>

        <div className='app-logo'>
        <img src={logo1} alt='Logo' className='logo-below'></img>
        <img src={logo2} alt='Logo' className='logo-above'></img>
        <span>Lilies</span>
        </div>

        <div className='nav-div'>
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