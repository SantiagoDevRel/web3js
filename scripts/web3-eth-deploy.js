const { abi, bytecode } = require("../artifacts/contracts/cs.sol/cs.json");
const { Web3 } = require("web3");
require("dotenv").config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.sepolia));

async function main() {
  //get account
  const account = web3.eth.accounts.wallet.add(process.env.PK).get(0);

  //get contract
  const MyContract = new web3.eth.Contract(abi);
  const myContract = MyContract.deploy({
    data: bytecode,
    arguments: ["Hello CS"],
  });

  const tx = await myContract.send({
    from: account.address,
  });

  console.log(`contract deployed to ${tx.options.address}`);
}

main();

//Contract deployed to 0x6EC591AD3e6eAC0CB48B8eF5022E1a70c6f08F04
