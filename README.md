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