const number1 = -4.002;

console.log("1" + "/" + " " + number1.toExponential()); // trả về kiểu string giá trị thập lục phân
console.log("2" + "/" + " " + number1.toFixed()); // Trả về kiểu string và làm tròn số thập phân thành số nguyên
console.log("3" + "/" + " " + number1.toString()); // Trả về kiểu string
console.log("4" + "/" + " " + number1.valueOf()); // Trả về kiểu string
console.log("5" + "/" + " " + Math.abs(number1)); // Trả về giá trị tuyệt đối là số nguyên dương
console.log("6" + "/" + " " + Math.ceil(number1)); // làm tròn dưới
console.log("7" + "/" + " " + Math.floor(number1)); // làm tròn trên
console.log("8" + "/" + " " + Math.fround(number1)); // trả về giá trị đơn vị nhỏ nhất và trừ 1 ví dụ: 4.5 => 4.4999999999
console.log("9" + "/" + " " + Math.pow(3, 2)); // mũ luỹ thừa, pow(value, mũ)
console.log("10" + "/" + " " + (Math.random() * 10 + 1000).toFixed());
