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
- EVM access & store information:
    1.Stack
    2.Memory
    3.Storage
    4.Calldata
    5.Code
    6.Logs
- memory หมายถึง พื้นที่เก็บข้อมูลชั่วคราวบน EVM
    modify ได้ ถ้ารับเป็น input แล้ว
    ข้อมูลใน memory จะถูกลบหลังจาก function เสร็จสิ้นการทำงาน
    ใช้ gas มากกว่า storage
    เร็วกว่า storage
- calldata
    เหมาะสำหรับการเก็บข้อมูล input ของ function
    modify ไม่ได้ ถ้ารับเป็น input แล้ว
    ใช้ gas ต่ำกว่า memory
    ช้ากว่า memory
    มีขนาดจำกัด (24576 bytes)
- storage
    permanent พื้นที่เก็บข้อมูลถาวร
    ใช้ gas น้อยกว่า memory
    ช้ากว่า memory
    การแก้ไขข้อมูลใน storage มีค่าใช้จ่าย gas
- ABI = Application Binary Interface
- inheritant สืบทอบ class เหมือน JAVA
    contract Child is Parent {}
    ถ้าจะ override function => เพิ่ม virtual ใน funtion ของ parent, เพิ่ม override ใน funtion ของ child
- payable
    function ที่สามารถรับ Ether ได้
    variable ที่สามารถเก็บ Ether ได้
    modifier ที่ควบคุมการเข้าถึงฟังก์ชัน
- reverting
    การยกเลิกธุรกรรม 
    undo any action before, and send remaining gas back (คืน gas ที่จะใช้ process ต่างๆ หลังจาก require)
- Oracle
    smart contract, blockchain มันไม่รู้จักโลกภายนอก ต่อ API ไม่ได้
    Oracle เป็นตัวกลางเชื่อมต่อระหว่าง blockchain กับ ข้อมูลภายนอก
    ChainLink
- Solidity ไม่นิยมใช้ทศนิยมด้วยเหตุผ ความแม่นยำ => ใช้จำนวนเต็มและ subunits แทน
- msg.value = WEI, msg.sender = from (sender address)
- library
    เหมือน contract แต่ประกาศ variable ไม่ได้, send ether ไม่ได้
    แยก code ออกเป็นส่วนๆ
- SafeMath ใน solidity version ใหม่ จะ avoid overflow
    ใส่ uncheck { //do overflow } จะไม่ safe
- for loop
    for(uint256 i = 0; i < xxx.length; i++) {
        <!-- do something -->
    }