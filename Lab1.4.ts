type Member = [string,number,boolean];

let members: Member[] = [
    ["อนันต์", 25, false],
    ["เจนจิรา", 35, true],
    ["ชาคริต", 42, true],
    ["รุ่งโรจน์", 49, false],
    ["สามารถ", 27, false],
];

for (let i = 0; i < members.length; i++) {
    let member = members[i];

    if (member[2] == false){
        console.log(`$ {member[0]} อายุ ${member[1]} ปี ยังไม่ชำระเงิน`);
    }
}