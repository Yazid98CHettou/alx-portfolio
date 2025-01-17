import React from "react";
import "../component/componentCSS/Login.css"; // Import the CSS file for Login

const Login = () => {
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form>
      <div className="form-group">
          <label htmlFor="email">Email</label>
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
