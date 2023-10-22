const { Web3 } = require("web3");
const web3utils = require("web3-utils");
require("dotenv").config();
const web3 = new Web3(process.env.sepolia);

async function getStorage() {
  //smart contract address of cs.sol
  const address = "0x50aCdC8D7BcbbbD19D1d145bDc941964b8822818";
  const slot = 0;
  //storage => hex
  const storage = await web3.eth.getStorageAt(address, slot);

  //parse result from hex to readable string
  const a = web3utils.hexToString(storage);
  const b = web3utils.hexToAscii(storage);
  const c = web3utils.hexToUtf8(storage);
  console.log(a);
  console.log(b);
  console.log(c);
}

getStorage();
