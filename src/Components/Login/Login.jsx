import React from "react";
import "./Login.css";
// import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <h1>Batting App</h1>
          <div className="login-content">
            <input type="text" className="loginInput" id="loginInput" placeholder="Type Here!" />
            
          </div>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
