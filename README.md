blockchain101

1.สร้างไฟล์ .env
PRIVATE_KEY=YOUR_PRIVATE_KEY
RPC_URL=https://rpc-testnet.bitkubchain.io

*หมายเหตุ RPC_URL ในตัวอย่างเป็นของ Bitkub testnet คุณสามารถเปลี่ยนได้หากต้องการ

2.รันคำสั่ง make build
จะได้ไฟล์ SimpleContract_sol_SimpleContract.abi และ SimpleContract_sol_SimpleContract.bin

3.รันคำสั่ง make deploy
จะ deploy smart contract และ interact กับ smart contract ดังกล่าว และได้ contract address ออกมา

เสริม
read-smart-contract.ts
 - เอาไว้ call read mothod ใน smart contract address ที่คุณระบุ ให้เปลี่ยนตัวแปร contractAddress เป็น contract address ของคุณ

write-smart-contract.ts
 - เอาไว้ call write mothod ใน smart contract address ที่คุณระบุ ให้เปลี่ยนตัวแปร contractAddress เป็น contract address ของคุณ และ เปลี่ยนค่าที่คุณอยากจะ store

transfer.ts
 - เอาไว้โอน token ของ RPC ที่คุณกำหนด จากกระเป๋าของ PRIVATE_KEY ของคุณ ไปยัง account 2 ที่คุณต้องการ
