import React from 'react';

const Topbar = () => {
  const topbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '30px',
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linksStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent:"space-evenly",
    marginRight:"10rem",
    gap: '4rem',
  };

  const linkItemStyle = {
    textDecoration: 'none',
    fontSize:"20px",
    color: 'white',
  };

  const signinButtonStyle = {
    backgroundColor: '#4F46E5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: ' 0 4rem',
  };

  return (
    <div style={topbarStyle}>
      <div style={leftSectionStyle}>
        <span style={titleStyle}>Balance Checker</span>
      </div>
      <div style={rightSectionStyle}>
        <ul style={linksStyle}>
          <li><a href="#" style={linkItemStyle}>Home</a></li>
          <li><a href="#" style={linkItemStyle}>Transactions</a></li>
          <li><a href="#" style={linkItemStyle}>NFTs</a></li>
          <li><a href="#" style={linkItemStyle}>Wallet</a></li>
        </ul>
        <button style={signinButtonStyle}>Sign In</button>
      </div>
    </div>
  );
};

export default Topbar;
