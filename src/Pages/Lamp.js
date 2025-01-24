import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//import Logitec from "../image/Logitech.png";
import Lamp1 from "../image/Lamp1.png";
import Silver from "../image/Silver.png";
import Gold from "../image/Gold.png";
import Lamp2 from "../image/Lamp2.png";
import { CartContext } from "../context/CartContext"; // Assuming this is the context for the cart
import Navbar from "../component/Navbar"; // Adjust the path if necessary

const Lamp = () => {
  const { addToCart } = useContext(CartContext); // Use the CartContext for adding to the cart
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(""); // Dynamic message to show which product was added

  const products = [
    {
      id: 1,
      name: "Auray 18-LED Desktop Gooseneck Light with USB ChargerTop Seller",
      price: 39.0,
      oldPrice: 50.0,
      image: Lamp1,
      description: [
        "LED Gooseneck Lamp with USB Charge Port",
        "For Pianos, Keyboards, and Desks",
        "18 LED Bulbs for Wide, Even Illumination",
        "One-Touch On/Off and Dimming",
        "5.5 Diameter Weighted Base",
        "Multivoltage AC Adapter",
      ],
      discount: 1867.94,
    },
    {
      id: 2,
      name: "BenQ Genie e-Reading LED Light Desk Lamp (Gold)",
      price: 199.0,
      oldPrice: 249.0,
      image: Gold,
      description: [
        "For Small Desktop or Single Laptop User",
        "Output: 500 (4000K) or 1000 Lux (5700K)",
        "2700-5700 CCT",
        "13 CCT & 23 Brightness Levels",
        "Built-In Ambient-Light Sensor",
        "Screen & Paper Mode Switch",
        "Onboard Control",
        "CRI 95, Flicker-Free Operation",
        "Curved Head Design, Patented Ball Joint",
      ],
    },
    {
      id: 3,
      name: "BenQ Genie e-Reading LED Light Desk Lamp (Silver)",
      price: 199.0,
      oldPrice: 249.0,
      image: Silver,
      description: [
        "For Small Desktop or Single Laptop User",
        "Output: 500 (4000K) or 1000 Lux (5700K)",
        "2700-5700 CCT",
        "13 CCT & 23 Brightness Levels",
        "Built-In Ambient-Light Sensor",
        "Screen & Paper Mode Switch",
        "Onboard Control",
        "CRI 95, Flicker-Free Operation",
        "Covers Desks up to 35.4 Wide",
        "Curved Head Design, Patented Ball Joint",
      ],
    },
    {
      id: 4,
      name: "Fiilex V70 LED Color Viewing Lamp",
      price: 195.0,
      image: Lamp2,
      description: [
        "Dense Matrix LED Technology",
        "Flexible Gooseneck",
        "Variable Color Control",
        "3000K, 4000K, 5000K, & 6500K Settings",
        "Continuous Dimming from 100-25%",
        "High CRI of > 90",
      ],
    },
  ];
  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart (context or logic)
    setMessage(`You added "${product.name}" to your cart!`); // Set the success message
    setShowMessage(true); // Show the message

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <>
      <center>
        <Navbar />
      </center>
      <div className="container mt-5">
        {products.map((product) => (
          <div className="row border-0 p-3 rounded" key={product.id}>
            {/* First Column: Picture */}
            <div className="col-md-3 text-center">
              {showMessage && (
                <div
                  style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {message}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3>{product.name}</h3>
              <div>
                <span className="badge bg-secondary">Top Seller</span>
              </div>
              <p className="mt-2">
                <strong>Key Features</strong>
              </p>
              <ul>
                {product.description.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-3 text-center">
              <h4 className="text-danger">
                ${isNaN(product.price) ? "0.00" : product.price.toFixed(2)}
              </h4>
              <p>
                <small>
                  <s>
                    $
                    {isNaN(product.oldPrice)
                      ? "0.00"
                      : product.oldPrice.toFixed(2)}
                  </s>
                </small>
              </p>
              <p className="text-success">
                Save Reg. $
                {isNaN(product.discount) ? "0.00" : product.discount.toFixed(2)}
              </p>
              <p>
                <small className="text-muted">
                  Limited supply at this price
                </small>
              </p>
              <button
                className="btn btn-success w-100"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button className="btn btn-secondary w-100 mt-2">
                Add to Wish List
              </button>
            </div>
            <div>
              ____________________________________________________________________________________________________________________________________________________________________
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lamp;
/*
<div className="container mt-5">
        <div className="row border-0 p-3 rounded">
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
*/
