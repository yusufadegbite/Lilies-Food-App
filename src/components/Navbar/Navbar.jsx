import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import openMenu from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
   setToggle(!toggle);
  }

  return (
    <>
      {/* large screen navbar */}
      <div className="navbar-div flex-wrap mx-8 mt-[1em] md:mx-[6em] py-4 px-3">
        <div className="app-logo flex">
          <img src={logo} alt="Logo" className="logo w-[20%]"></img>
          <span className="px-2 pt-4">Lilies</span>
        </div>

         <div onClick={handleToggle} className="block md:hidden mt-8 cursor-pointer">
          {toggle ? <img src={closeMenu} alt="" /> : <img src={openMenu} alt="" /> }
         </div>

        <div className="nav-div hidden md:block">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="sign-up-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {toggle && (
            <div className="flex text-white py-2 basis-full flex-col items-center transition-all">
              <nav>
            <ul className="pt-4 space-y-4 text-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="sign-up rounded-md py-2 px-3">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
            </div>
        )}

        
      </div>
    </>
  );
}
