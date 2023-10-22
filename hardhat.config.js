require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `${process.env.sepolia}`,
      accounts: [`${process.env.PK}`],
    },
    ganache: {
      url: `${"HTTP://127.0.0.1:7545"}`,
      accounts: [`0xd0f458f27c80b2e067c83a9ca19b7331eb39b5dd5c90bd2d02af5f39f2382005`],
    },
  },
};
