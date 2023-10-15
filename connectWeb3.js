const { Web3 } = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("<RPC Server>"));

const connectingBlockChain = async () => {
  // when we are interacting with blockchain network then it returns promises which we need to handle with async await keyword
  const balance = await web3.eth.getBalance("<User Account Address>");
  const balanceInEth = web3.utils.fromWei(balance, "ether"); // converting wei to eth
  const balanceInWei = web3.utils.toWei(balanceInEth, "ether"); // converting  eth to wei
  console.log(balance.toString()); // when fetching balance from account it is in big object number with suffix 'n', we need to convert it into string
  console.log(balanceInEth);
  console.log(balanceInWei);
};

connectingBlockChain();
