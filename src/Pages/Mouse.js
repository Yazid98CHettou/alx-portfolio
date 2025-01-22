import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import LogitechM from "../image/LogitechM.png";
import LogitechM2 from "../image/LogitechM2.png";
import LogitechM3 from "../image/LogitechM4.png";
import Apple from "../image/Apple.png";

const Mouse = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row border-0 p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
            <img src={LogitechM} alt="Product" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Logitech MX Master 3S Wireless Mouse (Black)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>2.4 GHz RF & Bluetooth LE Connectivity</li>
              <li>8000 dpi Darkfield Optical Sensor</li>
              <li>Quiet Click Buttons</li>
              <li>MagSpeed Electromagnetic Scrolling</li>
              <li>Logi Options+ Compatible</li>
              <li>Up to 70 Days Battery Life</li>
              <li>Low-Profile Design</li>
              <li>Logi Bolt USB Receiver Included</li>
              <li>Compatible with Multiple Platforms</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$89.99</h4>
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
            <img src={LogitechM2} alt="Product" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Logitech M240 Silent Wireless Mouse (Graphite)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>Bluetooth Connectivity</li>
              <li>Near-Silent Clicking</li>
              <li>18-Month Battery Life</li>
              <li>Contoured Shape</li>
              <li>Ambidextrous Design</li>
              <li>Multiplatform Support</li>
            </ul>
          </div>
          {/* Third Column: Price and Button */}
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$19.99</h4>
            <p>
              <small>
                <s>$25,.00</s>
              </small>
            </p>

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
            <img src={LogitechM3} alt="Product" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Apple Magic Mouse (White)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>Wireless and Rechargeable</li>
              <li>Multi-Touch Surface for Gestures</li>
              <li>Pairs Automatically with Mac</li>
              <li>Woven USB Type-C to Lightning Cable</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$79.99</h4>
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
            <img src={Apple} alt="Product" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Apple Magic Mouse (USB-C, Black)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>USB-C Port</li>
              <li>Wireless and Rechargeable</li>
              <li>Multi-Touch Surface for Gestures</li>
              <li>Pairs Automatically with Mac</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$99.99</h4>
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
    </>
  );
};

export default Mouse;
