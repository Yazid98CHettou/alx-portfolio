import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
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
            {/* Quantity Control */}
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
    </div>
  );
};

export default ShoppingCart;
