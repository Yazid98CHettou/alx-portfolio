import React from "react";
import "../component/componentCSS/Singup.css"; // Import the CSS file
import Image from "../image/Login.png";

const Singup = () => {
  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form>
      <div className="form-group">
          <img src={Image} alt=""></img>
        </div>
        <div className="form-group">
          <label htmlFor="username">Uername</label>
        </div>
        <div className="form-group">
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="email ">Email</label>
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
        </div>
        
        <div className="form-group">
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        
      </form>
    </div>
  );
};

export default Singup;
