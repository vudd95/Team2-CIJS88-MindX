import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";

import { rootData } from "../../App";



const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  //handle Login logic
  const handleLogin = (userData) => {

    
    let isMatch = false
      for (let i = 0; i< rootData.length; i++){
        
        console.log(rootData[i])
        if(rootData[i].email === userData.email && rootData[i].password === userData.password){
          navigate('/')
          isMatch = true
          localStorage.setItem('userInfo', JSON.stringify(userData))
          break
          
        }      
      }
      if(isMatch == false) alert("Wrong email or password")
      console.log(userData)

      // const datafromLocal = JSON.parse(localStorage.getItem('userInfo'))
      
    }
    
  
  return (
    <div className="login">
      <div className="login-content">
        <div className="div-content__logo">
          <img src="/images/logo-colored.png"></img>
        </div>
        <div className="div-content__ welcomeback">
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
          <input
            placeholder="Email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          ></input>
        </div>
        <div className="div-content__button">
          <button onClick={() => handleLogin(userInfo)}>Sign in</button>
          <button>
            <Link to={"/signup"}>Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
