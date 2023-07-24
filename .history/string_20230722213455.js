// tao bien luu string

const name = "Tuyen";

console.log(name);
console.log(typeof name);

const newStr = "My name is " + name + " and I am Frontend Developer";

console.log(newStr);
console.log(newStr.charAt(4)); // Trả về ký tự theo index
console.log(newStr.charCodeAt(1)); // Trả về bộ mã ký tự code của mã số đó
console.log(newStr.codePointAt(4)); // Trả về bộ mã ký tự code của mã số đó giống charCodeAt
console.log(newStr.concat(["Java", "PHP"])); // Nối mảng vào cuối phần tử
console.log(newStr.endsWith("My", 2)); // Trả về true nếu vị trí cuối cùng là nội dung chứa nó

console.log(newStr.includes("name", 9));
