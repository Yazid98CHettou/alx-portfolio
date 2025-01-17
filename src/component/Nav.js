import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import '../component/componentCSS/Nav.css';
const Nav = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      {/* Link href CSS */}
      <link rel="stylesheet" href="Nav.css" />
      {/* Font Awesome for icons */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      <div className="sidebar">
        {/* Profile Section */}
        <div className="profile-section">
          <p className="greeting">Yazid Eco</p>
        </div>
        {/* Menu Section */}
        <div className="menu-section">
          <ul className="menu-list">
            {/*First Item */}
            <li className="menu-item">
              <i className="fa fa-home" />
              <Link className="menu-text" to="/Home">Home</Link>
            </li>
            {/*Second Item */}
            <li className="menu-item">
              <i className="fas fa-shopping-cart" />
              <Link   className="menu-text" to="/Shopping">shopping-cart</Link>
            </li>
            {/*3 Item */}
            <li className="menu-item">
              <i className="fa fa-sign-in-alt" />
              <Link   className="menu-text" to="/Authentification">Login</Link>
            </li>
            {/*4 Item 
            <li className="menu-item">
              <i className="fa fa-user-circle" />
              <Link   className="menu-text" to="/User">User</Link>
            </li>*/}
            {/*5 Item */}
            <li className="menu-item">
              <i className="fa fa-info" />
              <Link   className="menu-text" to="/About">About the Website</Link>
            </li>
            {/*6 Item */}
            <li className="menu-item">
              <i className="fa fa-question" />
              <Link   className="menu-text" to="/Help">Help</Link>
            </li>
            {/*7 Item */}
            <li className="menu-item">
            <i className="fas fa-file" />
            <Link   className="menu-text" to="/NewsletterForm">Newsletter</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
/**
 
 
 */
