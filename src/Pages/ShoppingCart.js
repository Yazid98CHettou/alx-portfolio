import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Function to handle popup close
  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to allow only numeric input
  const handleNumericInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <div className="container mt-5">
      <center>
        <h2>Shopping Cart</h2>
      </center>

      {cartItems.length === 0 ? (
        <center>
          <p>Your cart is empty.</p>
        </center>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="row border-0 p-3 rounded mb-3">
            <div className="col-md-3 text-center">
              <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <center>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span> {item.quantity} </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </center>
            </div>

            <div className="col-md-3 text-center">
              <button
                className="btn btn-danger w-100"
                onClick={() => removeFromCart(item.id)}
              >
                Remove{" "}
              </button>
              <div>
                ____________________________________________________________________________________________________________________________________________________________________
              </div>
            </div>
          </div>
        ))
      )}

      {/* Display total price */}
      <center>
        <div>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      </center>

      {/* زر Buy */}
      {cartItems.length > 0 && (
        <center>
          <button
            className="btn btn-success mt-3"
            onClick={() => setShowPopup(true)}
          >
            Buy
          </button>
        </center>
      )}

      {/* Popup for Bank Card Information */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            zIndex: 1000,
          }}
        >
          <h4>Enter Bank Card Information</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">
                Cardholder Name
              </label>
              <input
                type="text"
                className="form-control"
                id="cardName"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">
                Card Number
              </label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
                onInput={handleNumericInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">
                Expiry Date
              </label>
              <input
                type="date"
                className="form-control"
                id="expiryDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="XXX"
                onInput={handleNumericInput}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Pay
            </button>
            <button
              type="button"
              onClick={closePopup}
              className="btn btn-secondary ms-3"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Overlay for Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={closePopup}
        ></div>
      )}
    </div>
  );
};

export default ShoppingCart;
