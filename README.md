blockchain101

- Nonce ใน Block ของ Bitcoin คือตัวเลขสุ่ม 4 ไบต์ที่ถูกเพิ่มลงใน Block Header เพื่อใช้ในการคำนวณค่าแฮชของ Block นั้น
- Genesis block = first block
- SHA256 => "SHA Two-Fifty-Six"
- Anders Brownworth => bitcoin demo
- (Sign) private key + message(amount, from to) => signature
- (Verify) public key + message(amount, from to) + signature => true, false
- Private key -> Public key -> Address
- Public Key = เลขที่บัญชีของคุณ
- Address = เลขที่บัญชีของคุณเช่นกัน แต่ว่าเป็นเวอร์ชั่นที่สั้นกว่าที่ผู้คนสามารถใช้เพื่อส่ง Bitcoin มาให้คุณ
- base gase : ขึ้นลงตามปริมาณ transaction
- Proof of Work (PoW)
    miner แข่งกันแก้โจทย์คณิตศาสตร์
    ใช้พลังงานไฟฟ้ามาก
    ช้า
    Bitcoin
- Proof of Stake (PoS)
    ผู้ตรวจสอบ stake เพื่อรับสิทธิ์ในการตรวจสอบธุรกรรม
    ใช้พลังงานไฟฟ้าน้อย
    เร็ว
    Solana
- remix : https://remix.ethereum.org
- pragma solidity ^0.8.0; 
    ^ (caret) to tell out code that we're okay with a more new version
- contract เหมือน class ใน java
- bytes32 = maximum size
- Solidity มี zero value คล้ายกับ Golang
    address: 0x0000000000000000000000000000000000000000
    bytes: 0x00
- every single contract has an address
- ยิ่ง doing more things in function ยิ่ง gas แพง
- view, pure = read state ฟรี gas, ยกเว้นถูกเรียกใน function ที่เสียค่า gas
- memory หมายถึง พื้นที่เก็บข้อมูลชั่วคราวบน EVM
    ข้อมูลใน memory จะถูกลบหลังจาก function เสร็จสิ้นการทำงาน
    การใช้ memory มีค่าใช้จ่าย gas มากกว่า storage
    เข้าถึงข้อมูลได้เร็วกว่า storage
- calldata
    เหมาะสำหรับการเก็บข้อมูล input ของ function
    มีค่าใช้จ่าย gas ต่ำกว่า memory
    เข้าถึงข้อมูลได้ช้ากว่า memory
    มีขนาดจำกัด (24576 bytes)
