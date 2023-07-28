// Function 1
function sum(a, b) {
    return a + b;
}
sum(5, 10);
// function 2
const add = sum;
function average(a, b, fn) {
    const total = add(a, b);
    return total / 2;
}

let result = console.log(average(300, 300, add));

// function 3

(function () {
    console.log("function 3");
})();

// Bai 1: Viết hàm so sánh 2 số a, b tìm số lớn hơn

function maxNumer(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("bạn cần nhập số");
        return;
    }
    return Math.max(a, b);
}

console.log(maxNumer(2000, 1000));

//Bài 2: Viết hàm in hoa chữ cái đầu

function capitalize(word = "") {
    if (word === "") return console.log("Bạn cần nhập vào chuỗi");

    let fristword = word.toLowerCase().charAt(0).toUpperCase();
    let remainword = word.toLowerCase().slice(1);
    return `${fristword}${remainword}`;
}

console.log(capitalize(""));

// Arrow function

const square = () => 1000;
const square2 = (x) => {
    return Math.pow(x, 4);
};
console.log(square());
console.log(square2(2));
