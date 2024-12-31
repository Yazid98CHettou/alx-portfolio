import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Button} from 'react-router-dom';
import "./Nav.css";
const Laptop = ({ image, title, text ,buttontext,href}) => {
  return (
    <div>
      <div className="card" style={{marginTop:"0.5rem" }}>
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          {text}
          </p>
          <Button to={href} className="btn btn-primary">
            {buttontext}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
