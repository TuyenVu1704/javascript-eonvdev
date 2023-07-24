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

console.log(newStr.includes("hay", 0)); // Trả về true chạy qua từng index đầu tiên nếu có ký tự trong chuỗi
const text1 = "abc";
const text2 = "bac";
console.log(text1.localeCompare(text2)); // Trả về kiểu -1, 0, 1
// 1 là text1 đứng sau text2
// 0 là text1 bằng text2
// -1 là text1 đứng trước text2
console.log(newStr.match("uy")); // Trả về một mảng bao gồm, index vị trí đứng của giá trị truyền vào
console.log(newStr.matchAll("uy"));
const number = "5";
console.log(number.padEnd(4, "0")); // Trẩ về tối đa số lượng ký tự là 4 và gán thêm 0 vào sau
console.log(number.padStart(4, "0")); // Trẩ về tối đa số lượng ký tự là 4 và gán thêm 0 vào trước
console.log(newStr.repeat(2)); // lập lại nội dung
console.log(newStr.replaceAll("e", "u")); // Thay thế toàn bộ
console.log(newStr.search("e"));
console.log(newStr.split("name")); // Tách ra xoá bỏ nội dung truyền vào trả về mảng có nội dung còn lại
console.log(newStr.slice(1, 15)); // Lấy ra nội dung ở từ vị trí 1 đến 15
console.log(newStr.substring(1, 3)); // trả 1 string có nội dung từ 2 đến 10
console.log(newStr.substr(1, 3));
console.log(newStr.toLowerCase());
console.log(newStr.toLocaleLowerCase());
console.log(newStr.trim()); // Cắt khoảng trắng
console.log(newStr.valueOf());
