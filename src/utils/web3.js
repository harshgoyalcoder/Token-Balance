import Web3 from 'web3';

// Check if Web3 is already injected by the browser (MetaMask)
if (typeof window.ethereum !== 'undefined') {
  const web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    await window.ethereum.enable();
    console.log('Web3 initialized and connected to MetaMask');
    return web3;
  } catch (error) {
    // User denied account access
    console.error('User denied MetaMask account access');
  }
} else {
  // Fallback to a different provider
  console.error('Web3 not detected. You should consider using MetaMask');
}
