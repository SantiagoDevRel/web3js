const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("cs", ["Hello CS - ethers"]);

  await contract.waitForDeployment();

  console.log(`Contract deployed to ${contract.target}`);
}

main();
