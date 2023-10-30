import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
            <li className="active">
              <Link to={"/login"}>Sign in</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="div-content__input">
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
        </div>
        <div className="div-content__button">
          <button>
            Sign in
          </button>
          <button>
            <Link to={"/signup"}>Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
