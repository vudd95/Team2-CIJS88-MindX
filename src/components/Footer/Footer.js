import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer-logo">
          <img src="/images/logo-colored.png"></img>
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="footer-logo__icon">
            <img src="/images/facebook.png"></img>
            <img src="/images/facebook.png"></img>
            <img src="/images/facebook.png"></img>
            <img src="/images/facebook.png"></img>
            <img src="/images/facebook.png"></img>
          </div>
        </div>
        <div className="footer-about">
          <h5>About</h5>
          <ul>
            <li>About us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-partnership">
          <h5>Partnership</h5>
          <ul>
            <li>About us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-information">
          <h5>Information</h5>
          <ul>
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-forUsers">
          <h5>For Users</h5>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Order</li>
          </ul>
        </div>
        <div className="footer-getApp">
        <h5>Get App</h5>
              <ul>
                <li><img src="/images/google-play.png"></img></li>
                <li><img src="/images/app-store.png"></img></li>
              </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2023 Ecommerce.</p>
      </div>
    </div>
  );
};

export default Footer;
