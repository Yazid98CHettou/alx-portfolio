import React, { useState } from "react";
import "../component/componentCSS/Help.css";

const Help = () => {
  // State to control the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Open popup when contact button is clicked
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Close popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Handle form submit (for example, display data)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    handleClosePopup(); // Close the popup after submission
  };

  return (
    <>
      <div className="help-container">
        <h2>Help & Support</h2>
        <p>
          If you need assistance, we're here to help! Below are some frequently
          asked questions:
        </p>
        <ul className="faq-list">
          <li>
            <strong>Q: How do I reset my password?</strong>
            <p>
              A: Click on the "Forgot Password" link on the login page and
              follow the instructions.
            </p>
          </li>
          <li>
            <strong>Q: Where can I find my account settings?</strong>
            <p>A: Navigate to the "Settings" tab in your dashboard.</p>
          </li>
          <li>
            <strong>Q: How do I contact customer support?</strong>
            <p>
              A: You can reach out to us via the contact form or email us at
              support@Yazideco.com.
            </p>
          </li>
        </ul>
        <button className="contact-button" onClick={handleOpenPopup}>
          Contact Support
        </button>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Contact Support</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="popup-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="popup-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="popup-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button
                type="button"
                className="close-button"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Help;
