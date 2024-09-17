"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, 4, 5, 6));
console.log(add2(2, 3, ...[4, 5, 6]));
const sub = (num1, num2) => num1 - num2;
const mult = function (num1, num2) {
    return num1 * num2;
};
// Generics
function getItems(items) {
    return new Array().concat(items);
}
let concatNums = getItems([1, 23, 4, 5, 6]);
let concatStrs = getItems(["1", "3", "2"]);
