import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//import Logitec from "../image/Logitech.png"; 
import Lamp1 from "../image/Lamp1.png"; 
import Silver from "../image/Silver.png"; 
import Gold from "../image/Gold.png"; 
import Lamp2 from "../image/Lamp2.png"; 

const Lamp = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row border-0 p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
          <img src={Lamp1} alt="Product" className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <h3>Auray 18-LED Desktop Gooseneck Light with USB Charger</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>LED Gooseneck Lamp with USB Charge Port</li>
              <li>For Pianos, Keyboards, and Desks</li>
              <li>18 LED Bulbs for Wide, Even Illumination</li>
              <li>One-Touch On/Off and Dimming</li>
              <li>5.5" Diameter Weighted Base</li>
              <li>Multivoltage AC Adapter</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$39.00</h4>
            <p>
              <small>
                <s>$50.00</s>
              </small>
            </p>
            <p className="text-success">Save Reg. $1,867.94</p>
            <p>
              <small className="text-muted">Limited supply at this price</small>
            </p>
            <button className="btn btn-success w-100">Add to Cart</button>
            <button className="btn btn-secondary w-100 mt-2">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row border-0 p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
          <img src={Gold} alt="Product" className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <h3>BenQ Genie e-Reading LED Light Desk Lamp (Gold)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>For Small Desktop or Single Laptop User</li>
              <li>Output: 500 (4000K) or 1000 Lux (5700K)</li>
              <li>2700-5700 CCT</li>
              <li>13 CCT & 23 Brightness Levels</li>
              <li>Built-In Ambient-Light Sensor</li>
              <li>Screen & Paper Mode Switch</li>
              <li>Onboard Control</li>
              <li>CRI 95, Flicker-Free Operation</li>
              <li>Covers Desks up to 35.4" Wide</li>
              <li>Curved Head Design, Patented Ball Joint</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$199.00</h4>
            <p>
              <small>
                <s>$249.00</s>
              </small>
            </p>
            <p>
            </p>
            <button className="btn btn-success w-100">Add to Cart</button>
            <button className="btn btn-secondary w-100 mt-2">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row border-0 p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
          <img src={Silver} alt="Product" className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <h3>BenQ Genie e-Reading LED Light Desk Lamp (Silver)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>For Small Desktop or Single Laptop User</li>
              <li>Output: 500 (4000K) or 1000 Lux (5700K)</li>
              <li>2700-5700 CCT</li>
              <li>13 CCT & 23 Brightness Levels</li>
              <li>Built-In Ambient-Light Sensor</li>
              <li>Screen & Paper Mode Switch</li>
              <li>Onboard Control</li>
              <li>CRI 95, Flicker-Free Operation</li>
              <li>Covers Desks up to 35.4" Wide</li>
              <li>Curved Head Design, Patented Ball Joint</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$199.00</h4>
            <p>
              <small>
                <s>$249.00</s>
              </small>
            </p>
            <p>
            </p>
            <button className="btn btn-success w-100">Add to Cart</button>
            <button className="btn btn-secondary w-100 mt-2">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row border-0 p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
          <img src={Lamp2} alt="Product" className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <h3>Fiilex V70 LED Color Viewing Lamp</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>Dense Matrix LED Technology</li>
              <li>Flexible Gooseneck</li>
              <li>Variable Color Control</li>
              <li>3000K, 4000K, 5000K, & 6500K Settings</li>
              <li>Continuous Dimming from 100-25%</li>
              <li>High CRI of &gt; 90 </li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$195.00</h4>
              <small className="text-muted">Limited supply at this price</small>
            
            <button className="btn btn-success w-100">Add to Cart</button>
            <button className="btn btn-secondary w-100 mt-2">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lamp;
