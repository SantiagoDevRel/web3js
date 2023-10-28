const { Web3 } = require("web3");
const abi = require("../artifacts/contracts/tether.json");
require("dotenv").config();

const web3 = new Web3(process.env.sepolia_ws);

async function main() {
  //initialize contract
  const contractAddress = "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06";
  const contract = new web3.eth.Contract(abi, contractAddress);

  console.log("EVENTS", contract.events);
  const subscription = contract.events.Transfer();
  subscription.on("data", console.log);
}

main();
