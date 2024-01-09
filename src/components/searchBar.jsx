import React, { useEffect, useState } from 'react';
import BalanceComponent from './BalanceComponent';

const SearchBar = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const apiUrlCurrent = `https://explorer.mantle.xyz/api?module=block&action=getblocknobytime×tamp=${currentTimestamp}&closest=after`;
  // const listOfBlocks = `https://explorer.mantle.xyz/api?module=account&action=getminedblocks&address=0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7`;
  // // Get the current time in milliseconds
  // const currentTimestamp = Math.floor(Date.now() / 1000);
  // // Calculate the timestamp 12 hours ago from the current time
  // const twelveHoursAgoTimestamp = currentTimestamp - 12 * 60 * 60;
  // console.log("Timestamp 12 hours ago:", twelveHoursAgoTimestamp);
  // const apiUrlTwelveHoursAgo = `https://explorer.mantle.xyz/api?module=block&action=getblocknobytime&timestamp=${twelveHoursAgoTimestamp}&closest=before`;

  
  // const fetchBlockNumber = async () => {

  //   try {
  //     // Fetch block number 12 hours ago
  //     const allBlocks = await fetch(listOfBlocks);
  //     const responseTwelveHoursAgo = await fetch(apiUrlTwelveHoursAgo);
  //     const dataTwelveHoursAgo = await responseTwelveHoursAgo.json();
  //     const allBlocksLists = await allBlocks.json();
  //     if (allBlocksLists.status === "1") {
  //       console.log(allBlocks);
  //     } else {
  //       console.error("Unable to fetch block number");
  //     }

  //     if (
  //       dataTwelveHoursAgo.status === "1" &&
  //       dataTwelveHoursAgo.result &&
  //       dataTwelveHoursAgo.result.blockNumber
  //     ) {
  //       console.log(
  //         "Block number 12 hours ago:",
  //         dataTwelveHoursAgo.result.blockNumber
  //       );
  //     } else {
  //       console.error("Unable to fetch block number 12 hours ago");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching block number 12 hours ago:", error);
  //   }

  //   try {
  //     // Fetch current block number
  //     const responseCurrent = await fetch(apiUrlCurrent);
  //     const dataCurrent = await responseCurrent.json();

  //     if (
  //       dataCurrent.status === "1" &&
  //       dataCurrent.result &&
  //       dataCurrent.result.blockNumber
  //     ) {
  //       console.log("Current block number:", dataCurrent.result.blockNumber);
  //     } else {
  //       console.error("Unable to fetch current block number");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching current block number:", error);
  //   }
  // };


  const handleButtonClick = async () => {
    try {
      const response = await fetch(`https://explorer.mantle.xyz/api?module=account&action=balance&address=${contractAddress}`);
      const data = await response.json();
      
      if (data.status === '1') {
        console.log(data);
       const formattedNumber = data.result.replace(/^(\d{3})/, '$1.'); 
       const result = `${formattedNumber} MNT`;
        setBalance(result); // Assuming 'result' contains the token details
        setError(null);
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

  return (
    <div style={{display:"flex", margin: '20px', paddingTop: '1rem' }}>
      <div style={{flex:"1",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h2 style={{ color: '#4F46E5', marginBottom: '1rem' }}>Enter smart token address to see Balance.</h2>
      <div style={{ display: 'flex', gap: '3rem',flexDirection:"row",justifyContent:"space-between" }}>
        <div style={{flex:"6"}}>

        <input
          type="text"
          placeholder="Enter Smart Contract Address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}
        />
        </div>
        <div style={{flex:"1"}}>

        <button onClick={handleButtonClick} style={{ width: '150px', padding: '0.75rem', border: 'none', borderRadius: '0.375rem', backgroundColor: '#4F46E5', color: '#FFFFFF', cursor: 'pointer' }}>
          Get Token Details
        </button>
       
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      </div>
      <div style={{flex:"1",}}>
        {balance && (
          <BalanceComponent balance={balance}/>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

