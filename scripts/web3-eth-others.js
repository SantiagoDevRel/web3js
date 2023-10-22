const { Web3 } = require("web3");
const utils = require("web3-utils");
require("dotenv").config();

const web3 = new Web3(process.env.mainnet);

async function others() {
  const protocol = await web3.eth.getProtocolVersion();
  console.log(utils.toNumber(protocol));

  const sync = await web3.eth.isSyncing();
  console.log(sync);

  const coinbase = await web3.eth.getCoinbase();
  console.log(coinbase);

  const mining = await web3.eth.getHashRate();
  console.log(mining);

  const gasPrice = String(await web3.eth.getGasPrice());
  console.log(utils.fromWei(gasPrice));

  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
}

others();
