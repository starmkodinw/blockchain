import { ethers } from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
    // connect to the network
    let provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
    console.log(provider, process.env.RPC_URL);
    console.log(wallet);

    // deploy the contract
    const abi = fs.readFileSync("./SimpleContract_sol_SimpleContract.abi", "utf8")
    const binary = fs.readFileSync(
        "./SimpleContract_sol_SimpleContract.bin",
        "utf8"
    )
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("Deploying, please wait...")
    const contract = await contractFactory.deploy() as any
    await contract.waitForDeployment("1")
    console.log(contract)
    console.log(contract.BaseContract.target); //CA

    // interact with the contract
    let currentFavoriteNumber = await contract.getValue()
    console.log(`Current Favorite Number: ${currentFavoriteNumber}`)
    console.log("Updating favorite number...")
    let transactionResponse = await contract.store(8)
    let transactionReceipt = await transactionResponse.wait()
    currentFavoriteNumber = await contract.getValue()
    console.log(`New Favorite Number: ${currentFavoriteNumber}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })