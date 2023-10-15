const { Web3 } = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("<RPC Server>"));
const ABI = require("<ABI file location>");
const CONTRACT_ADDRESS = "<Deployed Smart Contract Address>";

const connectContract = async () => {
  const contractInstance = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  const valA = await contractInstance.methods.getStateVar().call();
  // call()- method is only use when we are reading from smart contract
  console.log(valA.toString());
  // console.log(contractInstance);
};
connectContract();
