const { abi, bytecode } = require("../artifacts/contracts/cs.sol/cs.json");
const { Web3 } = require("web3");
require("dotenv").config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.sepolia));

async function main() {
  //get signer
  const account = web3.eth.accounts.wallet.add(process.env.PK).get(0);
  //get contract
  const address = "0x6EC591AD3e6eAC0CB48B8eF5022E1a70c6f08F04";
  const myContract = new web3.eth.Contract(abi, address);

  //set message function
  const msg = "Hello CS1";
  const tx = await myContract.methods.setMessage(msg).send({ from: account?.address });
  console.log("DONE", tx);
}

main();
