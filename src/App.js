// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Help from "./pages/Help";
import NewsletterForm from "./pages/NewsletterForm";
import Authentification from "./pages/Authentification";
import Display from "./pages/Display";
import Keyboard from "./pages/Keyboard";
import Mouse from "./pages/Mouse";
import Lamp from "./pages/Lamp";
import Clock from "./pages/Clock";
import { CartProvider } from "./context/CartContext";
import ShoppingCart from "./pages/ShoppingCart";
function App() {
  return (
    <CartProvider>
      <Router>
        <Nav /> {/* Nav is placed here, so it's accessible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Authentification" element={<Authentification />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/User" element={<User />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/NewsletterForm" element={<NewsletterForm />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/Keyboard" element={<Keyboard />} />
          <Route path="/Mouse" element={<Mouse />} />
          <Route path="/Lamp" element={<Lamp />} />
          <Route path="/Clock" element={<Clock />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
