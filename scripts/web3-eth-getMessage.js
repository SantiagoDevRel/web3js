const { abi, bytecode } = require("../artifacts/contracts/cs.sol/cs.json");
const { Web3 } = require("web3");
const web3utils = require("web3-utils");
require("dotenv").config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.sepolia));

async function main() {
  //get account

  //get contract
  const contractAddress = "0x7F98c91c95757B84c8c40A78754242C14Bfb6075";
  const myContract = new web3.eth.Contract(abi, contractAddress);

  //call function w web3js call
  const message = await myContract.methods.getMessage().call();
  console.log(`the message with call() is: ${message}`);
}

main();
