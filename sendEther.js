import { Web3 } from "web3";
let web3 = new Web3(new Web3.providers.HttpProvider("<RPC Server>"));

const sendEth = async () => {
  const weiAmount = web3.utils.toWei("<amount>", "ether");
  await web3.eth.sendTransaction({
    from: "<Sender Address>",
    to: "<Receiver Address",
    value: weiAmount,
  });
};
sendEth();
