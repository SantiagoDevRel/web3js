const { Web3 } = require("web3");
require("dotenv").config();

// set a provider to the sepolia testner using node rpc url
const web3 = new Web3(process.env.sepolia_ws);

// interacting with the smart contract
const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "randomNo",
        type: "uint256",
      },
    ],
    name: "RandomNo",
    type: "event",
  },
];

const address = "0xA36432F7B12f160F685717c4Ab12EB883a682810";

// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(abi, address);

// using contract.methods to get value
console.log("1");
const subscription = contract.events.RandomNo();
console.log("2");

subscription.on("data", console.log); // new value every time the event is emitted
