import React, { useEffect } from 'react';

const PopUp = ({ message, onClose }) => {
  // Close the pop-up after 5 minutes (300000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5 minutes in milliseconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <p>{message}</p>
      </div>
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',
};

const popupContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  width: '300px',
};

export default PopUp;
