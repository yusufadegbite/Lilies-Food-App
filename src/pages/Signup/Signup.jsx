import React from 'react';
import './Signup.css'
import {
    Link
  } from 'react-router-dom';
import signupImg from '../../components/images/signup.png'

function Signup() {
  return (
   <form class="form-control w-50" method="POST" action="../php/register.php">
     <div className='signUp'>
           <div className='left'>
      <img src={signupImg} alt=''></img>
      </div>
      <div className='right'>
          <h2>Welcome To Lilies!</h2>
          <div className='login-form'>
          <input type='text' id='fullname' name='fullname' placeholder='Your first name' required></input><br />
             <input type='email' placeholder='Your email address' id='email' name='email' required></input><br />
             <input type='password' id='password' name='password' placeholder='Your password' required></input><br />
             <button type='submit' name='submit' className='login-btn'><a href='/'>Sign Up</a></button>
          </div>
          <div className='reset'>
            <span>Already have an account? <Link to='/login'>LOGIN</Link></span>
          </div>
      </div>
    </div>
   </form>
  )
}

export default Signup