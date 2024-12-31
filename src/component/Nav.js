import React from "react";
//import { NavLink } from "react-router-dom";
//import '../Pages/Home';

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">LOGO</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Shop">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Help">Help</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
