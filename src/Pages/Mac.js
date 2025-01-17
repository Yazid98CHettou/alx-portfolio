import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Mac = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row border p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
          <img
              src="https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500/https://static.bhphoto.com/images/multiple_images/images500x500/1730458856_IMG_2364001.jpg"
              alt="Product Image"
              className="img-fluid"/>
          </div>
          {/* Second Column: Information */}
          <div className="col-md-6">
            <h3>Apple 24" iMac with M4 Chip (Blue)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>Apple M4 10-Core CPU</li>
              <li>24GB Unified RAM | 512GB SSD</li>
              <li>24" 4480 x 2520 Retina Display</li>
              <li>10-Core GPU | 16-Core Neural Engine</li>
              <li>P3 Color Gamut | True Tone Technology</li>
              <li>Wi-Fi 6E (802.11ax) | Bluetooth 5.3</li>
              <li>4 x Thunderbolt 4 | GbE RJ45 | 3.5mm</li>
              <li>12MP Center Stage Camera</li>
              <li>Includes Magic Keyboard & Magic Mouse</li>
            </ul>
          </div>
          {/* Third Column: Price and Button */}
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$1,849.00</h4>
            <p>
              <small>
                <s>$1,867.94</s>
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
        <div className="row border p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
            <img
              src="https://static.bhphoto.com/images/multiple_images/images500x500/1709562850_IMG_2201052.jpg"
              alt="Product Image"
              className="img-fluid"
            />
          </div>
          {/* Second Column: Information */}
          <div className="col-md-6">
            <h3>Apple 15" MacBook Air (M3, Midnight)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>Apple M3 8-Core Chip</li>
              <li>24GB Unified RAM | 2TB SSD</li>
              <li>15.3" 2880 x 1864 Liquid Retina Display</li>
              <li>10-Core GPU | 16-Core Neural Engine</li>
              <li>Wi-Fi 6E (802.11ax) | Bluetooth 5.3</li>
              <li>2 x Thunderbolt | USB 4 </li>
              <li>Force Touch Trackpad | Touch ID Sensor</li>
              <li>macOS</li>
            </ul>
          </div>
          {/* Third Column: Price and Button */}
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$2,149.00</h4>
            <p>
              <small>
                <s>$2,499.00</s>
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
    </>
  );
};

export default Mac;



