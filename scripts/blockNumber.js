const { Web3 } = require("web3");
const web3utils = require("web3-utils");
require("dotenv").config();
const web3 = new Web3(process.env.sepolia);

async function blockNumber() {
  const blockNumber = await web3.eth.getBlockNumber();
  console.log(`blockNumber: ${blockNumber}`);
}

blockNumber();
