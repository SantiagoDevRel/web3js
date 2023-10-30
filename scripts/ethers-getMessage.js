const hre = require("hardhat");
const { abi } = require("../artifacts/contracts/cs.sol/cs.json");
const contractAddress = "0x50aCdC8D7BcbbbD19D1d145bDc941964b8822818";

async function main() {
  const contract = await hre.ethers.getContractAt(abi, contractAddress);

  const msg = await contract.getMessage();

  console.log("Msg with Ethers:", msg);
}

main();
