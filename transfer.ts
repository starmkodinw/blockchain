import "dotenv/config"
const { Web3 } = require('web3');

const NODE_URL = process.env.RPC_URL
const web3 = new Web3(NODE_URL);

const account = web3.eth.accounts.privateKeyToAccount('0x'+process.env.PRIVATE_KEY!);
web3.eth.accounts.wallet.add(account);
const from = account.address // account 1
const to = "0x4f285e4b425D7400aE4f29f0F34e49410684C40a" // account 2

const transferToken = async(from: string, to: string) => {
  const transferAmount = web3.utils.toWei('0.5', 'ether');
  const gasPrice = await web3.eth.getGasPrice();
  const estimateGas = await web3.eth.estimateGas({from, to, value: transferAmount});
  const result = await web3.eth.sendTransaction({from, to, value:transferAmount, gasPrice: gasPrice * BigInt(2), gas: estimateGas * BigInt(2)}).on('error', console.error);
  console.log(`Send tx: ${result.transactionHash} result: `, result.status);
}

transferToken(from, to)