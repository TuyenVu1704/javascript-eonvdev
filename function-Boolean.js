// Boolean(value)
console.log(Boolean(0)); // false
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
// Tất cả giá trị trên trả về false
console.log(false || false);
console.log(false || true);
console.log(false && false);
console.log(false && true);
console.log(!false); //
// So sánh == và ===

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(true == 1); // true, vì giá trị true là 1, nên true được convert ra là 1 = 1
console.log(true === 1); // false
