const hre = require("hardhat");
const { abi } = require("../artifacts/contracts/cs.sol/cs.json");
const contractAddress = "0x50aCdC8D7BcbbbD19D1d145bDc941964b8822818";

async function main() {
  const [signer1] = await hre.ethers.getSigners();
  //console.log(signer1);
  const contract = await hre.ethers.getContractAt(abi, contractAddress, signer1);

  const msg = "Hello CS1";
  const tx = await contract.setMessage(msg);
  await tx.wait();
  console.log("Tx receipt", tx);
}

main();
