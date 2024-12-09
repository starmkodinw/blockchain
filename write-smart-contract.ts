import { ethers } from "ethers"
import "dotenv/config"

async function callMothod() {
  console.log("Calling method...");
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  const abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"addUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getValue","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"number","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int256","name":"_number","type":"int256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"usersMap","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
  
  const contractAddress = "0xF9AEc1518620DaBf9fC121c9eA5539E18d2a309F";
  const privateKey = process.env.PRIVATE_KEY!;
  const signer = new ethers.Wallet(privateKey, provider);
  const contractWithSigner = new ethers.Contract(contractAddress, abi, signer);

  try {
    const result = await contractWithSigner.store(555);
    console.log("Result:", result); 
  } catch (error) {
    console.error("Error:", error);
  }
}

callMothod();