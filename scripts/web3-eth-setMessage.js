const { abi, bytecode } = require("../artifacts/contracts/cs.sol/cs.json");
const { Web3 } = require("web3");

require("dotenv").config();

const web3 = new Web3(process.env.sepolia_infura);

async function main() {
  // Initiate wallet/signer
  const account = web3.eth.accounts.privateKeyToAccount(process.env.PK);
  const wallet = web3.eth.accounts.wallet.add(account);
  //console.log(wallet[0].address);
  // Get contract
  const address = "0x50aCdC8D7BcbbbD19D1d145bDc941964b8822818";
  const myContract = new web3.eth.Contract(abi, address);
  myContract.setConfig({ contractDataInputFill: "both" });

  // Use contract method to send a transaction
  const msg = "Hello CS1";

  const gasEstimate = await myContract.methods.setMessage(msg).estimateGas({ from: wallet[0].address });
  const tx = await myContract.methods.setMessage(msg).send({ from: wallet[0].address, gas: gasEstimate });
  //const tx = await myContract.methods.setMessage(msg).send({ from: account.address });
  console.log("Transaction Hash:", tx.transactionHash);
}

main();
