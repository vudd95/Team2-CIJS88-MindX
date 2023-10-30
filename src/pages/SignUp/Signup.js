import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="div-content__logo">
          <img src="/images/logo-colored.png"></img>
        </div>
        <div className="div-content__welcomeback">
          <h1>Welcome Back</h1>
        </div>
        <div className="div-content__switchPage">
          <ul>
            <li>
              <Link to={"/login"}>Sign in</Link>
            </li>
            <li className="active">
              <Link to={"/signup"}>Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="div-content__input">
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
          <input placeholder="Retype password"></input>
        </div>
        <div className="div-content__button">
          {/* <button>
            <Link to={"/login"}>Sign in</Link>
          </button> */}
          <button>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
