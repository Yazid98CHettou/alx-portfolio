import React from 'react';
import '../component/componentCSS/Newsletter.css';

const NewsletterForm = () => {
  return (
      <>
        <center>
          <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest news and offers.</p>
      <form>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input"
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
        </center>
      </>
  );
}

export default NewsletterForm;
