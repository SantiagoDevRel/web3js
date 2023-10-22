const { abi, bytecode } = require("../artifacts/contracts/cs.sol/cs.json");
const { Web3 } = require("web3");
const web3utils = require("web3-utils");
require("dotenv").config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.sepolia_infura));
console.log("SEPOLIA", process.env.sepolia_infura);
async function main() {
  // Initiate wallet/signer
  const account = web3.eth.accounts.wallet.add(process.env.PK).get(0);
  console.log("SEPOLIA", process.env.PK);

  // Get contract
  const address = "0x50aCdC8D7BcbbbD19D1d145bDc941964b8822818";
  const myContract = new web3.eth.Contract(abi, address);

  // Use contract method to send a transaction
  const msg = "Hello CS1";
  const tx = await myContract.methods.setMessage(msg).send({ from: account.address });
  console.log("Transaction Hash:", tx.transactionHash);
}

main();
