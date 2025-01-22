import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Logitec from "../image/Logitech.png";
import Logitech from "../image/logitech2.png";
import { CartContext } from "../context/CartContext"; // Assuming this is the context for the cart

const Keyboard = () => {
  const { addToCart } = useContext(CartContext); // Use the CartContext for adding to the cart
  const formattedPrice =  Number(price).toFixed(2);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(""); // Dynamic message to show which product was added

  const products = [
    {
      id: 1,
      name: "Logitech MX Keys S Wireless Keyboard (Black)",
      price: 109.99,
      image: Logitec,
      description: [
        "Bluetooth & Logi Bolt Connectivity",
        "Smart Illumination",
        "Spherically-Dished Keys",
        "Up to 5 Month Battery Life",
        "Logi Options+ Compatible",
        "Pairs with 3 Devices",
        "Low-Profile Design",
        "Includes Logi Bolt Receiver",
        "Compatible with Multiple Platforms",
      ],
    },
    {
      id: 2,
      name: "Logitech K120 USB Keyboard",
      price: 2149.00,
      oldPrice: 1234.00,
      image: Logitech,
      description: [
        "Wired USB",
        "Comfortable, Quiet Typing",
        "Spill-Resistant Design",
        "Adjustable Tilt Legs",
        "Plug-and-Play",
        "Compatible with Windows XP and Later",
        "Compatible with Linux",
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
      <div className="container mt-5">
        {products.map((product) => (
          <div key={product.id} className="row border-0 p-3 rounded">
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
              <img src={product.image} alt="Product" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3>{product.name}</h3>
              <div>
                <span className="badge bg-secondary">{product.badge}</span>
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
              <h4 className="text-danger">${isNaN(product.price) ? '0.00' : product.price.toFixed(2)}</h4>
              <p>
                <small className="text-muted">{product.availability}</small>
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
            <div> ____________________________________________________________________________________________________________________________________________________________________</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Keyboard;
