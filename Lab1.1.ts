export{};
let age: number = 25;
let disc: boolean = true;

let price: number;

if(age < 12 ){
    price = 60;
} else if (age < 60) {
    price = 120;
} else {
    price = 100;
}

let discount: number = 0;

if (disc) {
    discount = price * 0.10;
}

let finalPrice = price - discount;

console.log(`คุณอายุ ${age} ปี`);
console.log(`ราคาปกติ ${price} บาท`);
console.log(`ได้รับส่วนลด ${discount} บาท`);
console.log(`ราคาสุทธิ ${finalPrice} บาท`);
