import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Camera = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row border p-3 rounded" >
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
            <img
              src="https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=345/https://static.bhphoto.com/images/images345x345/1594282826_1547009.jpg"
              alt="Product Image"
              className="img-fluid"
            />
          </div>
          {/* Second Column: Information */}
          <div className="col-md-6">
            <h3>Canon EOS R5 Mirrorless Camera</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>45MP Full-Frame CMOS Sensor</li>
              <li>DIGIC X Image Processor</li>
              <li>13" OLED PixelSense Flow Touchscreen</li>
              <li>8K30 Raw and 4K120 10-Bit Internal Video</li>
              <li>400MP In-Camera Files with No Software</li>
              <li>Dual Pixel CMOS AF II with 1053 Points</li>
              <li>3.2" Vari-Angle Touchscreen LCD</li>
              <li>Subject Tracking with Deep Learning</li>
              <li>CFexpress & SD UHS-II Memory Card Slots</li>
            </ul>
          </div>
          {/* Third Column: Price and Button */}
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$2,899.00</h4>
            <p>
              <small>
                <s>$3,399.00</s>
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
        <div className="row border p-3 rounded">
          {/* First Column: Picture */}
          <div className="col-md-3 text-center">
            <img
              src="https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500/https://static.bhphoto.com/images/multiple_images/images500x500/1649682055_IMG_1732790.jpg"
              alt="Product Image"
              className="img-fluid"
            />
          </div>
          {/* Second Column: Information */}
          <div className="col-md-6">
            <h3>Kodak PIXPRO FZ55 Digital Camera (Red)</h3>
            <div>
              <span className="badge bg-secondary">Top Seller</span>
            </div>
            <p className="mt-2">
              <strong>Key Features</strong>
            </p>
            <ul>
              <li>28mm Wide-Angle Lens</li>
              <li>16MP 1/2.3" CMOS Sensor</li>
              <li>5x Optical Zoom Lens</li>
              <li>2.7" LCD Screen</li>
              <li>Full HD 1080p Video Recording at 30 fps</li>
              <li>Digital Image Stabilization</li>
              <li>Built-In Flash</li>
              <li>Rechargeable Lithium-Ion Battery</li>
              <li>Panorama Mode</li>
            </ul>
          </div>
          {/* Third Column: Price and Button */}
          <div className="col-md-3 text-center">
            <h4 className="text-danger">$99
            </h4>
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

export default Camera;
