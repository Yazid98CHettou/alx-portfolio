import React, { useState } from "react";
import Login from "../component/Login";
import Singup from "../component/Singup";
import "../pages/PagesCSS/Authentification.css";
import Background from "../component/background";
const Authentification = () => {
  const [isSingup, setIsSingup] = useState(true);
  const toggleForm = () => {
    setIsSingup(!isSingup); // Switch between true and false
  };
  return (
    <>
      <Background />
      <center>
        <div className="auth-container">
          {/* Conditionally render the Login or Signup component */}
          {isSingup ? <Singup /> : <Login />}
          {/* Button to toggle between Login and Signup */}
          <></>
          <button className="toggle-button" onClick={toggleForm}>
            {isSingup
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </button>
        </div>
      </center>
    </>
  );
};

export default Authentification;
