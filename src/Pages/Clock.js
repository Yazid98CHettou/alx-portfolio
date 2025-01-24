import React, { useContext, useState } from "react";
import Clock1 from "../image/Clock.png";
import JBL from "../image/JBL.png";
import Amazon from "../image/Amazon.png";
import SONY from "../image/SONY.png";

import { CartContext } from "../context/CartContext"; // Assuming this is the context for the cart
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../component/Navbar"; // Adjust the path if necessary

      
const Clock = () => {
  const { addToCart } = useContext(CartContext); // Use the CartContext for adding to the cart
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(""); // Dynamic message to show which product was added

  const products = [
    {
      id: 1,
      name: "Explore Scientific Large Display Radio Controlled Alarm Clock (White)",
      price: 19.97,
      image: Clock1, // Make sure you import the image properly
      description: [
        "Alarm & Snooze",
        "White LED Backlight",
        "Month/Date Display",
        "Night Light",
      ],
    },
    {
      id: 2,
      name: "JBL Horizon 2 Clock Radio with Bluetooth (Gray)",
      price: 119.95,
      image: JBL, // Ensure you import the image Clock1 in your component
      description: [
        "Bluetooth Wireless Music Streaming",
        "Dual 1.5 Full-Range Drivers",
        "Dual Alarms",
        "LCD with Ambient Light Sensor",
        "3.5mm Aux Input",
        "Two USB Charging Ports",
        "Built-In FM Tuner",
        "Battery Backup",
        "Ambient Light for Nightlight Use",
      ],
    },
    {
      id: 3,
      name: "Sony Radio Alarm Clock (Black)",
      price: 29.95,
      image: SONY, // Ensure you import the Mac image correctly in your component
      description: [
        "FM/AM Radio Tuner",
        "Gradual Wake Alarm",
        "Extendable Snooze",
        "AC Powered",
        "Includes Backup Battery",
      ],
    },
    {
      id: 4,
      name: "Amazon Echo Spot Smart Alarm Clock (2024 Edition, Ocean Blue)",
      price: 79.99,
      image: Amazon, // Ensure you import the Mac image correctly in your component
      description: [
        "Add Alexa to Your Nightstand",
        "Create Alarms, Reminders & Routines",
        'Control Smart Home Devices',
        "Listen to Music, Podcasts & Audiobooks",
        '2.8" Color Display & Built-In Speaker',
        "View Time, Date & Weather At-a-Glance",
        "Dual-Band Wi-Fi 5 (802.11ac) & Bluetooth",
        "Multiple Layers of Privacy Control",
        "Hands-Free Voice Calls & Announcements",
        "Easy Setup with App & Included Adapter",
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
          <div key={product.id} className="row border-0 p-3 rounded">
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
              <h4 className="text-danger">${product.price.toFixed(2)}</h4>
              <small className="text-muted">{product.discount}</small>
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
              {" "}
              ____________________________________________________________________________________________________________________________________________________________________
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Clock;
