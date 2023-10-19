const hre = require("hardhat");
const { Web3 } = require("web3");
const { abi, bytecode } = require("../artifacts/contracts/cs.sol/cs.json");

const rpcLink = "https://eth-sepolia.g.alchemy.com/v2/ZBpgdfRE-h1LUZYMR-m67rzagBd_bvJv";
const web3 = new Web3(new Web3.providers.HttpProvider(rpcLink));

async function main() {
  //get account
  const account = await web3.eth.getAccounts();
  const defaultAccount = account[0];
  console.log("account", defaultAccount);

  //get contract
  const MyContract = new web3.eth.Contract(abi);
  const myContract = MyContract.deploy({
    data: "0x" + bytecode,
    arguments: ["Hello CS"],
  });

  const tx = await myContract.send({
    from: defaultAccount,
  });
  console.log(tx.options.address);

  console.log(abi);
}

main();
