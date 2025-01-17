import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Drones = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row border p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
            <img
              src="https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/dji_cp_ma_00000693_01_air_3_fly_more_1690274791_1773598.jpg"
              alt="Product Image"
              className="img-fluid"
            />
          </div>
          {/* Second Column: Information */}
          <div className="col-md-6">
            <h3>DJI Air 3 Drone Fly More Combo with RC 2</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>Dual Wide-Angle & 3x Telephoto Cameras</li>
              <li>4K100, 4K60 HDR, or 2.7K Vertical Video</li>
              <li>1/1.3" CMOS Sensors & up to 48MP Stills</li>
              <li>DJI RC 2 Remote & Fly More Accessories</li>
              <li>10-bit D-Log M & 10-bit HLG Color Modes</li>
              <li>Up to 46 Minutes of Flight Time</li>
              <li>Omnidirectional APAS 5.0 Avoidance</li>
              <li>Multiple Pre-Programmed Flight Modes</li>
              <li>Plan Routes in Advance with Waypoint</li>
            </ul>
          </div>
          {/* Third Column: Price and Button */}
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$1,549.00</h4>
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

export default Drones;
