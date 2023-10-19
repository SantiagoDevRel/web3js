const { Web3 } = require("web3");
const Web3Utils = require("web3-utils");

const rpcLink = "https://eth-sepolia.g.alchemy.com/v2/ZBpgdfRE-h1LUZYMR-m67rzagBd_bvJv";
const web3 = new Web3(rpcLink);

async function main() {
  //get block number async/await => bigint
  const blockNumber = await web3.eth.getBlockNumber();
  console.log(`getBlockNumber async: , ${blockNumber}`);

  //get block number with promises => string
  web3.eth.getBlockNumber().then((result) => {
    console.log(`getBlockNumber promise: ${result}`);
  });

  //get balance=>bigInt, convert into string
  const balance = String(await web3.eth.getBalance("0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1"));
  console.log(`getBalance async:, ${balance}`);

  //fromWei to ETH => string
  const inEth = Web3Utils.fromWei(balance);
  console.log(`fromWei:, ${inEth}`);
}

main();
