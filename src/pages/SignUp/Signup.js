import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { rootData } from "../../App";
import userEvent from "@testing-library/user-event";


const Signup = () => {

  const navigate = useNavigate()


  const [dataInputSignUp, setDataInputSignUp] = useState({email:"", password:""})

  const handleSignUp = (userData) =>{
    rootData.push(userData)
    navigate('/login')
    console.log(rootData)
  }

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
          <input placeholder="Email" onChange={(e) => setDataInputSignUp({...dataInputSignUp, email: e.target.value})}></input>
          <input placeholder="Password" type="password" onChange={(e) => setDataInputSignUp({...dataInputSignUp, password: e.target.value})}></input>
          <input placeholder="Retype password" type="password"></input>
        </div>
        <div className="div-content__button">
          {/* <button>
            <Link to={"/login"}>Sign in</Link>
          </button> */}
          <button onClick={() => handleSignUp(dataInputSignUp)}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
