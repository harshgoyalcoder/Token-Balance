import React, { useEffect, useState } from 'react';
import BalanceComponent from './BalanceComponent';

// Component for searching token details by contract address
const SearchBar = () => {
  // State variables for contract address, balance, and error handling
  const [contractAddress, setContractAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle button click event
  const handleButtonClick = async () => {
    try {
      // Fetch token details using API based on the provided contract address
      const response = await fetch(`https://explorer.mantle.xyz/api?module=account&action=balance&address=${contractAddress}`);
      const data = await response.json();
      
      // Handle successful response
      if (data.status === '1') {
        console.log(data);
        // Format the retrieved balance and set it in a readable form
        const formattedNumber = data.result.replace(/^(\d{3})/, '$1.'); 
        const result = `${formattedNumber} MNT`;
        setBalance(result); // Set formatted balance with token details
        setError(null); // Reset error state
      } else {
        setError(data.message); // Set error message received from API
        setBalance(null); // Reset token details in case of an error
      }
    } catch (error) {
      console.error('Error fetching token details:', error);
      setError('Error fetching token details'); // Set a generic error message
      setBalance(null); // Reset token details in case of an error
    }
  };

  // Render the search bar component
  return (
    <div style={{ display: 'flex', margin: '20px', paddingTop: '1rem' }}>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#4F46E5', marginBottom: '1rem' }}>Enter smart token address to see Balance.</h2>
        <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ flex: '6' }}>
            {/* Input field to enter smart contract address */}
            <input
              type="text"
              placeholder="Enter Smart Contract Address"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            {/* Button to trigger token details retrieval */}
            <button onClick={handleButtonClick} style={{ width: '150px', padding: '0.75rem', border: 'none', borderRadius: '0.375rem', backgroundColor: '#4F46E5', color: '#FFFFFF', cursor: 'pointer' }}>
              Get Token Details
            </button>
          </div>
          {/* Display error message if there is any */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
      <div style={{ flex: '1' }}>
        {/* Display balance component if balance exists */}
        {balance && (
          <BalanceComponent balance={balance} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
