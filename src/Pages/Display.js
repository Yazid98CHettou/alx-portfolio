import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../pages/PagesCSS/Display.css";
import Mac from "../image/Mac.png";
import MacBook from "../image/MacBook.png";
import { CartContext } from "../context/CartContext"; // Assuming this is the context for the cart
const Display = () => {
  const { addToCart } = useContext(CartContext); // Use the CartContext for adding to the cart
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(""); // Dynamic message to show which product was added

  const products = [
    {
      id: 1,
      name: 'Apple 15" MacBook Air (M3, Midnight)',
      price: 2149.0,
      oldPrice: 2499.0,
      image: Mac,
      description: [
        "Apple M3 8-Core Chip",
        "24GB Unified RAM | 2TB SSD",
        '15.3" 2880 x 1864 Liquid Retina Display',
        "10-Core GPU | 16-Core Neural Engine",
        "Wi-Fi 6E (802.11ax) | Bluetooth 5.3",
        "2 x Thunderbolt | USB 4",
        "Force Touch Trackpad | Touch ID Sensor",
        "macOS",
      ],
      discount: 350.0,
    },
    {
      id: 2,
      name: "Apple 24 iMac with M4 Chip (Blue)",
      price: 1849.0,
      oldPrice: 2499.0,
      image: MacBook,
      description: [
        "Apple M4 8-Core Chip",
        "16GB Unified RAM | 1TB SSD",
        "24-inch 4.5K Retina Display",
        "8-Core GPU | 16-Core Neural Engine",
        "Wi-Fi 6 | Bluetooth 5.0",
        "2 x Thunderbolt | USB 4",
        "macOS",
      ],
      discount: 650.0,
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

export default Display;

/* 
<div className="container mt-5">
        <div className="row border-0 p-3 rounded">
          <div className="col-md-3 text-center">
          <img src={Mac} alt="Product" className="img-fluid"/>
          </div>
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
        <div className="row border-0 p-3 rounded">
          <div className="col-md-3 text-center">
            <img
              src={MacBook} alt="Product" className="img-fluid" />
          </div>
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

*/
