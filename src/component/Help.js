import React from "react";
import "../component/componentCSS/Help.css"
const Help = () => {
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
        <button className="contact-button">Contact Support</button>
      </div>
    </>
  );
};

export default Help;
