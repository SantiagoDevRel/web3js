// First step: initialize web3 instance
const { Web3 } = require("web3");
const { abi } = require("../artifacts/contracts/cs.sol/cs.json");
require("dotenv").config();
const web3 = new Web3(new Web3.providers.HttpProvider(`${process.env.sepolia_infura}`));

async function main() {
  //get account
  const account = web3.eth.accounts.privateKeyToAccount(process.env.PK);
  //console.log(account);

  //initialize contract
  const contractAddress = "0x6EC591AD3e6eAC0CB48B8eF5022E1a70c6f08F04";
  const myContract = new web3.eth.Contract(abi, contractAddress);

  const msg = "Hello CS2";
  const tx = await myContract.methods.setMessage(msg).send({ from: account.address, gas: 700000 });
  console.log("DATA", tx);
}

main();
