import React, { useContext, useState } from "react";
import Clock1 from "../image/Clock.png";
import Mac from "../image/Mac.png";
import { CartContext } from "../context/CartContext"; // Assuming this is the context for the cart
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
      discount: "Limited supply at this price",
    },
    {
      id: 2,
      name: "Explore Scientific Large Display Radio Controlled Alarm Clock (White)",
      price: 19.97,
      image: Clock1, // Ensure you import the image Clock1 in your component
      description: [
        "Alarm & Snooze",
        "White LED Backlight",
        "Month/Date Display",
        "Night Light",
      ],
      discount: "Limited supply at this price",
    },
    {
      id: 3,
      name: "JBL Horizon 2 Clock Radio with Bluetooth (Gray)",
      price: 1849.0,
      oldPrice: 1867.94,
      image: Mac, // Ensure you import the Mac image correctly in your component
      description: [
        "Apple M4 10-Core CPU",
        "24GB Unified RAM | 512GB SSD",
        '24" 4480 x 2520 Retina Display',
        "10-Core GPU | 16-Core Neural Engine",
        "P3 Color Gamut | True Tone Technology",
        "Wi-Fi 6E (802.11ax) | Bluetooth 5.3",
        "4 x Thunderbolt 4 | GbE RJ45 | 3.5mm",
        "12MP Center Stage Camera",
        "Includes Magic Keyboard & Magic Mouse",
      ],
      discount: "Save Reg. $1,867.94",
      availability: "Limited supply at this price",
    },
    {
      id: 4,
      name: "Sangean RCR-30 Bluetooth AM/FM Alarm Clock Radio with Sound Soother",
      price: 1849.0,
      oldPrice: 1867.94,
      image: Mac, // Ensure you import the Mac image correctly in your component
      description: [
        "Apple M4 10-Core CPU",
        "24GB Unified RAM | 512GB SSD",
        '24" 4480 x 2520 Retina Display',
        "10-Core GPU | 16-Core Neural Engine",
        "P3 Color Gamut | True Tone Technology",
        "Wi-Fi 6E (802.11ax) | Bluetooth 5.3",
        "4 x Thunderbolt 4 | GbE RJ45 | 3.5mm",
        "12MP Center Stage Camera",
        "Includes Magic Keyboard & Magic Mouse",
      ],
      discount: "Save Reg. $1,867.94",
      availability: "Limited supply at this price",
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
