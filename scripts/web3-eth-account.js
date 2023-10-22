const { Web3 } = require("web3");
const web3utils = require("web3-utils");
require("dotenv").config();
const web3 = new Web3(process.env.sepolia);

async function main() {
  const address = "0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1";
  const balance = String(await web3.eth.getBalance(address));
  const toEth = web3utils.fromWei(balance);
  console.log(toEth);
}

main();
