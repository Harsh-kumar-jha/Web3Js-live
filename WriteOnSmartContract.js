const { Web3 } = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("<RPC server>"));
const ABI = require("<ABI file Location>");
const CONTRACTADDRESS = "<Smart Contract Address>";

const connectContract = async () => {
  const contractInstance = new web3.eth.Contract(ABI, CONTRACTADDRESS);
  await contractInstance.methods
    .setStateVar(100)
    .send({ from: "<From Which account we are calling - address>" });
};
connectContract();
