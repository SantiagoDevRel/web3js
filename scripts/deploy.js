const { Web3 } = require("web3");
require("dotenv").config();

const { abi, bytecode, deployedBytecode } = require("../artifacts/contracts/cs.sol/cs.json");

const sepolia = "https://eth-sepolia.g.alchemy.com/v2/ZBpgdfRE-h1LUZYMR-m67rzagBd_bvJv";
const web3 = new Web3(new Web3.providers.HttpProvider(sepolia));

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

//Contract deployed to 0x7449Aba86D06d3b2c110138B5214F474C69749da
