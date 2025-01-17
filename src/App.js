// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
//import Cart from './pages/Cart';
import Desktop from './pages/Desktop';
import User from './pages/User';
import About from './pages/About';
import Shopping from './pages/Shopping';
import Help from './pages/Help';
import NewsletterForm from './pages/NewsletterForm';
import Authentification from './pages/Authentification'
function App() {
  return (
    <Router>
      
      <Nav /> {/* Nav is placed here, so it's accessible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Desktop" element={<Desktop />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/NewsletterForm" element={<NewsletterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
