import React from "react";
import "./Footer.css";
import green from "../images/playstore.png";
import apple from "../images/apple.png";
import insta from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

export default function Hero() {
  return (
    <div className="footer-div">
      <div className="footer">
        <div className="footer-element">
          <p className="top">Company</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-element">
          <p className="top">Support</p>
          <p>Help Center</p>
          <p>Safety Center</p>
        </div>

        <div className="footer-element">
          <p className="top">Legal</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Dispute resolution</p>
        </div>

        <div className="footer-element">
          <p className="top-special">Install App</p>

          <div className="playstore">
            <img alt="" src={green} className="first"></img>
            <span>
              Get it on <br /> <span className="google">Google Play</span>
            </span>
          </div>

          <div className="appstore">
            <img alt="" src={apple} className="first"></img>
            <span>
              Download on the <br /> <span className="google">App Store</span>
            </span>
          </div>
        </div>
      </div>

      <hr />
      <div className="foot">
      
      <div>
      <p className="copy">© 2021 LILIES, All rights reserved</p>
      </div>

      <div className="social-links">
        <img alt="insta icon" src={insta}></img>
        <img alt="insta icon" src={twitter}></img>
        <img alt="insta icon" src={youtube}></img>
        </div>

    </div>

    </div>
  );
}
