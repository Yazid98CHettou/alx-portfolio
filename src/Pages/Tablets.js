import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Tablets = () => {
  return (
    <>
      <div className="container mt-5 ">
      <div className="container mt-5">
          <div className="row border p-3 rounded" style={{backgroundColor:"white"}}>
            {/* First Column: Picture */}
            <div className="col-md-3 text-center">
              <img
                src="https://static.bhphoto.com/images/images500x500/1716227723_1829776.jpg"
                alt="Product Image"
                className="img-fluid"
              />
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
                <li>Snapdragon X Elite 12-Core Processor</li>
                <li>32GB LPDDR5x | 1TB SSD</li>
                <li>13" OLED PixelSense Flow Touchscreen</li>
                <li>2880 x 1920 Screen Resolution (267 ppi)</li>
                <li>P3 Color Gamut | True Tone Technology</li>
                <li>Wi-Fi 7 | Bluetooth 5.4</li>
                <li>4 x Thunderbolt 4 | GbE RJ45 | 3.5mm</li>
                <li>10.5MP Ultra HD Rear Camera</li>
                <li>Includes Magic Keyboard & Magic Mouse</li>
              </ul>
            </div>
            {/* Third Column: Price and Button */}
            <div className="col-md-3 text-center">
              <h4 className="text-danger">$1,799.00</h4>
              <p>
                <small>
                  <s>$1,867.94</s>
                </small>
              </p>
              <p className="text-success">Save Reg. $1,867.94</p>
              <p>
                <small className="text-muted">
                  Limited supply at this price
                </small>
              </p>
              <button className="btn btn-success w-100">Add to Cart</button>
              <button className="btn btn-secondary w-100 mt-2">
                Add to Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tablets;
