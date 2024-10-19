require('dotenv').config();
const { JsonRpcProvider } = require('ethers');

const rpcProviders = [  
  new JsonRpcProvider('https://eth-mainnet.public.blastapi.io'), 
];

let currentRpcProviderIndex = 0;  
  
function provider() {  
  return rpcProviders[currentRpcProviderIndex];  
}  
  
function rotateRpcProvider() {  
  currentRpcProviderIndex = (currentRpcProviderIndex + 1) % rpcProviders.length;  
  return provider();  
}

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const baseExplorerUrl = 'https://etherscan.io';

// Fungsi utama untuk merujuk ke explorer
const explorer = {
  get tx() {
    return (txHash) => `${baseExplorerUrl}/tx/${txHash}`;
  },
  get address() {
    return (address) => `${baseExplorerUrl}/address/${address}`;
  }
};


const axios = require('axios');

async function ticker() {
  try {
    const response = await axios.get('https://chainid.network/chains.json');
    const allChains = response.data;
    const network = await provider().getNetwork();
    const chainId = Number(network.chainId);

    const chain = allChains.find(chain => chain.chainId === chainId);
    if (chain) {
      return chain.nativeCurrency ? chain.nativeCurrency.symbol : 'Unknown';
    } else {
      return 'Unknown';
    }
  } catch (error) {
    return 'Unknown';
  }
}
module.exports = { rotateRpcProvider, provider, PRIVATE_KEY, explorer, ticker };
