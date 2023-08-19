import React from 'react'
import './Login.css'
import {
  Link
} from 'react-router-dom';



function Login() {
  return (
    <div className="flex justify-center items-center">

      <div className="left md:w-1/2 h-[100vh] hidden md:block">

      </div>
      <div className="w-full md:w-1/2 h-[100vh] text-center flex flex-col justify-center items-center rightDiv">
         <h2 className='text-center text-[27px] pb-[1rem] font-semibold'>Welcome Back!</h2>
         <input className='px-2 rounded-md w-4/6 h-[3em] mb-2' type='email' placeholder='Your email address' required></input><br />
         <input className='px-2 rounded-md w-4/6 h-[3em] mb-2' type='password' placeholder='Your password' required></input><br />
         <button type='submit' className='rounded-md w-4/6 h-[3em] text-white text-lg login-btn'>Login</button>

         <div className='flex justify-between w-auto space-x-14 mt-5'>
         <Link to='/signup'>Create an account</Link>
            <span className='cursor-pointer text-blue-800'>Forgot Passoword?</span>
          </div>
      </div>

    </div>
  )    
}

export default Login