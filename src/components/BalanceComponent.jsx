
import React from 'react';

const BalanceComponent = (balance) => {
  const overlayStyle = {
    top: 0,
    left: 0,
    width: '50%',
    borderRadius:'10px',
     marginTop:"10px",
     padding:"10px",
    minHeight: '10rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // White color with 30% opacity
    zIndex: 1000, // Adjust z-index as needed to overlay on top of other content
  };

  return <div style={overlayStyle}>
            <p style={{fontSize:"20px",marginBottom:"1rem"}}>Balance: {balance.balance}</p>
  </div>;
};

export default BalanceComponent;
