const { Contract, Wallet } = require('ethers');
const chains = require('./chains');
const provider = chains.testnet.humanityTestnet.provider();
const explorer = chains.testnet.humanityTestnet.explorer;
const fs = require('fs');
const moment = require('moment-timezone');
const { displayHeader } = require('./chains/utils/utils');
const PRIVATE_KEYS = JSON.parse(fs.readFileSync('privateKeys.json', 'utf-8'));
const { ABI } = require('./abi/abi');
const PROXY_CA = '0xa18f6FCB2Fd4884436d10610E69DB7BFa1bFe8C7';
const IMPLEMENT_CA = '0x097aE35C5093Ae222e93a6c2b32927995130721F';

function appendLog(message) {
  fs.appendFileSync('log.txt', message + '\n');
}

async function doClaim(privateKey) {
  try {
    const wallet = new Wallet(privateKey, provider);
    const implementationContract = new Contract(
      IMPLEMENT_CA,
      ABI,
      wallet
    );
    const data = implementationContract.interface.encodeFunctionData('claimReward');
    const transaction = {
      to: PROXY_CA,
      data,
      from: wallet.address
    };
    const txResponse = await wallet.sendTransaction(transaction);
    const receipt = await txResponse.wait(1);
    const successMessage = `Transaction Confirmed in block ${receipt.blockNumber}`;
    console.log(successMessage.blue);
    appendLog(successMessage);
    return txResponse.hash;

  } catch (error) {
    const errorMessage = `[${moment().format('HH:mm:ss')}] Error executing transaction: ${error.message}`;
    console.log(errorMessage.red);
    appendLog(errorMessage);
  }
}

async function runClaim() {
  displayHeader();

  for (const PRIVATE_KEY of PRIVATE_KEYS) {
    try {
      const receiptTx = await doClaim(PRIVATE_KEY);
      if (receiptTx) {
        const successMessage = `[${moment().tz('Asia/Jakarta').format('HH:mm:ss [WIB]')}] Transaction Hash: ${explorer.tx(receiptTx)}`;
        console.log(successMessage.cyan);
        appendLog(successMessage);
      }
      console.log('');
    } catch (error) {
      const errorMessage = `[${moment().tz('Asia/Jakarta').format('HH:mm:ss [WIB]')}] Error processing transaction. Please try again later.`;
      console.log(errorMessage.red);
      appendLog(errorMessage);
      console.log('');
    }
  }
}

runClaim();