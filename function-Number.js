console.log("1" + "/" + "" + Number("4.5"));
console.log("2" + "/" + "" + Number("abcd")); // trả về NaN
console.log("3" + "/" + "" + Number(undefined)); // trả về NaN
console.log("4" + "/" + "" + Number(0)); // trả về 0
console.log("5" + "/" + "" + Number(null)); // trả về 0
console.log("6" + "/" + "" + Number(false)); // trả về 0
console.log("7" + "/" + "" + Number(true)); // trả về 1
