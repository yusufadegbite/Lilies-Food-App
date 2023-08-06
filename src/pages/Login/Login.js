import React from 'react'
import './Login.css'
import {
  Link
} from 'react-router-dom';
import loginImg from '../../components/images/loginimg.png';


function Login() {
  return (
    <div className='login'>
      <div className='left'>
      <img src={loginImg} alt=''></img>
      </div>
      <div className='right'>
          <h2>Welcome Back!</h2>
          <div className='login-form'>
             <input type='email' placeholder='Your email address' required></input><br />
             <input type='password' placeholder='Your password' required></input><br />
             <button type='submit' className='login-btn'><Link to='/dashboard'>Login</Link></button>
          </div>
          <div className='reset'>
            <span><Link to='/signup'>Create an account</Link></span>
            <span className='two'>Forgot Passoword</span>
          </div>
      </div>
    </div>
  )    
}

export default Login